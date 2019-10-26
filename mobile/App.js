import React, { useEffect } from "react";
import Routes from "./src/routes";

import { Provider } from "react-redux";
import store from "./src/store";

import * as NavigationService from "./src/services/navigation/NavigationService";

export default function App() {
  useEffect(() => NavigationService.setNavigator(this.navigator), []);
  return (
    <Provider store={store}>
      <Routes
        ref={nav => {
          this.navigator = nav;
        }}
      />
    </Provider>
  );
}
