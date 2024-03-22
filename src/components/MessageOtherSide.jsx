import React from 'react';

const MessageOtherSide = (props) => {
    
    return (
        <div className='messageOtherside'>
            <div className='messageother'>
            <p>{props.msg.contenent}</p>
            </div>
            <div className='messageotherinfo'>
                <img src="images.jpg" alt="" />
                <span>{props.msg.emmetteur.username} </span>

            </div>
           
            
            
        </div>
    );
}

export default MessageOtherSide;
