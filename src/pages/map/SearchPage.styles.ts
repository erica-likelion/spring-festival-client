import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: 100vh;
  padding-bottom: auto;
`;

export const SearchHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.25rem 0;
  gap: 1rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  rotate: 180deg;
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border: 0.0625rem solid ${(props) => props.theme.colors.grayScale.gy800};
  border-radius: 0.375rem;
  min-height: 2.5rem;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.grayScale.white};

  ${(props) => props.theme.fonts.body.medium500};
  &::placeholder {
    color: ${(props) => props.theme.colors.grayScale.gy500};
  }

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 2.25rem;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

export const RecommendedSearchSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
`;

export const RecommendedSearchHeader = styled.h3`
  margin-left: 1.25rem;
  margin-bottom: 1rem;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.offwhite};
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  gap: 0.62rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const NoSearchDataSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.56rem;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const NoSearchDataTitle = styled.h3`
  ${(props) => props.theme.fonts.body.medium400};
`;

export const NoSearchDataSubtitle = styled.div`
  ${(props) => props.theme.fonts.body.small400};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.12rem;
`;
