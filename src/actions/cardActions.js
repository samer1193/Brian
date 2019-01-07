//Register User
import { GET_CARDS } from "./types";

export const currentCard = cardData => dispatch => {
  dispatch({
    type: GET_CARDS,
    payLoad: cardData
  });
};
