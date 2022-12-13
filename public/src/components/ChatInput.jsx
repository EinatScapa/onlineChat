import React,{useState} from 'react'
import { COLORS } from '../utils/colors';
import styled from 'styled-components'
import {IoMdSend} from 'react-icons/io'

export default function ChatInput({handleSendMsg}) {
    const [msg, setMsg] = useState("");

    const sendChat = (e)=>{
        e.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }
  return (
    <Container>
        <div className="button-container">
        </div>
        <form className='input-container' onSubmit={(e)=>sendChat(e)}>
            <input type="text" placeholder='Type your message here!' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
            <button className="submit">
                <IoMdSend />
            </button>
        </form>
    </Container>
  )
}

const Container = styled.div`
display: grid;
grid-template-columns: 5% 95%;
align-items: center;
padding: 0.2rem;
padding-bottom: 0.3rem;
@media screen and (min-width: 720px) and (max-width: 1080px){
    padding: 0 1rem;
    gap: 1rem;
}
.button-container{
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    
}

.input-container{
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    input{
        width: 90%;
        padding: 0.9rem;
        border-radius: 2rem;
        background-color:${COLORS.darkBlue};
        color: white;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection{
            background-color: ${COLORS.darkGrey};
        }
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${COLORS.pink};
        border: none;
        cursor: pointer;
        @media screen and (min-width: 720px) and (max-width: 1080px){
            padding: 0.3rem 1rem;
            svg{
            font-size: 1rem;
            color: white;
        }
        }
        svg{
            font-size: 2rem;
            color: white;
        }
    }
}
`;
