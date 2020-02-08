import styled from "@emotion/styled";

const inputFactory = styled.input({
  outline: "none",
  minHeight: 40,
  minWidth: 80,
  border: "solid 1px black",
  borderRadius: 4,
  padding: 8,
  "::-webkit-inner-spin-button": {
    appearance: "none"
  }
});

export default inputFactory;
