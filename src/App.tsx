import React from 'react';
import { HashRouter } from "react-router-dom";
import RouterView from "./router";
import LoadingFullPage from "./components/LoadingFullPage";
function App() {
  return (
      <LoadingFullPage/>
      //<HashRouter>
      //    <RouterView/>
      //</HashRouter>
  );
}

export default App;
