import React from 'react';
// import styled from 'styled-components'
// import TagCloud from 'react-tag-cloud';
// import randomColor from 'randomcolor';

import NewsDate from 'news/components/NewsDate';
import NewsSearch from 'news/components/NewsSearch';
import NewsType from 'news/components/NewsType';
import NewsTags from 'news/components/NewsTags'

export default function NewsNav() {
    return (<>
    <div>
    <table>
            <tr>
                <td>
                    <tr><NewsSearch /></tr>
                    <tr><NewsType /></tr>
                    <tr><NewsDate /></tr>
                    <tr><NewsTags /></tr>
                </td>
                <td>YOOOO</td>
            </tr>
            
        </table>
    </div>
    </>)
}