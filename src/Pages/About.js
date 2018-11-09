import React from 'react';

const About = ({match}) => {
    return (
        <div>
            <h1>About</h1>
            <p>소개:{match.params.name}</p>
        </div>
    );
};

export default About;