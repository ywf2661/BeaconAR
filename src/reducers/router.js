import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import AlbumList from './components/albums/album_list';
import LibraryList from './components/library/library_list';
//import LoginForm from './components/login/login_form';
import MainScene from './components/scene/MainScene';
import TabScene from './components/scene/TabScene';
import SettingScene from './components/scene/SettingScene';
import MypageScene from './components/scene/MypageScene';
import SocialScene from './components/scene/SocialScene';
import SNSLoginScene from './components/scene/SNSLoginScene';
import JobLoginScene from './components/scene/JobLoginScene';
import SNSNaver from './components/scene/SNSNaver';
import SNSFacebook from './components/scene/SNSFacebook';
import Jobbasic from './components/scene/Jobbasic';
import RecomJob from './components/scene/RecomJob';
import Saramin from './components/scene/Saramin';
import JobKorea from './components/scene/JobKorea';
import Worknet from './components/scene/Worknet';
//import SNSScene from '../SNSScene';
//import JobsScene from '../JobsScene';
//import ScheduleScene from '../ScheduleScene';
import LoginScene from './components/scene/LoginScene';
import Menubar from './components/Navbar/Menubar';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import NavbarFavorite from './components/Navbar/NavbarFavorite';
import NavbarMypage from './components/Navbar/NavbarMypage';
import NavbarSetting from './components/Navbar/NavbarSetting';
import NavbarSocial from './components/Navbar/NavbarSocial';
import NavbarJobslogin from './components/Navbar/NavbarJobLogin';
import NavbarSNSLogin from './components/Navbar/NavbarSNSLogin';
import FavoriteScene from './components/scene/FavoriteScene';
import FavoriteEditScene from './components/scene/FavoriteEditScene'; 
import NaverScene from './components/scene/NaverScene';
import FacebookScene from './components/scene/FacebookScene'; 
import SNSScene from './components/scene/SNSScene';
import NavbarJobbasic from './components/scene/NavbarJobbasic';
import NavbarRecomJob from './components/scene/NavbarRecomJob';
import NavbarJobsite from './components/scene/NavbarJobsite';





const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
};

const RouterComponent = () => {
  return (
    <Drawer
        type="static"
        openDrawerOffset={0.41}
        ref={(ref) => this._drawer = ref}
        side="right"
        content={<Menubar />}
        open/*={this.props.drawer.selectedLibraryId}*/
    >
    <Router>
      
      <Scene key="root">
        <Scene
          key="MainScene"
          component={MainScene}
          navBar={Navbar}
         
         
        />
        <Scene
          key="Notice"
          component={TabScene}
          navBar={Navbar2}
          
        />
        <Scene
          key="library"
          onRight={() => Actions.pop()}
          rightTitle="back"
          rightButtonStyle={{ paddingLeft: 5 }}
          component={LibraryList}
          title="Library"
        />
        <Scene
          key="Schedule"
          component={TabScene}
          navBar={Navbar2}
        />
        <Scene
          key="SNS"
          component={TabScene}
          navBar={Navbar2}
        />
        <Scene
          key="Jobs"
          component={TabScene}
          navBar={Navbar2}
        />
        <Scene
          key="Jobbasic"
          component={Jobbasic}
          navBar={NavbarJobbasic}
        />
        <Scene
          key="Favorite"
          component={TabScene}
          navBar={NavbarFavorite}
        />
        <Scene
          key="FavoriteEdit"
          component={FavoriteEdit}
          navBar={NavbarFavorite}
        />
        <Scene
          key="Mypage"
          component={MypageScene}
          navBar={NavbarMypage}
        />
        <Scene
          key="Setting"
          component={SettingScene}
          navBar={NavbarSetting}
        />
        <Scene
          key="Social"
          component={SocialScene}
          navBar={NavbarSocial}
        />
        <Scene
          key="SNSlogin"
          component={SNSLoginScene}
          navBar={NavbarSNSLogin}
        />
       <Scene
          key="Facebook"
          component={FacebookScene}
          navBar={NavbarSNSLogin}
       />
       <Scene
          key="Naverblog"
          component={SNSNaver}
          navBar={NavbarSNS}
        />

        <Scene
          key="Naver"
          component={NaverScene}
         
          navBar={NavbarSNSLogin}
        />
      <Scene
          key="Mypage"
          component={MypageScene}
          navBar={NavbarMypage}
      />
      <Scene
          key="Jobslogin"
          component={JobsloginScene}
          navBar={NavbarJobslogin}
        />

        <Scene
          key="RecomJob"
          component={RecomJob}
          navBar={NavbarRecomJob}
        />

        <Scene
          key="Saramin"
          component={Saramin}
          navBar={NavbarJobsite}
        />

        <Scene
          key="JobKorea"
          component={JobKorea}
          navBar={NavbarJobsite}
        />

        <Scene
          key="Worknet"
          component={Worknet}
          navBar={NavbarJobsite}
        />





      <Scene
          key="login"
          component={LoginScene}
          initial
          
      />


      </Scene>
    </Router>
    </Drawer> 
  );
};


export default connect(mapStateToProps)(RouterComponent);
//export default RouterComponent;
