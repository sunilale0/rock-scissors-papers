import React from 'react'

const result =(props) => {
    const style = {
        border: '1px solid white',
        marginBottom: '20px',
        textAlign: 'center',
        padding: '20px'
    }

    const results = props.outcome.toUpperCase();
    return(
        <div style = {style}>
        <h1>
            Result<br/>
        </h1>
        {results}
        </div>
    )
}

export default result;