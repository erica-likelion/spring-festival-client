import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 23.4888rem;
  height: 29.375rem;
  aspect-ratio: 375.82/470;
  background: url('<path-to-image>') lightgray 0px 0px / 100% 100% no-repeat;
`;

export const TitleSongWrap = styled.div`
  display: flex;
  width: 20.7011rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TitleSongText = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const SongWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
`;

export const SongBox = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const SongImage = styled.div`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: #c4c4c4;
`;

export const SongName = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
