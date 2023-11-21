import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem;
  border-radius: 1.2rem;
  width: 32.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.grayScale.gray5};
  ${({ theme }) => theme.colors.grayScale.gray8};

  &:focus {
    border-color: ${({ theme }) => theme.colors.pointColor.blue0};
  }
  &:disabled {
    border-color: ${({ theme }) => theme.colors.grayScale.gray3};
    color: ${({ theme }) => theme.colors.grayScale.gray5};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

export const SubText = styled.p`
  ${({ theme }) => theme.fonts.caption2};
`;

export const Price = styled.p`
  ${({ theme }) => theme.fonts.caption2};
`;
