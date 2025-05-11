import styled from 'styled-components';

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  align-self: stretch;
  align-items: flex-start;
`;

export const PreviewImage = styled.img`
  width: 6.625rem;
  height: 8.6875rem;
  border-radius: 0.75rem;
  object-fit: cover;
  background-color: lightgray;
`;

export const MariginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ReUploadButton = styled.button`
  display: flex;
  width: 7.5rem;
  padding: 0.25rem 1rem;
  margin-top: 1.37rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary.bl400};
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
  cursor: pointer;
`;

export const ImageButton = styled.button`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px dashed ${(props) => props.theme.colors.grayScale.gy600};
  background-color: ${(props) => props.theme.colors.grayScale.black};
  cursor: pointer;
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
