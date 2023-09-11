"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Paging from '@components/Paging/Paging.js';


function InvestBoard2() {    
    return (    
        <>
        <div className="board__table mt15">
                <div className="board__table__row head">
                    <div className="board__table__cell">
                        상품명
                    </div>
                    <div className="board__table__cell">
                        지급일
                    </div>
                    <div className="board__table__cell">
                        수익률
                    </div>
                    <div className="board__table__cell">
                        투자기간
                    </div>
                    <div className="board__table__cell">
                        투자자
                    </div>
                    <div className="board__table__cell">
                        모집금액
                    </div>
                    <div className="board__table__cell">
                        상태
                    </div>
                </div>
                <div className="board__table__space"></div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>                
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>        
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content ver1">
                    <div className="text-left board__table__cell no__title" data-title="상품명">
                        <div>
                            <a href="#">카드매출 선정산 25620호</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="지급일">
                        <div>
                            <span>2023-08-23</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="수익률">
                        <div>
                            <span>12.20%</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자기간">
                        <div>
                            <span>7일</span>
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="투자자">
                        <div>
                            <span>42명</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="모집금액">
                        <div>
                            <span>464,200,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자상태">
                        <div className='pt0'>
                            <span className="charge2 ver1">상환 중</span>
                        </div>
                    </div>
                </div>        
            </div>            
            <Paging />
        </>
            
    ) 
  }

export default InvestBoard2;
