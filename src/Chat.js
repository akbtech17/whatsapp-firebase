import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom'; 
import db from './firebase';

export default function Chat() {
    const [seed, setSeed] = useState("");
    const [inputText, setInputText] = useState('');
    const {roomID} = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if(roomID) {
            db.collection('rooms').doc(roomID).onSnapshot(snapshot => 
                setRoomName(snapshot.data().name)
            )
        }
    }, [roomID]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    },[])
    

    

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed " +  inputText);
        setInputText("");
    }

    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomID}.svg`}/>
                <div className="chat__headerInfo">
                        <h3>{roomName}</h3>
                    <p>Last Seen...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message chat__reciever`}>
                    <span className="chat__name">Anshul Bansal</span>
                        This is my message!
                    <span className="chat__timestamp">
                        timestamp!
                    </span>
                </p>
                <p className={`chat__message`}>
                    <span className="chat__name">Anshul Bansal</span>
                        This is my message!
                    <span className="chat__timestamp">
                        timestamp!
                    </span>
                </p>
                
                
                
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input 
                        value={inputText}
                        type="text" 
                        placeholder="Type a message"
                        onChange = {e => setInputText(e.target.value)}
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
