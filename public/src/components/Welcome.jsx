import React from 'react'
import { COLORS } from '../utils/colors';
import styled from 'styled-components'

export default function Welcome({currentUser}) {
  return (
    <>
    <Container>
        <h1>
            Welcome, <span>{currentUser.username}!</span>
        </h1>
        <h3>Please select a chat to start Messaging.</h3>
    </Container>
    </>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
span{
    color: ${COLORS.pink};
    text-transform: capitalize;
}
`;