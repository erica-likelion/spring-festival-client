import { motion, Reorder } from 'framer-motion';
import styled from 'styled-components';

export const Card = styled(Reorder.Item)`
  width: 100%;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.grayScale.gy950} 55.99%,
    ${(props) => props.theme.colors.grayScale.black} 99.88%
  );
  border-radius: 0.75rem;
`;

export const CardWrapper = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardImage = styled(motion.div)<{ image: string }>`
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: calc(100% + 2rem);
  height: 10.3rem;
  border-radius: 0.75rem 0.75rem 0 0;
  background:
    linear-gradient(180deg, rgb(23 23 27 / 0%) 29.33%, #17171b 100%),
    url(${(props) => props.image}) lightgray center / cover no-repeat;
  z-index: 0;
`;

export const Header = styled(motion.div)`
  width: 100%;
  min-height: 2rem;
  position: relative;
`;

export const HeaderText = styled.span`
  flex: 1;
  overflow: hidden;
  color: ${(props) => props.theme.colors.grayScale.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.theme.fonts.header.h4};
  z-index: 1;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const VerticalLine = styled.div`
  height: 1rem;
  width: 0.0625rem;
  background: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const BigNumTextFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  :first-child {
    ${(props) => props.theme.fonts.header.h2};
    color: ${(props) => props.theme.colors.primary.bl400};
  }

  :last-child {
    ${(props) => props.theme.fonts.body.large400};
    color: ${(props) => props.theme.colors.grayScale.white};
  }
`;

export const NumTextFrame = styled.div`
  display: flex;
  padding: 0.125rem 0rem;
  align-items: center;
  gap: 0.125rem;

  & > p {
    ${(props) => props.theme.fonts.body.medium400};
    color: ${(props) => props.theme.colors.grayScale.white};
  }
`;

export const Title = styled.span`
  width: 4rem;
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Strong = styled.span`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Small = styled.span`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const SelectedFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  align-items: flex-end;
`;

export const Expendable = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
`;

export const HeaderFrame = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
`;
