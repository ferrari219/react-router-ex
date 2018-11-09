import React from 'react';
import qs from 'qs';

const Query = ({location}) => {
    const query = qs.parse(location.search.substr(1)); // substr 은 맨 앞의 "?" 문자열을 없애줍니다.
    const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열입니다.

    return (
        <div>
            <h1>Query</h1>
            { detail && <p>추가적인 정보가 어쩌고 저쩌고..</p> }
        </div>
    );
};

export default Query;