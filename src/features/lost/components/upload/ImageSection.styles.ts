import styled from 'styled-components';

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const ImageButton = styled.button`
  display: flex;
  height: 4rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px dashed ${(props) => props.theme.colors.grayScale.gy600};
  background-color: ${(props) => props.theme.colors.grayScale.black};
`;

export const ImageButtonText = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.gy50};
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;
