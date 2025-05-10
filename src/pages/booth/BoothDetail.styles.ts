import styled from 'styled-components';

export const BackgroundImg = styled.img`
  width: 100%;
  height: 5.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy100};
  object-fit: cover;
  object-position: center;
`;

export const Section = styled.div`
  padding: 1rem 1rem 1.75rem;
  border-bottom: 0.5rem solid ${(props) => props.theme.colors.grayScale.gy900};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BottomPadding = styled.div`
  height: 6.25rem;
`;
