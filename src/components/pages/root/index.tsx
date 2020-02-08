import React from "react";
import TodoStore from "../../../store/global/Todo";
import Root from "../../templates/root";

const RootPage: React.FC = () => {
  return (
    <TodoStore.Provider>
      <Root />
    </TodoStore.Provider>
  );
};

export default RootPage;
