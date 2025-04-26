import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  display: flex;
  width: 23.4375rem;
  height: 32.375rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

export const TitleSongWrap = styled.div`
  margin-top: 1rem;
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
