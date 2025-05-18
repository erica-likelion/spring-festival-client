import styled from 'styled-components';
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
`;

export const Section = styled.section`
  width: 21rem;
`;

export const SubTitle = styled.nav`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 0 0 1rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 21rem;
  margin: 1rem 1.21rem;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
