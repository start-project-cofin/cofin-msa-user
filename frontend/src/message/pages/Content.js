import React from 'react'

import {MessageAdd, MessageDate, MessageSearch, MessageTags, MessageType} from '../index';

const MessagePage = () => (<>
    <div>
    <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>
                <td style={{width:"30%"}}>
                    <tr><MessageSearch /></tr>
                    <tr><MessageType /></tr>
                    <tr><MessageDate /></tr>
                    <tr><MessageTags /></tr>
                </td>
                <td><MessageAdd/></td>
            </tr>
            
        </table>
    </div>
    </>)
export default MessagePage;