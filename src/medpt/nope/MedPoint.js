import React from 'react'
// import styled from "styled-components"
// import {useTable, useSortBy} from "react-table"
// import InfiniteScroll from "react-infinite-scroll-component"

const MedPoint = () => {
    
    return(
    <div>
    <text align="center"><h1>지역별 선별 신료소 정보</h1></text>
    <table style={style}>
        <colgroup>
            <col width="15%"/>
            <col width="15%"/>
            <col width="30%"/>
            <col width="10%"/>
            <col width="20%"/>
            <col width="10%"/>
        </colgroup>
    <tr>
        {/* <td style={{width:"15%", border:"1px solid black"}}>지역명 - 대</td>
        <td style={{width:"15%", border:"1px solid black"}}>지역명 - 동읍면</td>
        <td style={{width:"20%", border:"1px solid black"}}>상세 주소</td>
        <td style={{width:"10%", border:"1px solid black"}}>전화 번호</td>
        <td style={{width:"10%", border:"1px solid black"}}>진료 시간</td>
        <td style={{width:"10%", border:"1px solid black"}}>주차가능 여부 - tick</td> */}
        <td>지역</td>
        <td>
            <select name="city" id="city">
                <option value="placeholder">--select--</option>
                <option value="">--서울--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
            </select>
        </td>
        <td>시군구동wtv</td>
        <td>
            <select name="district" id="district">
                <option value="placeholder">--select--</option>
                <option value="">--강남구--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
                <option value="">--seelct--</option>
            </select>
        </td>
        
    </tr>
    </table>
</div>
)}
export default MedPoint


// page shows static list of med points in selected area, then opens map when clicked on. 
// min 6 cols { 지역별 / 동읍면 / 상세 주소 / 전화번호 / 진료시간 / 주차가능여부 }
// div into two major td's: one of the list, other of map or enlarged details
// list should be editable as csv or the like. 
// or 무한 스크롤

const style={
    width:"1200px",
    height:"800px",
    margin:"0 auto", 
    align:"center",
    border:"1px solid black",
    padding: "1.5em 0 1.5em 0"
}