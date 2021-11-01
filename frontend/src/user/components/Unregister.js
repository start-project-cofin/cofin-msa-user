import React from 'react'

const Unregister = () => (
<><form style={{width:"100%"}}>
                        <h1>탈퇴</h1> <br/><h2>...하시겠습니까? </h2>
                        <label for="id">아이디 : </label>                
                        <input type="text" id="id" /><br/><br/>
                    
                        <label for="pw">비밀번호 : </label>
                        <input type="password" id="pw" /><br/><br/>

                    {/* separate instance where input is wrong */}
                        {/* <Wrong/> */}                        
                        <br/>
                        <input type="submit" title="탈퇴 확인" value="확인" onclick="Goodbye()"/><br/><br/>
            </form>
</>
)
export default Unregister;

const Goodbye=()=>{
    return("Good Bye ㅜ_ㅜ")
}