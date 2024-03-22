import React from 'react';

const Message = (props) => {
    console.log(props.msg);
    return (
        <div className='message'>
            <div className="messageinfo">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Ffr%2Fcategory%2Fpeople%2Fmen&psig=AOvVaw1UtLZTWQLTRDgedQbckS6I&ust=1703322451939000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDxqt_YooMDFQAAAAAdAAAAABAE" alt="" />
                <span>{props.msg.emmetteur.username}</span>
            </div>
            <div className="messageContenet">
                   {props.msg.contenent}
                </div>
        </div>
    );
}

export default Message;
