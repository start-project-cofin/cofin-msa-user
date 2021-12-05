import React from 'react'

import MessageBody from 'message/components/MessageBody';
import MessageDate from 'message/components/MessageDate';
import MessageSearch from 'message/components/MessageSearch';
import MessageTags from 'message/components/MessageTags'
import MessageType from 'message/components/MessageType';

const MessagePage = () => {
    return (<>
    <div>
    <table style={{width:"1200px", height:"800px", margin:"0 auto", alignItems:'center center'}}>
            <tr style={{width:"100%", height:"15%"}}>
                <td style={{width:"30%"}}>
                    <tr><MessageSearch /></tr>
                    <tr><MessageType /></tr>
                    <tr><MessageDate /></tr>
                    <tr><MessageTags /></tr>
                </td>
                <td><MessageBody/></td>
            </tr>
            
        </table>
    </div>
    </>)
}
export default MessagePage;