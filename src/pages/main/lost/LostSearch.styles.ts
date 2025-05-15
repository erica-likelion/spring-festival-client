import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const RecentSearchSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: start;
  margin-top: 1.69rem;
`;

export const RecentSearchHeader = styled.h3`
  margin-left: 1.25rem;
  margin-bottom: 1rem;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.offwhite};
`;

export const LoginInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const LoginInfoButton = styled.button`
  display: flex;
  width: 15rem;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  background: #4f75f9;
  border: none;
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  cursor: pointer;
`;

export const LoginInfoText = styled.p`
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
  align-self: stretch;
`;
export const HistoryItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EmptyHistoryMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.856rem;
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy500};
`;

export const ResultSection = styled.section`
  padding-top: 1rem;
  padding-left: 1.44rem;
  padding-right: 1.44rem;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

export const AnimatedSection = styled(motion.div)`
  width: 100%;
`;

export const NoResultMessageWrap = styled.div`
  display: flex;
  width: 19.6875rem;
  height: 4.375rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  margin-top: 1.56rem;
`;

export const NoResultMessageBox = styled.div`
  display: flex;
  height: 2.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
`;

export const NoResultMessageTitle = styled.p`
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
`;

export const NoResultMessage = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
`;
