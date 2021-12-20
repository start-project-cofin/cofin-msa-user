import React from 'react'

export default function UserLost(){
    return(<div>
    <form style={{width:"100%"}}>
                        <h2>ID/PW 찾기 </h2>
                        <label for="id">아이디 : </label>                
                        <input type="text" id="id" /><br/><br/>
                    
                        <label for="pw">비밀번호 : </label>
                        <input type="password" id="pw" /><br/><br/>

                        <label for="email">Email: </label>
                        <input type="text" id="email" /><br/><br/>
                        {/* separate instance where input is wrong */}
                        {/* <Wrong/> */}
                        
                        <br/><input type="button" title="ID/PW 찾기" value="ID/PW 찾기" onclick="submit"/>
                        <sub> * 메일함을 확인해주세요! </sub>            
            </form><br/></div>
    );
}
