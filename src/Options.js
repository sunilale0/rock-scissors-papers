import React from 'react';

const options =(props)=>{

    const style = {
        border: '2px solid blue',
        background: '#000',
        width: '30%',
        padding: '20px',
        margin: '10px',
        display: 'inline-block'
    }

    return(
        <div style={style}>
            {props.name}
            
        </div>
    )
}

export default options;