import { GET_CARDS } from "../actions/types";

const initialState = {
  section: "main",
  subsection: "",
  subsubsection: "",
  subsubsubsection: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        section: action.payLoad.section,
        subsection: action.payLoad.subsection,
        subsubsection: action.payLoad.subsubsection,
        subsubsubsection: action.payLoad.subsubsubsection
      };
    default:
      return state;
  }
}
