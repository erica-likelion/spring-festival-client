import styled from 'styled-components';

export const StyledKakaoButton = styled.button`
  display: flex;
  width: 20.9375rem;
  padding: 0.75rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.75rem;
  background: #ffec00;
  box-shadow: 0px 0px 12px 0px rgb(30 30 30 / 32%);
  color: #3c1e1e;
  border: none;
  ${(props) => props.theme.fonts.header.h4};
`;
