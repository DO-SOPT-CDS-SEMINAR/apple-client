import styled from 'styled-components';

export const ProductName = styled.h1`
  position: absolute;
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  z-index: 2;
`;

export const ProductInfo = styled.div`
  position: absolute;
  color: ${({ theme: { colors } }) => colors.grayScale.gray8};
  z-index: 2;

  top: 3rem;
  left: 3rem;

  & > h1 {
    margin-bottom: 1rem;
    ${({ theme: { fonts } }) => fonts.subheading1_1};
  }

  & > h2 {
    margin-bottom: 0.8rem;

    color: ${({ theme: { colors } }) => colors.grayScale.gray6};
    ${({ theme: { fonts } }) => fonts.caption1};
  }

  & > p {
    ${({ theme: { fonts } }) => fonts.body1_2}
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  position: absolute;
`;

export const Btn = styled.button`
  position: relative;

  display: flex;

  width: 48rem;
  height: 50rem;
  margin-right: 2.2rem;
  border-radius: 1.8rem;

  text-align: left;

  box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;
