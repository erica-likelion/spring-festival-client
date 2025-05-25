import styled from 'styled-components';

export const BackgroundImg = styled.img`
  width: 100%;
  height: 5.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy100};
  object-fit: cover;
  object-position: center;
`;

export const Section = styled.div`
  padding: 0rem 0rem 1.75rem;
  width: 20.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BorderSection = styled.div`
  width: 20.9375rem;
  padding: 0rem 0rem 2.75rem;
  display: flex;
  flex-direction: column;
`;

export const BottomPadding = styled.div`
  height: 6.65rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TakeOut = styled.div`
  display: flex;
  height: 1.625rem;
  padding: 0.0625rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.black};
`;

export const HorizontalLine = styled.div`
  height: 0.5rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;
