"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board3() {
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
                    예상수익
                    <label className="tax__toggle">
                        <input type="checkbox" data-event="test1_1" data-comma="1" />
                        <span className="title"></span>
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="board__table__cell">
                    플랫폼 수수료
                    </div>
                    <div className="board__table__cell">
                    세금
                    </div>
                    <div className="board__table__cell">
                    확정 수익
                    <label className="tax__toggle">
                        <input type="checkbox" data-event="test2_1" data-comma="1" />
                        <span className="title"></span>
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="board__table__cell">
                    연 수익률
                    <label className="tax__toggle">
                        <input type="checkbox" data-event="test3_1" data-comma="0" />
                        <span className="title"></span>
                        <span className="slider"></span>
                    </label>
                    </div>
                    <div className="board__table__cell">
                    상환일
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="569269216" data-tax-after="563576523">569,269,216</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="30689" data-tax-after="30382">30,689</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="148674393" data-tax-after="147187649">148,674,393</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="42007" data-tax-after="41586">42,007</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="569138184" data-tax-after="563446802">569,138,184</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="22797" data-tax-after="22569">22,797</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="817313383" data-tax-after="809140249">817,313,383</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="21728" data-tax-after="21510">21,728</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="781360626" data-tax-after="773547019">781,360,626</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="26933" data-tax-after="26663">26,933</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="396458687" data-tax-after="392494100">396,458,687</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="22295" data-tax-after="22072">22,295</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="512795116" data-tax-after="507667164">512,795,116</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="68330" data-tax-after="67646">68,330</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="435862268" data-tax-after="431503645">435,862,268</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="34352" data-tax-after="34008">34,352</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="78800888" data-tax-after="78012879">78,800,888</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="63746" data-tax-after="63108">63,746</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
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
                    <div className="board__table__cell" data-title="예상수익">
                    <div>
                                    <span className="data__number test1_1" data-tax-before="997694180" data-tax-after="987717238">997,694,180</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="플랫폼 수수료">
                    <div>
                        <span>0</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="세금">
                    <div>
                        <span>98,899</span>원
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="확정 수익">
                    <div>
                                    <span className="data__number test2_1" data-tax-before="41317" data-tax-after="40903">41,317</span>원
                    </div>
                    </div>
                    <div className="board__table__cell color" data-title="연 수익률">
                    <div>
                        <span className="data__number test3_1" data-tax-before="12.20" data-tax-after="10.34">12.20</span>%
                    </div>
                    </div>
                    <div className="board__table__cell" data-title="상환일">
                    <div>
                        2023-08-24
                    </div>
                    </div>
                </div>
                    </div>
            <Paging/>
        </>

    )
}

export default Board3;
