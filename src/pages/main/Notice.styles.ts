import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 20.94rem;
  gap: 0.375rem;
`;
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
