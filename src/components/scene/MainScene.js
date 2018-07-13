import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Kontakt from 'react-native-kontaktio';

const {
  connect,
  configure,
  disconnect,
  isConnected,
  startScanning,
  stopScanning,
  restartScanning,
  isScanning,
  // setBeaconRegion,
  setBeaconRegions,
  getBeaconRegions,
  setEddystoneNamespace,
  IBEACON,
  EDDYSTONE,
  // Configurations
  scanMode,
  scanPeriod,
  activityCheckConfiguration,
  forceScanConfiguration,
  monitoringEnabled,
  monitoringSyncInterval,
} = Kontakt;

const region1 = {
  identifier: 'Test beacons 1',
  uuid: '05f62a3d-f60f-44bc-b36e-2b80fd6c9679',
  roomname: '신공학관 5125'
  // no minor provided: will detect all minors
};

const region2 = {
  identifier: 'Test beacons 2',
  uuid: 'B0702880-A295-A8AB-F734-031A98A512D3',
  major: 2,
  // no minor provided: will detect all minors
};


export default class MainScene extends Component {
  state = {
    scanning: false,
    beacons: [],
    eddystones: [],
    statusText: null,
  };

  componentDidMount() {
    // Initialization, configuration and adding of beacon regions
    connect(
      'MY_KONTAKTIO_API_KEY',
      [IBEACON, EDDYSTONE],
    )
      .then(() => configure({
        scanMode: scanMode.BALANCED,
        scanPeriod: scanPeriod.create({
          activePeriod: 6000,
          passivePeriod: 20000,
        }),
        activityCheckConfiguration: activityCheckConfiguration.DEFAULT,
        forceScanConfiguration: forceScanConfiguration.MINIMAL,
        monitoringEnabled: monitoringEnabled.TRUE,
        monitoringSyncInterval: monitoringSyncInterval.DEFAULT,
      }))
      .then(() => setBeaconRegions([region1, region2]))
      .then(() => setEddystoneNamespace())
      .catch(error => console.log('error', error));

    // Beacon listeners
    DeviceEventEmitter.addListener(
      'beaconDidAppear',
      ({ beacon: newBeacon, region }) => {
        console.log('beaconDidAppear', newBeacon, region);

        this.setState({
          beacons: this.state.beacons.concat(newBeacon)
        });
      }
    );
    DeviceEventEmitter.addListener(
      'beaconDidDisappear',
      ({ beacon: lostBeacon, region }) => {
        console.log('beaconDidDisappear', lostBeacon, region);

        const { beacons } = this.state;
        const index = beacons.findIndex(beacon =>
          this._isIdenticalBeacon(lostBeacon, beacon)
        );
        this.setState({
          beacons: beacons.reduce((result, val, ind) => {
            // don't add disappeared beacon to array
            if (ind === index) return result;
            // add all other beacons to array
            else {
              result.push(val);
              return result;
            }
          }, [])
        });
      }
    );
    DeviceEventEmitter.addListener(
      'beaconsDidUpdate',
      ({ beacons: updatedBeacons, region }) => {
        console.log('beaconsDidUpdate', updatedBeacons, region);

        const { beacons } = this.state;
        updatedBeacons.forEach(updatedBeacon => {
          const index = beacons.findIndex(beacon =>
            this._isIdenticalBeacon(updatedBeacon, beacon)
          );
          this.setState({
            beacons: beacons.reduce((result, val, ind) => {
              // replace current beacon values for updatedBeacon, keep current value for others
              ind === index ? result.push(updatedBeacon) : result.push(val);
              return result;
            }, [])
          })
        });
      }
    );

    // Region listeners
    DeviceEventEmitter.addListener(
      'regionDidEnter',
      ({ region }) => {
        console.log('regionDidEnter', region);
      }
    );
    DeviceEventEmitter.addListener(
      'regionDidExit',
      ({ region }) => {
        console.log('regionDidExit', region);
      }
    );

    // Beacon monitoring listener
    DeviceEventEmitter.addListener(
      'monitoringCycle',
      ({ status }) => {
        console.log('monitoringCycle', status);
      }
    );

    /*
     * Eddystone
     */

    DeviceEventEmitter.addListener(
      'eddystoneDidAppear',
      ({ eddystone, namespace }) => {
        console.log('eddystoneDidAppear', eddystone, namespace);

        this.setState({
          eddystones: this.state.eddystones.concat(eddystone)
        });
      }
    );

    DeviceEventEmitter.addListener(
      'namespaceDidEnter',
      ({ status }) => {
        console.log('namespaceDidEnter', status);
      }
    );

    DeviceEventEmitter.addListener(
      'namespaceDidExit',
      ({ status }) => {
        console.log('namespaceDidExit', status);
      }
    );

  }

