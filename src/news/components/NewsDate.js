import React from 'react'

const NewsDate = () => {
return(
<div>
    <form action="">
        <legend><h3>기간 검색</h3></legend>
        <label><input type="date" id="start"/></label>
        <label><input type="date" id="end"/></label>
        <input onclick="search()" type="submit" value="검색" />
    </form>    
</div>
)}
export default NewsDate