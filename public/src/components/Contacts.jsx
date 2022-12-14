import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { COLORS } from '../utils/colors';
import styled from "styled-components"

export default function Contacts({ contacts, currentUser, changeChat }) {
    const navigate = useNavigate();
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);

    const changeCurrentChat = (index, contact) => { 
        setCurrentSelected(index);
        changeChat(contact);
    };
    return (
        <>
            {
                currentUserImage && currentUserName && (
                    <Container>

                        <div className="contacts">
                            {
                                contacts.map((contact, index) => {
                                    return (
                                        <div
                                         className={`contact ${
                                            index === currentSelected ? "selected" : ""
                                            }`}
                                             key={contact._id}
                                              onClick={()=>changeCurrentChat(index,contact)}>
                                            <div className="avatar">
                                                <img src={contact.avatarImage} alt="avatar" />
                                            </div>
                                            <div className="username">
                                                <h3>{contact.username}</h3>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="current-user">
                            <Tooltip title="Change Avatar">
                              <div className="avatar" onClick={()=>{navigate('/setAvatar')}}>
                                  <img src={currentUserImage} alt="avatar" />
                              </div>
                            </Tooltip>  
                            <div className="username">
                                <h2>{currentUserName}</h2>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}


const Container = styled.div`
  display: grid;
  grid-template-rows: 79% 15%;
  gap: 6%;
  overflow: hidden;
  border-radius: 0.2rem;
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
          border-radius: 50px;
          filter: grayscale(100%);
        }
      }
      .username {
        h3 {
          color: white;
          text-transform: capitalize;
        }
      }
    }
    .selected {
      background-color: ${COLORS.darkBlue};
    }
  }
  .current-user {
    border: 1px solid ${COLORS.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      cursor: pointer;
      img {
        height: 4rem;
        max-inline-size: 100%;
        border-radius: 50px;
        filter: grayscale(100%);
      }
    }
    .username {
      h2 {
        color: white;
        text-transform: capitalize;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;

