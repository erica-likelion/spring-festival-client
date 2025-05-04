import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const ImageBox = styled.div<{ $imageUrl: string }>`
  position: relative;
  width: 6.625rem;
  height: 8.6875rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background:
    linear-gradient(0deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 10%)),
    url(${(props) => props.$imageUrl}) center/cover no-repeat;
`;
export const StaffLabel = styled.div`
  position: absolute;
  bottom: 0.37rem;
  left: 0.38rem;
  display: inline-flex;
  padding: 0.25rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
`;
export const LabelText = styled.div`
  ${(props) => props.theme.fonts.body.xsmall400};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;
export const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`;

export const ItemName = styled.div`
  ${(props) => props.theme.fonts.body.small500};
  color: ${({ theme }) => theme.colors.grayScale.gy100};
  align-self: stretch;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

export const LocationText = styled.div`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${({ theme }) => theme.colors.grayScale.gy500};
`;
