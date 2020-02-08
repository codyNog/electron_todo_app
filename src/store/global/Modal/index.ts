import { useState } from "react";
import { createContainer } from "unstated-next";

type ModalState = "close" | "confirm" | "alert";
type onOk = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>("close");
  const [onOkConfirmModal, setOkConfirmModal] = useState<onOk>(() => {});

  const openConfirmModal = () => {
    setModalState("confirm");
  };

  const isConfirmModalOpen = () => {
    return modalState === "confirm";
  };

  const closeModal = () => {
    setModalState("close");
  };

  return {
    openConfirmModal,
    isConfirmModalOpen,
    onOkConfirmModal,
    setOkConfirmModal,
    closeModal
  };
};

const ModalStore = createContainer(useModal);

export default ModalStore;
