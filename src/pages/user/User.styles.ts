import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 1.25rem 6.25rem;
  height: calc(100vh - 4.375rem);
  overflow-y: auto;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const RefreshHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
