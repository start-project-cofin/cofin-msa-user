import React from 'react'

export default function Navigation(){
    return(
        <div>
            <ul id='nav' type='none'>
                <li><a href="/medpts">medpt</a></li>
                <li><a href="/message">message</a></li>
                <li><a href="/news">news</a></li>
                <li><a href="/user">user</a></li>
            </ul>
        </div>
    );
}