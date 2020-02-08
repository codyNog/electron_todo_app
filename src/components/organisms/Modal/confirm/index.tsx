import React from "react";
import styled from "@emotion/styled";
import PrimaryButton from "../../../atoms/Button/primary";
import NegativeButton from "../../../atoms/Button/negative";
import ModalStore from "../../../../store/global/Modal";
import { spacing } from "../../../../constrants/style";

const Wrapper = styled.div({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  zIndex: 100
});

const Window = styled.div({
  backgroundColor: "white",
  padding: spacing.L
});

const ConfirmModal: React.FC = () => {
  const { onOkConfirmModal, closeModal } = ModalStore.useContainer();

  return (
    <Wrapper>
      <Window>
        <PrimaryButton onClick={onOkConfirmModal}>OK</PrimaryButton>
        <NegativeButton onClick={closeModal}>キャンセル</NegativeButton>
      </Window>
    </Wrapper>
  );
};

export default ConfirmModal;
