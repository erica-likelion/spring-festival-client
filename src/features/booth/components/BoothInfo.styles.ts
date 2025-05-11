import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ImageBtnFrame = styled.div`
  width: 100%;
  height: 6.25rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  background: ${(props) => props.theme.colors.grayScale.gy800};
  border-radius: 0.75rem;
  border: 0.5px solid ${(props) => props.theme.colors.grayScale.gy800};
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextFrame = styled.div`
  display: flex;
  gap: 0.38rem;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const BoothName = styled(Text)`
  ${(props) => props.theme.fonts.header.h2};
`;

export const VerticalLine = styled.div`
  width: 0.0625rem;
  background: ${(props) => props.theme.colors.grayScale.gy800};
`;
