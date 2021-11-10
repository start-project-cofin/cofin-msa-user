import React from 'react'
import UserLogin from './UserLogin'
import UserLost from './UserLost'
import UserJoin from '../2-join/UserJoin'

export default function LoginPage(){
    return(
        <div>       
            <text align="center"><h1><b>로그인</b></h1></text>
            <br/><br/>
            <UserLogin/>
            {/* redirect to main page after login success? */}
            <br/><br/>
            <UserLost><b>아이디/비번 찾기</b></UserLost>
            {/* onclick/uncollapse module */}
            <br/><br/>
            <UserJoin><b>회원 가입</b></UserJoin>
            {/* onclick/uncollapse module */}
        </div>
    )
}