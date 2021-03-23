import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGamesUrl,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl);
  const newGameData = await axios.get(newGamesUrl);
  const upcomingData = await axios.get(upcomingGamesUrl);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGameData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (name) => async (dispatch) => {
  const searchGames = await axios.get(searchGamesUrl(name));

  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchGames.data.results,
    },
  });
};
