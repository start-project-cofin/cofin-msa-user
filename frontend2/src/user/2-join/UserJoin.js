import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

export default function UserJoin(){
    const history=useHistory()
    const SERVER=''
    const[join,setJoin]=useState({})
    const{}=join
    const handleChange =e=>{
        const{value,name}=e.target
        setJoin({...join,[name]:value})
    }
    const userJoin=joinRequest=>axios.post(`${SERVER}/??`, JSON.stringify(joinRequest),{headers})
    const headers = {}
    const handleSubmit=e=>{}

    return(
        <div><h2>가입신청</h2>
        <form onSubmit={handleSubmit} method='POST'>
            <ul>
            <li>
                <label>
                    아이디 : <input type="text" id="username" name="username" value={username} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                </label>
                <small>4~15자리 이내의 영문과 숫자</small>
            </li>
            <li>
                <label>
                    이메일 : <input type="email" id="email" name="email" value={email} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    비밀 번호 : <input type="password" id="password" name="password" value={password} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    이름 : <input type="text" id="name" name="name" value={name} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    주소 : <input type="text" id="address" name="address" value={address} onChange={handleChange}/>                </label>
            </li>
            <li>
                <label>
                    등록일 : <input type="text" id="birth" name="birth" value={birth} onChange={handleChange}/>
                </label>
            </li>
           
            <li>
                <input type="submit" value="회원가입"/>
            </li>

        </ul>
        </form></div>
    )
}