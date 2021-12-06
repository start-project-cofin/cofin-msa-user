import React from 'react'
import SearchBox from './SearchBox';
// import Test from '../user/Test'
// import Login from 'user/old/Login';

export default function Navigation(){
    return(
        <div>
            <ul id='nav' type='none'>
                <li><a href="/medpts">medpt</a></li>
                <li><a href="/message">message</a></li>
                <li><a href="/news">news</a></li>
                <li><a href="/user">user</a></li>
                <li><br /><br /></li>
                <li><SearchBox/></li>
                <li><br /><br /></li>
                {/* <li><Test/></li> */}
                {/* <li><Login/></li> */}
            </ul>
        </div>
    );
}