import styled from 'styled-components';

export const Container = styled.div<{ $first: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  padding: 2px;
  background: ${(props) =>
    props.$first
      ? 'linear-gradient(90deg, #4f75f9 0%, #f9f79f 30%, #fba7fd 70%, #4f75f9 100%)'
      : ''};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
`;

export const Rank = styled.div`
  width: 1.75rem;
  height: 3.88rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const RankFrame = styled.div`
  display: flex;
  width: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.0625rem;
`;

export const DrawText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.primary.bl400};
`;

export const DownText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.secondary.rd500};
`;

export const UpText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.secondary.gr500};
`;

export const RankNumber = styled.p`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.gy100};
`;

export const Like = styled.div`
  width: 3.88rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const LikeCount = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy100};
`;
