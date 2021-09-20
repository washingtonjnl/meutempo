import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  color: ${({ theme }) => theme.colors.primary.dark};

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.0625rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;
