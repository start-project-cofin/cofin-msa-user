/* NodeJs 샘플 코드 */


var request = require('request');

var url = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=서비스키'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /* */
queryParams += '&' + encodeURIComponent('create_date') + '=' + encodeURIComponent('2021/06/22 00:00:00'); /* */
queryParams += '&' + encodeURIComponent('location_name') + '=' + encodeURIComponent('제주특별자치도'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    //console.log('Headers', JSON.stringify(response.headers));
    //console.log('Reponse received', body);
});


// {
//     "name":"행정안전부_재난문자방송 발령현황(지역별)"
//     "description":"휴대폰으로 송출된 재난문자 현황을 제공(재난문자 송출직후 실시간 제공은 국민재난안전포털(http://www.safekorea.go.kr)활용 필요 - 기존 행정안전부_재난문자방송 발령현황 API 서비스 개선을 위해 생성일자, 수신지역이름을 추가 함 - 행정안전부_재난문자 발령현황 API 지역코드를 활용하여 수진지역이름 기반으로 조회도 가능 함니다.",
//     "url":"https://www.data.go.kr/data/15091495/openapi.do",
//     "keywords":["재해문자,경보발령,발령내용"],
//     "license":"https://data.go.kr/ugs/selectPortalPolicyView.do",
//     "dateCreated":"2021-10-01",
//     "dateModified":"2021-10-21",
//     "datePublished":"2021-10-01",
//     "creator":{
//         "name":"행정안전부",
//         "contactPoint":{
//             "contactType":"정보통계담당관실",
//             "telephone":"+82-0442051643",
//             "@type":"ContactPoint"
//         },
//         "@type":"Organization"
//     },
//     "distribution":[{
//         "encodingFormat":"JSON+XML",
//         "contentUrl":"https://www.data.go.kr/data/15091495/openapi.do",
//         "@type":"DataDownload"
//     }],
//     "@context":"https://schema.org",
//     "@type":"Dataset"
// }