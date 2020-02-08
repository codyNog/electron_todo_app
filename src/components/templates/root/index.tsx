import React from "react";
import TodoForm from "../../organisms/TodoForm";
import TodoList from "../../organisms/TodoList";
import { spacing } from "../../../constrants/style";
import { Background } from "../../layouts";
import ConfirmModal from "../../organisms/Modal/confirm";
import ModalStore from "../../../store/global/Modal";

const Root: React.FC = () => {
  const { isConfirmModalOpen } = ModalStore.useContainer();
  return (
    <>
      {isConfirmModalOpen() && <ConfirmModal />}
      <Background>
        <TodoList />
        <TodoForm style={{ marginTop: spacing.S }} />
      </Background>
    </>
  );
};

export default Root;
