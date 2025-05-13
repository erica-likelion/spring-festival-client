import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 6.25rem;
  position: relative;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 6.25rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 1rem 1.21rem;
  width: 21rem;
`;

export const CarouselsBox = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding-bottom: 2.5rem;
`;

export const Pad = styled.div`
  padding: 2.5rem;
`;

export const NoticeBox = styled.div`
  display: flex;
  width: 21rem;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 2.5rem;
`;

export const NoticeText = styled.p`
  ${(props) => props.theme.fonts.header.h3}
`;
export const Btn = styled.div`
  display: flex;
  padding: 0.25rem 0.625rem 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;

export const SubText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500}
`;

export const Layout = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  z-index: -10;
`;

export const Effect = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  justify-content: flex-end;
  z-index: 10;
  width: 100%;
  pointer-events: none;
`;
