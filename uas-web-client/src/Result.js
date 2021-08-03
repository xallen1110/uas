import React from 'react';

const Result = (props) => {
    const rows = props.results.map((result, index) => {
        return (
            <li key={index}>{result}</li>
        );
    });

    return (
        <div>
            <div>Results for {props.query}:</div>
            <ul>{rows}</ul>
        </div>
    );
}

export default Result;
