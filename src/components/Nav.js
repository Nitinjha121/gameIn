import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animation";

function Nav() {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState();

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = (e) => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <StyledNav variant={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form onSubmit={submitSearch} className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button>Search</button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;

  @media screen and (max-width: 650px) {
    padding: 3rem 3rem;
  }

  input {
    width: 50%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;

    @media screen and (max-width: 530px) {
      width: 90%;
    }

    @media screen and (max-width: 390px) {
      width: 100%;
    }
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background: #ff7676;
    color: white;

    @media screen and (max-width: 650px) {
      padding: 0.5rem 1rem;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;