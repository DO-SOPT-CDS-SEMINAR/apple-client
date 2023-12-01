import { useRef, useState } from 'react';
import { AddToCartButton } from '../../common/Button/AddToCartButton';
import { ColorCarouselComponent } from './ColorCarouselComponent';
import * as S from './ColumnCarousel.style';
import { ConnectCarouselComponent } from './ConnectCarouselComponent';
import { GigaCarouselComponent } from './GigaCarouselComponent';
import { ModelCarouselComponent } from './ModelCarouselComponent';
import { IpadproIcApplebag, IpadproIcScrabNormal, IpadproIcTruck } from '../../assets/icon';

export const ColumnCarouselWrapper = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current) {
      setIsDragging(true);
      setStartY(event.clientY - wrapperRef.current.offsetTop);
      setScrollTop(wrapperRef.current.scrollTop);
      wrapperRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    wrapperRef.current?.style.removeProperty('cursor');
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (wrapperRef.current) {
      const y = event.clientY - wrapperRef.current.offsetTop;
      const distance = y - startY;
      wrapperRef.current.scrollTop = scrollTop - distance;
    }
  };
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    // 마우스 휠 이벤트 핸들러
    if (wrapperRef.current) {
      const delta = event.deltaY; // deltaY 값은 휠의 이동 방향과 속도를 나타냄
      wrapperRef.current.scrollBy({ top: delta, behavior: 'smooth' }); // 스크롤 이동
    }
  };
  return (
    <S.Wrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onWheel={handleScroll}
    >
      <ModelCarouselComponent />
      <ColorCarouselComponent />
      <GigaCarouselComponent />
      <ConnectCarouselComponent />
      <S.PriceWrapper>
        <S.ItemTitle>11형 iPad Pro Wi-Fi 21GB-스페이스 그레이</S.ItemTitle>
        <S.FinalPrice>₩1,249,000</S.FinalPrice>
        <S.VATText>약 ₩285,364의 VAT 포함</S.VATText>
        <S.CardText>최대 12개월 신용 카드 할부</S.CardText>
      </S.PriceWrapper>
      <S.ItemWrapper>
        <S.ItemBox>
          <IpadproIcApplebag />
          <S.ItemText>
            <S.ItemTitle>픽업 :</S.ItemTitle> <S.ItemSub>재고확인</S.ItemSub>
          </S.ItemText>
        </S.ItemBox>
        <S.ItemBox>
          <IpadproIcTruck />
          <S.ItemText>
            <S.ItemTitle>도착 : </S.ItemTitle>
            <S.ItemSub>
              <p>수 2023/11/15 - 무료 배송</p> 추가 배송 옵션 확인
            </S.ItemSub>
          </S.ItemText>
        </S.ItemBox>
      </S.ItemWrapper>
      <AddToCartButton>장바구니에 담기</AddToCartButton>
      <S.LastText>
        <p>시간이 좀 더 필요하신가요?</p>선택한 기기를 관심 목록에 모두 저장해두고 언제든
        살펴보던곳부터 다시 이어 보세요.
        <S.SaveText>
          <IpadproIcScrabNormal />
          나중을 위해 저장
        </S.SaveText>
      </S.LastText>
    </S.Wrapper>
  );
};
