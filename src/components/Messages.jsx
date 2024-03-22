import React, { useContext, useEffect, useState } from 'react';
import EmorRE from './EmorRe';
import axios from 'axios';
import { User } from '../pages/Home';

const Messages = () => {
    const [usermessages, setusermessages] = useState([]);
    const user = useContext(User);

    useEffect(() => {
        const getUserMessages = async () => {
            try {
                const res = await axios.get("http://localhost:9090/message");
                setusermessages(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching user messages:", error);
            }
        };

        getUserMessages();
    }, [usermessages]); // Empty dependency array means this effect runs once after the first render

    if (!usermessages) {
        return null;
    }

    if (!user) {
        return null;
    }

    

    return (
        <div className='messages'>
            {usermessages.map((ele, index) => (
                <EmorRE key={index} user={ele.emmetteur.email === user.email} message={ele} />
            ))}
        </div>
    );
}

export default Messages;
