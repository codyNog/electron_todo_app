import styled from "@emotion/styled";

const buttonFactory = styled.button({
  color: "white",
  outline: "none",
  minHeight: 40,
  minWidth: 80,
  border: "solid 1px black",
  borderRadius: 4,
  ":focus": {
    boxShadow: "4px 4px 4px #8D9EB8"
  }
});

export default buttonFactory;
