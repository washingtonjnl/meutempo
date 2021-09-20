import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem 1.5rem;

  flex: 1;
  overflow-y: scroll;

  img {
    width: 9.6rem;
    align-self: center;
    margin-bottom: 2rem;
  }
`;

export const TextContent = styled.article`
  h1 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0.046875rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.grayscale.titleActive};

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: 0.046875rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.grayscale.label};

    margin-bottom: 1.8rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 3.7rem;
    padding: 1.5rem;
    border: none;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.grayscale.inputBackground};
    margin-bottom: 1.5rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.046875rem;

    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.grayscale.line};

    &::placeholder {
      font-weight: 300;
      color: ${({ theme }) => theme.colors.grayscale.placeholder};
    }
  }

  button {
    height: 4rem;
    border: none;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.primary.default};

    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.75rem;
    letter-spacing: 0.046875rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.grayscale.background};
  }
`;
