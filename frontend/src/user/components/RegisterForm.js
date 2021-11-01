import React from 'react'
import styled from 'styled-components'

const RegisterForm = () => {
    return(
    <div><fieldset>
    <legend><h1>가입 하기</h1></legend>
    <form onSubmit={""} action="">
        <div class="title">
            <label for="name">아이디: <input type="text" id="user_id" size="20" minlength="4" maxlength="15"/>                
                </label><br/>
            <small> 4~15자리 이내의 영문과 숫자</small><br/><br/>            
            <label>비밀번호: <input type="password" id="user_pwd" />
            </label><br/><br/>            
            <label>비밀번호 확인: <input type="password" id="check_pwd" />
            </label>
        </div><br/><br/>

        <div>
            <label>이름: <input type="text" id="user_name" />
            </label><br/><br/>
            <label>생년월일: <input type="date" id="user_birth" />
            </label>
        </div><br/>
            <div class="radio-buttons">
            <label>성별 : 
                <input type="radio" name="sex" value="male" /> 남성
                <input type="radio" name="sex" value="female" /> 여성
                <input type="radio" name="sex" value="other" /> 기타
            </label>
        </div><br/><br/>

        <div class="title">
            <label>연락처: <input type="text" id="user_phone" />
            </label><br/><br/>
            <label>이메일: <input type="email" id="user_email" />
            </label><br/><br/>
            <label>주소: <input type="text" id="user_address" />
            </label>
        </div><br/><br/>
        <div class="submit">
            <input type="submit" value="회원가입" />
            <input type="reset" value="다시쓰기" />
            </div>
        </form></fieldset>
    </div>
    )}
export default RegisterForm

const Style=styled.div`
        .title{
            float:left;
            width:100px;
            text-align: right;
            padding-right:10px;
        }
        .radio-buttons label{
            float:none;
        }
        .submit{
            text-align: right;
        }
`