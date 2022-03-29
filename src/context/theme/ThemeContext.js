import createDataContext from "../createDataContext";

const initialState = "dark";

const themes_TWO = ["dark, light"]; // the case where there are only two themes

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggle_theme":
      // this is the case where the app only has two themes
      return themes_TWO.filter((currentTheme) => currentTheme != state)[0];

    case "set_theme":
      // this is the case where there are more than two themes
      return action.payload;
    default:
      return state;
  }
};

const toggleTheme = (dispatch) => {
  return () => {
    dispatch({
      type: "toggle_theme",
    });
  };
};

const setTheme = (dispatch) => {
  return (theme) => {
    dispatch({
      type: "set_theme",
      payload: theme,
    });
  };
};

export const { Context, Provider } = createDataContext(
  ThemeReducer,
  {
    toggleTheme,
    setTheme,
  },
  initialState
);
