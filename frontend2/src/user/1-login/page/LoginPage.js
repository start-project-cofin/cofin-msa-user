import React from 'react'
import UserLogin from '../components/UserLogin'
import UserJoin from '../../2-join/UserJoin'

// import { Link as RouterLink } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Card, Stack, Link, Container, Typography } from '@mui/material';
// // layouts
// import AuthLayout from '../layouts/AuthLayout';
// // components
// import Page from '../components/Page';
// import { MHidden } from '../components/@material-extend';
// import { LoginForm } from '../components/authentication/login';
// import AuthSocial from '../components/authentication/AuthSocial';


export default function LoginPage(){
    return(
        <div>       
            <text align="center"><h1><b>로그인</b></h1></text>
            <br/><br/>
            <UserLogin/>
            <br/><br/>
            <input type="submit" title="인증서 가입" value="인증서 가입"/><br/><br/>
            <input type="button" title="인증서 로그인" value="인증서 로그인" /><br/><br/>
            <a href="#" onclick="UserAction.snsLogin('naver','%2F')">
            <img src="http://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_naver_login.gif" alt="네이버 로그인"/></a><br/><br/>
            {/* input type="button" title="SNS 로그인" value="네이버 로그인"  */}
            <a href="#" onclick="UserAction.snsLogin('kakao','%2F')">
            <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_kakao_login.gif" alt="카카오 로그인"/></a><br/><br/>
            {/* <input type="button" title="SNS 로그인" value="카카오 로그인" /> */}
            <a href="#" onclick="UserAction.snsLogin('facebook','%2F')">
            <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_facebook_login.gif" alt="페이스북 로그인"/></a><br/><br/>
            <a href="#" onclick="UserAction.snsLogin('google','%2F')">
            <img src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/btn_google_login.gif" alt="구글 로그인"/></a><br/><br/>
            {/* redirect to main page after login success? */}
            <br/><br/>
            {/* <UserLost><b>아이디/비번 찾기</b></UserLost> */}
            {/* onclick/uncollapse module */}
            <br/><br/>
            <UserJoin><b>회원 가입</b></UserJoin>
            {/* onclick/uncollapse module */}
        </div>
    )
}