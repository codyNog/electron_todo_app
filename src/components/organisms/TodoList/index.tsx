import React, { useEffect } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import TodoStore from "../../../store/global/Todo";
import NegativeButton from "../../atoms/Button/negative";
import { spacing } from "../../../constrants/style";

const Wrapper = styled.div({});

const Todo = styled.div({
  display: "flex",
  alignItems: "center"
});

const Elem = styled.div({ marginLeft: spacing.XS });

const Danger = styled.span({
  color: "red"
});

const isLimitNearby = (date: string) => {
  const today = dayjs().format("YYYY-MM-DD");
  if (date === today) {
    return true;
  } else {
    return dayjs(date).isBefore(today);
  }
};

interface Props {
  style?: React.CSSProperties;
}

const TodoList: React.FC<Props> = ({ style }) => {
  const { todos, readTodos, deleteTodo } = TodoStore.useContainer();

  useEffect(() => {
    readTodos();
  }, [readTodos]);

  return (
    <Wrapper style={style}>
      {todos.map((elem, i) => {
        const { title, detail, limit } = elem;
        return (
          <Todo key={title} style={i !== 0 ? { marginTop: spacing.S } : {}}>
            <div>{title}</div>
            <Elem>{detail}</Elem>
            <Elem>
              {isLimitNearby(limit) ? <Danger>{limit}</Danger> : limit}
            </Elem>
            <NegativeButton
              onClick={() => deleteTodo(i)}
              style={{ marginLeft: spacing.XS }}
            >
              削除
            </NegativeButton>
          </Todo>
        );
      })}
    </Wrapper>
  );
};

export default TodoList;
