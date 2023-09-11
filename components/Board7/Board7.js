"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board7() {
    return (
        <> 
            <div className="board__table mt15">
                <div className="board__table__row head">
                    <div className="board__table__cell">
                    날짜
                    </div>
                    <div className="board__table__cell">
                    구분
                    </div>
                    <div className="board__table__cell">
                    금액
                    </div>
                    <div className="board__table__cell">
                    잔액
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2023-08-21</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <a href="#">상품 투자(25786호)</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="금액">
                    <div>
                        <span>-140,000,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="잔액">
                    <div>
                        <span>5,541,101</span>원
                    </div>
                    </div>
                </div>
          </div>
            <Paging/>
        </>

    )
}

export default Board7;
