"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board6() {
    return (
        <> 
            <div className="board__table mt15">
                <div className="board__table__row head">
                    <div className="board__table__cell">
                    상품명
                    </div>
                    <div className="board__table__cell">
                    투자금액
                    </div>
                    <div className="board__table__cell">
                    예상 연 수익률
                    <label className="tax__toggle">
                        <input type="checkbox" data-event="test2_0" data-comma="0" />
                        <span className="title"></span>
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="board__table__cell">
                    상환 예정일
                    </div>
                    <div className="board__table__cell">
                    모집률
                    </div>
                    <div className="board__table__cell">
                    상태
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell no__title" data-title="상품명">
                    <div>
                        <a href="#">카드매출 선정산 25620호</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="투자금액">
                    <div>
                        <span>5,540,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                    <div>
                        <span className="data__number test2_0" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="모집률">
                    <div>
                        <span>33</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상태">
                    <div>
                                    <a className="button" href="#">투자취소</a>
                                </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell no__title" data-title="상품명">
                    <div>
                        <a href="#">카드매출 선정산 25620호</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="투자금액">
                    <div>
                        <span>5,540,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                    <div>
                        <span className="data__number test2_0" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="모집률">
                    <div>
                        <span>57</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상태">
                    <div>
                                    <a className="button" href="#">투자취소</a>
                                </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell no__title" data-title="상품명">
                    <div>
                        <a href="#">카드매출 선정산 25620호</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="투자금액">
                    <div>
                        <span>5,540,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                    <div>
                        <span className="data__number test2_0" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="모집률">
                    <div>
                        <span>73</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상태">
                    <div>
                                    <a className="button complete" href="javascript:;">투자완료</a>
                                </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell no__title" data-title="상품명">
                    <div>
                        <a href="#">카드매출 선정산 25620호</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="투자금액">
                    <div>
                        <span>5,540,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                    <div>
                        <span className="data__number test2_0" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="모집률">
                    <div>
                        <span>78</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상태">
                    <div>
                                    <a className="button" href="#">투자취소</a>
                                </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell no__title" data-title="상품명">
                    <div>
                        <a href="#">카드매출 선정산 25620호</a>
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="투자금액">
                    <div>
                        <span>5,540,000</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                    <div>
                        <span className="data__number test2_0" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="모집률">
                    <div>
                        <span>48</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상태">
                    <div>
                                    <a className="button" href="#">투자취소</a>
                                </div>
                    </div>
                </div>
                    </div>
            <Paging/>
        </>

    )
}

export default Board6;
