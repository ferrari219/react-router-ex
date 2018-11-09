import React from 'react';

const data = {
    a: {
        name: '홍길동',
        descreption: 'designer'
    },
    b: {
        name: '홍길순',
        descreption: 'frontend-dev'
    }
}

const Params = ({match}) => {
    // const profile = data[match.params.username];
    if(!data[match.params.username]){
        return <h1>Not match</h1>;
    }
    return (
        <div>
            <h1>{match.params.username}({data[match.params.username].name})</h1>
            <p>{data[match.params.username].descreption}</p>
        </div>
    );
};

export default Params;