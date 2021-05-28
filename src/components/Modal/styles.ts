import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--background);
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border: 0;
  border-radius: 0.25rem;
  margin-top: 1rem;
  background: var(--green);
  color: #fff;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChecksContainer = styled.div`
  width: 100%;
  /* padding: 0 1.5rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  & + button {
    margin-left: 0.5rem;
  }

  .income {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    width: 50%;
    height: 4rem;
    margin-right: 0.25rem;
    background: var(--shape);
    display: flex;
    &:hover {
      border-color: var(--green);
    }
  }

  .outcome {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    width: 50%;
    height: 4rem;
    margin-left: 0.25rem;
    background: var(--shape);
    display: flex;
    &:hover {
      border-color: var(--red);
    }
  }
`;
interface RadioButtonProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const color = {
  green: "rgba(51, 204, 149, 0.1)",
  red: "rgba(229, 46, 77, 0.1)",
};
export const CheckButton = styled.button<RadioButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  width: 50%;
  height: 4rem;
  margin-left: 0.25rem;
  display: flex;
  background: ${(props) =>
    props.isActive ? color[props.activeColor] : "transparent"};
`;
