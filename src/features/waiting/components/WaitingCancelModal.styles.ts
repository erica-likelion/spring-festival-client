import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem 0rem;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const HeaderText = styled(Text)`
  ${(props) => props.theme.fonts.body.medium500};
`;

export const MediumText = styled(Text)`
  ${(props) => props.theme.fonts.body.small400};
`;
