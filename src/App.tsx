import React, { Fragment } from "react";
import { Provider } from "react-redux";
import GlobalStyles from "./globalStyles";
import Toasts from "./containers/Toasts";
import Users from "./containers/Users";
import Header from "./components/Header";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Toasts />
      <Header count={0} />
      <Users />
    </Fragment>
  </Provider>
);

export default App;
