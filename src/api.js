// Base URL

const baseUrl = (query, date = "") =>
  `https://api.rawg.io/api/${query}?key=${process.env.REACT_APP_API_KEY}&${date}`;

//Getting the dates

const month = String(new Date().getMonth() + 1).padStart(2, "0");
const day = String(new Date().getDate()).padStart(2, "0");
const year = new Date().getFullYear();

const currentDate = `${year}-${month}-${day}`;

const lastYear = `${year - 1}-${month}-${day}`;

const nextYear = `${year + 1}-${month}-${day}`;

//popularGames

export const popularGamesUrl = baseUrl(
  "games",
  `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
);

export const upcomingGamesUrl = baseUrl(
  "games",
  `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
);

export const newGamesUrl = baseUrl(
  "games",
  `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`
);
