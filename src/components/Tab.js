import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  Dimensions,
  ListView,
  FlatList
} from 'react-native';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Menubar from './Navbar/Menubar';
import JobsScene from './scene/JobsScene';
import ScheduleScene from './scene/ScheduleScene';
import SNSScene from './scene/SNSScene';
import NoticeScene from './scene/NoticeScene';



const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
  
};
 
const FirstRoute = () => <NoticeScene />;
const SecondRoute = () => <ScheduleScene />;
const ThirdRoute = () => <SNSScene />;
const ForthRoute = () => <JobsScene />;
 
class Tab extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '공지사항' },
      { key: 'second', title: '수업조회' },
      { key: 'third', title: 'SNS' },
      { key: 'forth', title: '취업정보' }
    ],
  };
 
  _handleIndexChange = index => this.setState({ index });
 
  _renderHeader = props => <TabBar 
  Style={{ width: 69, height: 59, borderWidth: 1, borderColor: 'white' }}  
  {...props} />;
 
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
  });
 
  render() {
    return (
      /*<Drawer
        type="static"
        openDrawerOffset={0.41}
        ref={(ref) => this._drawer = ref}
        side="right"
        content={<Menubar />}
        open={this.props.drawer.selectedLibraryId}
      >*/
      <View style={styles.container}>
       <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}>
       </TabViewAnimated>
      </View>
     // </Drawer> 
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
}

export default connect(mapStateToProps)(Tab);
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: 'white'
  },
  navBar: {
    height: 71,
    backgroundColor: 'white',
    justifyContent: 'center',
      alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1 
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  },
  navBarText2: {
    fontSize: 18,
    color: 'black',
  },
  noticeText: {
    fontSize: 18,
    color: 'black',
    
  },
  notice2Text: {
    fontSize: 17,
    color: 'black',
    

  },
  buttonbar: {
    height: 59,
    flexDirection: 'column',
    borderWidth: 1
  },
  notice: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1
  }
});