import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem 1.5rem;

  background: ${({ theme }) => theme.colors.grayscale.inputBackground};
  color: ${({ theme }) => theme.colors.grayscale.placeholder};

  a,
  button {
    display: flex;

    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0.046875rem;
    text-decoration: none;
    color: inherit;

    background: none;
    border: none;

    cursor: pointer;
  }
`;
