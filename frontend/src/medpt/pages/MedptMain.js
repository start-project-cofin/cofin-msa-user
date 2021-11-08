// import React from 'react'
// // import styled from "styled-components"
// // import {useTable, useSortBy} from "react-table"
// // import InfiniteScroll from "react-infinite-scroll-component"
// // import MedPoint20210905 from 'med/components/MedPoint20210905'
// // import AddressList from './sw/medPoint/components/AddressList'
// import { DataGrid } from '@mui/x-data-grid';



// const MedPoint = () => {
    
//     return(
//     <div>  
//     <text align="center"><h1><b>지역별 선별 신료소 정보</b></h1></text>
//         <table style={style}>
//         <tr style={{height: "20px"}}>현재 위치: </tr>
//         <tr style={{height: "20px"}}>
//             <td style={{width:"5%", border:"1px solid black"}}>시도/ <code>medpt_city</code></td>
//             <td style={{width:"5%", border:"1px solid black"}}>동읍면리/ <code>medpt_district</code></td>
//             <td style={{width:"10%", border:"1px solid black"}}>기관명/ <code>medpt_name</code></td>
//             <td style={{width:"20%", border:"1px solid black"}}>상세 주소/ <code>medpt_address</code></td>
//             <td style={{width:"10%", border:"1px solid black"}}>전화 번호/ <code>medpt_phone</code></td>
//             <td style={{width:"10%", border:"1px solid black"}}>운영 시간/ <code>medpt_hr_wkday</code><br/> +<br/><code>medpt_hr_wkend</code></td>
//             <td style={{width:"10%", border:"1px solid black"}}>관할보건소/ <code>medpt_gov</code></td>
            
//         </tr>
//         <tr>
//             <td colspan="6" style={{border:"1px solid black", height:"auto"}}><code>선별 진료소 리스트</code> - 사용자 위치에 가까운 거리순으로 나열</td>
//         </tr> 
    
//     </table>
// </div>
// )}
// export default MedPoint

// // make this collapse: 선별진료소 정보, 사전예약 의료기관 정보
// // page shows static list of med points in selected area, then opens map when clicked on. 
// // min 6 cols { 지역별 / 동읍면 / 상세 주소 / 전화번호 / 진료시간 / 주차가능여부 }

// const style={
//     width:"auto",
//     height:"800px",
//     margin:"0 auto", 
//     align:"center",
//     border:"1px solid black",
//     padding: "1.5em 0 1.5em 0"
// }