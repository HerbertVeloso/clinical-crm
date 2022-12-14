import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 5rem;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.shape};

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.2s;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: color 0.2s;

  svg {
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.primary};
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.title};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface ButtonProps {
  isDanger?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    !props.isDanger ? props.theme.colors.secundary : props.theme.colors.red};
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
