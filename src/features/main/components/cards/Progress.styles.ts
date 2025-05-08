import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 15.5rem;
  height: 2.25rem;
  padding: 0.5625rem 0.8438rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Active = styled.div`
  width: 0.6875rem;
  height: 1.125rem;
  background: linear-gradient(
    to bottom,
    #3952a9 7%,
    #4465d7 25.5%,
    #4f75f9 50.5%,
    #4465d7 90.5%,
    #3952a9 100%
  );
`;

export const InActive = styled.div`
  width: 0.6875rem;
  height: 1.125rem;
  background: #bcbebf;
`;
