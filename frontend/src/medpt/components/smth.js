import React from 'react';

const list =[
    { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
    { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},

]

export default function Table({list, colNames, width='auto', height='auto'}){
    return(
        <div>  {list.length >0 && (
            <table cellSpacing="0" style={{width:width, height:height, padding:'5px 10px'}}>
                <thead>
                    <tr>
                        {colNames.map((headerItem, index)=>(
                            <th key={index}>
                                {headerItem.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        )}
        </div>
    )
}
