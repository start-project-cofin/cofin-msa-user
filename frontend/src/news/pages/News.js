import React from 'react';
// import styled from 'styled-components'
// import TagCloud from 'react-tag-cloud';
// import randomColor from 'randomcolor';

// import NewsBody from 'news/components/NewsBody';
import NewsBody from '../components/NewsBody';
import NewsDate from '../components/NewsDate';
import NewsSearch from '../components/NewsSearch';
import NewsType from '../components/NewsType';
import NewsTags from '../components/NewsTags'

// const SearchBox =()=> (
//     <from action="search.php" method="post">
//         <input type="text" title="Search"></input>
//         <input type="submit" value="검색"></input>
//     </from>)

// const NewsType=()=>(
//     <ul>
//         <li>"전체 뉴스"</li>
//         <li>"국내 뉴스"</li>
//         <li>"세계 뉴스"</li>
//         <li>"백신 특보"</li>
//     </ul>
//     // not list but folder link? 
// )

// const DatePeriod = () => (
// <div style={{width:"80%"}}>
//         <form>
//             <h3>기간 검색</h3>
//             <label><input type="date" id="start"/></label>
//             <label><input type="date" id="end"/></label>
//             <label><input type="button" id="Search" value="Search"/></label>
//         </form>    
//     </div>
// )

// const Tags = () => (
//     <TagCloud style={{
//         fontFamily:'sans-serif', 
//         fontSize:30,
//         fontWeight:'bold', 
//         fontStyle:'italic', color:()=>randomColor(),
//         padidng:5,
//         width:'100%',
//         height:'100%',
//     }}>
//         <div style={{fontSize:50}}>Seoul</div>
//         <div style={{color:'green'}}>Tag</div>
//         <div rotate={90}>cloud</div>
//     </TagCloud>
//     )

const News = () => {
    return (<>
    <div>
    <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>
                <td style={{width:"30%"}}>
                    <tr><NewsSearch /></tr>
                    <tr><NewsType /></tr>
                    <tr><NewsDate /></tr>
                    <tr><NewsTags /></tr>
                </td>
                <td><NewsBody/></td>
            </tr>
            
        </table>
    </div>
    </>)
}
export default News;