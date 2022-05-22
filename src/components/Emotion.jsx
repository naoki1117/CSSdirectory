/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  return (
    <SContainer>
      <Stitle>- Emotion -</Stitle>
      <SButton>Fight</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Stitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
