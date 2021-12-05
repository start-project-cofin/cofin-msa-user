import React from 'react'
import styled from 'styled-components'
import Switch from "react-switch"


const AppAlert =()=> {
    return(
        <div><fieldset>
        <legend><h2>사용자 설정</h2></legend>
            <label>메일 알림을 받으시겠습니까?</label>            
            <br/><br/>
            

            <label>앱 내 알림을 받으시겠습니까?</label>
            <br/><br/>
            

            <label>앱 알림 전송 금지 시간</label><br/>
            <sub>(오후 18:00 ~ 익일 오전 07:00 까지 알림을 전송하지 않습니다.)</sub>
            <br/><br/>
            
            </fieldset></div>
    )
}


export default AppAlert