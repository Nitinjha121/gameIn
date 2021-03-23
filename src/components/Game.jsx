import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animation";

function Game({ name, released, id, image }) {
  // Load Details Handler

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <motion.p>{released}</motion.p>
        <motion.img
          layoutId={`image ${String(id)}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  @media screen and (max-width: 650px) {
    margin-bottom: 40px;
  }
`;

export default Game;