  componentWillUnmount() {
    // Disconnect beaconManager and set to it to null
    disconnect();
    DeviceEventEmitter.removeAllListeners();
  }

  _startScanning = () => {
    startScanning()
      .then(() => this.setState({ scanning: true, statusText: null }))
      .then(() => console.log('started scanning'))
      .catch(error => console.log('[startScanning]', error));
  };
  _stopScanning = () => {
    stopScanning()
      .then(() => Actions.Scan() );
  };
  _restartScanning = () => {
    restartScanning()
      .then(() => this.setState({ scanning: true, beacons: [], statusText: null }))
      .then(() => console.log('restarted scanning'))
      .catch(error => console.log('[restartScanning]', error));
  };
  _isScanning = () => {
    isScanning()
      .then(result => {
        this.setState({ statusText: `Device is currently ${result ? '' : 'NOT '}scanning.` });
        console.log('Is device scanning?', result);
      })
      .catch(error => console.log('[isScanning]', error));
  };
  _isConnected = () => {
    isConnected()
      .then(result => {
        this.setState({ statusText: `Device is ${result ? '' : 'NOT '}ready to scan beacons.` });
        console.log('Is device connected?', result);
      })
      .catch(error => console.log('[isConnected]', error));
  };
  _getBeaconRegions = () => {
    getBeaconRegions()
      .then(regions => console.log('regions', regions))
      .catch(error => console.log('[getBeaconRegions]', error));
  };

  /**
   * Helper function used to identify equal beacons
   */
  _isIdenticalBeacon = (b1, b2) => (
    (b1.identifier === b2.identifier) &&
    (b1.uuid === b2.uuid) &&
    (b1.major === b2.major) &&
    (b1.minor === b2.minor)
  );

  

  _renderBeacons = () => {
    const colors = ['#F7C376', '#EFF7B7', '#F4CDED', '#A2C8F9', '#AAF7AF'];
    const { scanning, beacons } = this.state;
    if (scanning && beacons.length) {
    return this.state.beacons.sort((a, b) => a.accuracy - b.accuracy).map((beacon, ind) => (
      <View key={ind} style={[styles.beacon, {backgroundColor: colors[beacon.minor - 1]}]}>
      <Text>거리: {beacon.accuracy}, 근접성: {beacon.proximity}</Text>
      <Text style={{fontWeight: 'bold'}}>{beacon.uuid}</Text>
     
      {this._renderButton('QR 출석 체크 시작', this._stopScanning, '#FF8C00')}
      </View>
    ), this);
  }
  };

  _renderEmpty = () => {
    const { scanning, beacons } = this.state;
    let text;
    if (!scanning) text = "비콘 감지를 시작하세요!";
    if (scanning && !beacons.length) text = "아직 비콘이 감지되지 않았습니다.";
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  _renderStatusText = () => {
    const { statusText } = this.state;
    return statusText ? (
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: 'red' }]}>{statusText}</Text>
      </View>
    ) : null;
  };

  _renderButton = (text, onPress, backgroundColor) => (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  render() {
    const { scanning, beacons } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {this._renderButton('주변 비콘 탐색 시작', this._startScanning, '#84e2f9')}
    
        </View>
      
        <ScrollView>
          {scanning && beacons.length ? this._renderBeacons() : this._renderEmpty()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  beacon: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
});