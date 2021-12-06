import React from 'react'
import MedptTable from '../components/MedptTable'

export default function MedptPage(){
    return(
        <div>       
            <text align="center"><h1><b>지역별 선별 신료소 정보</b></h1></text>
            {/* searchbox on top */}
            <MedptTable/>
            {/* number of rows/info + page arrowss */}
        </div>
    )
}