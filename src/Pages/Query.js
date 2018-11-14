import React from 'react';
import qs from 'qs';

const Query = ({location}) => {
    const data={
        abc: {
            name: '김금봉',
            phone: '010-2838-1341'
        },
        def: {
            name: '문충선',
            phone: '010-0404-0404'
        },
    };

    const query = qs.parse(location.search.substr(1));
    // alert(location.search.substr(1));
    // alert(query.id);
    // const id = query.id === 'abc'; //data[location.search.substr(1)].phone;
    if(!data[query.id]){
        return <h1>Not match</h1>
    }
    return (
        <div>
            <h1>Query</h1>
            {
                <div>
                    <h2>{data[query.id].name}</h2>
                    <p>{data[query.id].phone}</p>
                </div>
            }
        </div>
    );
};

export default Query;
