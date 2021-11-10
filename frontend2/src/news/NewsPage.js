import React from 'react'
import NewsTable from './NewsTable'

export default function NewsPage(){
    return(
        <div>       
            <text align="center"><h1><b>코로나19 관련 뉴스</b></h1></text>
            {/* searchbox on top */}
            <NewsTable/>
            {/* number of rows/info + page arrowss */}
        </div>
    )
}