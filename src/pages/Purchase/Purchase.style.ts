import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  padding: 0 12rem;
`;

export const Title = styled.div`
  display: flex;
  height: fit-content;
  ${({ theme }) => theme.fonts.heading1};
`;

export const TypeContainer = styled.div`
  display: flex;
  position: fixed;
  top: 15rem;
  left: 10rem;
  width: fit-content;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: 3rem 0;
  height: fit-content;
`;

export const LeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 85rem;
`;

export const RightButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: fit-content;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Price = styled.p`
  display: flex;
  height: fit-content;
  ${({ theme }) => theme.fonts.caption2};
`;

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  left: -40rem;
  margin-top: 38.4rem;
  z-index: 2;
`;
