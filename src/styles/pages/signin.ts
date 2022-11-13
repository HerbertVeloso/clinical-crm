import styled from "styled-components";

export const MainWrapper = styled.main`
  min-height: calc(100vh - 5rem);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignInWrapper = styled.section`
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.shape};
  padding: 2rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color 0.2s;

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
    text-align: center;
  }

  small {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.red};
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;

  display: flex;
  align-items: center;
  gap: 1rem;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    font-size: 1.15rem;
  }
`;
