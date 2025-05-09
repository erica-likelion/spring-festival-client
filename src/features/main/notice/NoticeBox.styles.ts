import styled from 'styled-components';

export const HorizontalLine = styled.div`
  display: flex;
  height: 0.5rem;
  padding: 0rem 0.125rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  margin-top: 0.375rem;
`;

export const Line = styled.div`
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  height: 1px;
  width: 100%;
  align-self: stretch;
`;

export const NoticeBox = styled.div`
  cursor: pointer;
`;
