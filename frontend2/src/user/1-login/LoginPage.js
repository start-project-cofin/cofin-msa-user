import React from 'react'
import UserLogin from './UserLogin'
import UserLost from './UserLost'
import UserJoin from '../2-join/UserJoin'

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