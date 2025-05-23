import styled from 'styled-components';

export const Container = styled.div<{ $isFirst?: boolean }>`
  cursor: grab;
  display: flex;
  width: 12.25rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.secondary.ye200};
  box-shadow: 3px 3px 0px 0px #e6ab12;
  margin-left: ${(props) => (props.$isFirst ? '1.25rem' : '0')};
`;

export const HeaderSection = styled.div`
  display: flex;
  padding: 0.875rem 1.25rem 0.75rem;
  align-items: center;
  gap: 7.5rem;
  align-self: stretch;
  border-top: 3px solid ${(props) => props.theme.colors.secondary.ye200};
  border-left: 3px solid ${(props) => props.theme.colors.secondary.ye200};
  background: ${(props) => props.theme.colors.grayScale.gy50};
`;

export const InfoSection = styled.div`
  display: flex;
  height: 9.75rem;
  padding: 2rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  align-self: stretch;
  border-top: 3px solid ${(props) => props.theme.colors.grayScale.gy50};
  border-left: 3px solid ${(props) => props.theme.colors.grayScale.gy50};
  background: ${(props) => props.theme.colors.secondary.ye200};
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EventTitle = styled.p`
  ${(props) => props.theme.fonts.header.h4}
  align-self: stretch;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.gy950};
  display: flex;
  text-align: left;
  gap: 0.5rem;
  flex-direction: column;
  width: 9.25rem;
`;

export const EventText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400}
  height: 2.25rem;
  align-self: stretch;
  overflow: hidden;
`;
