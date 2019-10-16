import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

const App = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="#c1c1c1" /> */}
      <Routes />
    </>
  );
};

export default App;
