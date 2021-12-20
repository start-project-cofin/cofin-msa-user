import React from 'react'

const MessageDate = () => {
return(
<div><fieldset><legend><h4>기간 검색</h4></legend>
    <form action="">
        
        <label><input type="date" id="start"/></label>
        <label><input type="date" id="end"/></label>
        <input onclick="search()" type="submit" value="검색" />
    </form></fieldset>    
</div>
)}
export default MessageDate