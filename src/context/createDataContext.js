import React, { useReducer } from "react";

// This automates the creation of Context
// To add a new context:
// 1. Create a context file in the Context folder (follow the syntax used in the template commented out below)
// 2. Go to App.js -> wrap GrandParentTabsProvider with the new Provider. Import  { Provider as YourOwnNameProvider } from "..."
// 3. Go to any of the files that need data. Import { Context as YourOwnNameContext } from "..."
// 2 and 3 are due to the fact that this automation file returns Context and Provider. We will have to rename them accordingly.
// 4. In the file, declare const { reducerName, ...anyOtherReducerMethods } = useContext(yourOwnNameContext)

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};

// Template for new context files:
/*
import createDataContext from "./createDataContext";

const yourOwnNameReducer = (state, action) => {
  switch (action.type) {
    case "action_1":
        return action.payload 
    default:
      return state;
  }
};

const action_1 = (dispatch) => {
  return () => {
    dispatch({
      type: "action_1",
      payload: "hello_world"
    });
  };
};

export const { Context, Provider } = createDataContext(
  yourOwnNameReducer,
  {
    action_1,
  },
  yourInitialState
);
*/
