import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import styled from "styled-components";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick =  () => {

    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
    <Button onClick={handleClick}>
      <RiLogoutCircleRLine />
    </Button>

    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #da107b;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;