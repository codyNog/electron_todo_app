import React from "react";
import "ress";
import Router from "./router";
import ModalStore from "./store/global/Modal";

const App: React.FC = () => {
  return (
    <ModalStore.Provider>
      <Router />
    </ModalStore.Provider>
  );
};

export default App;
