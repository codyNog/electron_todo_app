import React, { useState } from "react";
import TodoStore from "../../../store/global/Todo";
import Input from "../../atoms/Input";
import PrimaryButton from "../../atoms/Button/primary";
import DateInput from "../../atoms/Input/date";
import { spacing } from "../../../constrants/style";
import styled from "@emotion/styled";

const Wrapper = styled.div({});

interface Props {
  style?: React.CSSProperties;
}

const TodoForm: React.FC<Props> = ({ style }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [limit, setLimit] = useState("");
  const { addTodo } = TodoStore.useContainer();

  const initForm = () => {
    setTitle("");
    setDetail("");
    setLimit("");
  };

  const submit = () => {
    addTodo({ title, detail, limit });
    initForm();
  };

  const onClick = () => {
    if (title && limit) {
      submit();
    }
  };

  return (
    <Wrapper style={style}>
      <Input value={title} onChange={e => setTitle(e.currentTarget.value)} />
      <Input
        value={detail}
        onChange={e => setDetail(e.currentTarget.value)}
        style={{ marginLeft: spacing.XS }}
      />
      <DateInput
        value={limit}
        type={"date"}
        onChange={e => setLimit(e.currentTarget.value)}
        style={{ marginLeft: spacing.XS }}
      />
      <PrimaryButton onClick={onClick} style={{ marginLeft: spacing.XS }}>
        Submit
      </PrimaryButton>
    </Wrapper>
  );
};

export default TodoForm;
