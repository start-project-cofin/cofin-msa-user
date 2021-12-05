import React from 'react'
import NewsTable from '../components/NewsTable'
import NewsNav from 'news/components/NewsNav'

export default function NewsPage(){
    return(
        <div>       
            <text align="center"><h1><b>코로나19 관련 뉴스</b></h1></text>
            <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>
                <td style={{width:"30%"}}>
                    <tr><NewsNav/></tr>
                    </td>
            {/* searchbox on top */}
                <td>
                    <NewsTable/>
                    </td>
            {/* number of rows/info + page arrowss */}
            </tr>
            </table>
        </div>
    )
}
