"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board2() {
    return (
        <> 
            <div className="board__table mt15" > 
                <div className="board__table__row head">
                    <div className="board__table__cell">
                        상품명
                    </div>
                    <div className="board__table__cell">
                        투자금액
                    </div>
                    <div className="board__table__cell">
                        상환금액
                    </div>
                    <div className="board__table__cell">
                        투자 잔액
                    </div>
                    <div className="board__table__cell">
                        예상수익
                        <label className="tax__toggle">
                            <input type="checkbox" data-event="test1_0" data-comma="1"/>
                            <span className="title"></span>
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="board__table__cell">
                        예상 연 수익률
                        <label className="tax__toggle">
                            <input type="checkbox" data-event="test2_0" data-comma="0"/>
                            <span className="title"></span>
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="board__table__cell">
                        상환 예정일
                    </div>
                    <div className="board__table__cell">
                        원리금수취권
                    </div>
                    <div className="board__table__cell">
                        상환내역
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="722670606"
                                data-tax-after="715443899">722,670,606</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="789599381"
                                data-tax-after="781703387">789,599,381</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="657528229"
                                data-tax-after="650952946">657,528,229</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="894068855"
                                data-tax-after="885128166">894,068,855</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="439863367"
                                data-tax-after="435464733">439,863,367</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="707537406"
                                data-tax-after="700462031">707,537,406</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="760355821"
                                data-tax-after="752752262">760,355,821</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="119711082"
                                data-tax-after="118513971">119,711,082</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="47553164"
                                data-tax-after="47077632">47,553,164</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
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
                            <span>63,540,000</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환금액">
                        <div>
                            <span>57,541,101</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="투자 잔액">
                        <div>
                            <span>5,998,899</span>원
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="예상수익">
                        <div>
                            <span
                                className="data__number test1_0"
                                data-tax-before="131809523"
                                data-tax-after="130491427">131,809,523</span>원
                        </div>
                    </div>
                    <div className="board__table__cell color" data-title="예상 연 수익률">
                        <div>
                            <span
                                className="data__number test2_0"
                                data-tax-before="12.20"
                                data-tax-after="10.34">12.20</span>%
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환 예정일">
                        <div>
                            2023-08-24
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="원리금수취권">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="상환내역">
                        <div>
                            <a className="button" href="#" download="">보기</a>
                        </div>
                    </div>
                </div>
            </div>
            <Paging/>
        </>

    )
}

export default Board2;
