import React from 'react'

export default function Chats(props){
  
    return (
      <div className='chats'>
        <div className="userchat">
                    <img src="../images/img1profile.png" alt="" />
                    
                    <div className="userchatinfo">
                      <span>{props.nom}</span>
                      <p>{props.message}</p>
                    </div>
                    
                 </div>
      </div>
    )
  }

