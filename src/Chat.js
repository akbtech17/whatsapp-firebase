import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.css'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
// import axios from './axios';

export default function Chat() {

    // const [inputText, setInputText] = useState('');

    // const sendMessage = async (e) => {
    //     e.preventDefault();
    //     await axios.post('/messages/new', {
    //         name: "DEMO APP",
    //         timestamp:"Just now!",
    //         message:inputText,
    //         recieved: true
    //     })
    //     setInputText('');
    // } 

    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
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
                    <p className={`chat__message chat__reciever`}>
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
                        // value={inputText}
                        type="text" 
                        placeholder="Type a message"
                        // onChange = {e => setInputText(e.target.value)}
                    />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
