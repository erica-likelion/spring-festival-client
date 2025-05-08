import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 19.25rem;
  flex-direction: column;
  align-items: flex-start;
  border-top: 3px solid ${(props) => props.theme.colors.grayScale.gy50};
  border-left: 3px solid ${(props) => props.theme.colors.grayScale.gy50};
  background-color: ${(props) => props.theme.colors.primary.bl400};
  box-shadow: 3px 3px 0 0 #26409c;
`;

export const HeaderSection = styled.div`
  display: flex;
  padding: 0.875rem 1.25rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const InfoSection = styled.div`
  display: flex;
  padding: 1.75rem 0rem;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: linear-gradient(117deg, #a5b6ef 16.05%, #bbcfff 76.33%);
  border-top: 3px solid ${(props) => props.theme.colors.grayScale.gy50};
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EventTitle = styled.p`
  ${(props) => props.theme.fonts.header.h3}
  text-align: center;
  color: ${(props) => props.theme.colors.grayScale.gy950};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  color: ${(props) => props.theme.colors.grayScale.gy950};
  padding: 0.5rem 0 1.25rem;
`;

export const TextWrapper = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  display: flex;
  text-align: center;
  gap: 0.25rem;
`;

export const EventText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500}
`;
