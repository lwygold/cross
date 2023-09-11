"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board9() {
    return (
        <> 
            <div className="board__table mt15">
                <div className="board__table__row head">
                    <div className="board__table__cell">
                    구분
                    </div>
                    <div className="board__table__cell">
                    총 연계대출 금액
                    </div>
                    <div className="board__table__cell">
                    총 연체채권 잔액
                    </div>
                    <div className="board__table__cell">
                    연체율 (%)
                    </div>
                    <div className="board__table__cell">
                    연체건
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>부동산PF</span>
                        </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>부동산담보</span>
                        </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>0</span>  
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>기타담보(어음, 매출채권 담보 제외)</span>
                        </div>
                    </div>                    
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>1,500,000,000</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>어음, 매출채권 담보</span>
                        </div>
                    </div>           
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>1,368,444,856,000</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>620,727,460</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>2.10</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell" data-title="구분">
                        <div>
                            <span>개인 신용</span>
                        </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>법인 신용</span>
                        </div>
                    </div>                    
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <span>88,000,150,000</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="board__table__row content">
                    <div className="board__table__cell " data-title="구분">
                        <div>
                            <span>합계</span>
                        </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="총 연계대출 금액">
                        <div>
                            <a href="#">상품 투자(25786호)</a>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="총 연체채권 잔액">
                        <div>
                            <span>1,457,945,006,000</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체율 (%)">
                        <div>
                            <span>620,727,460</span>
                        </div>
                    </div>
                    <div className="board__table__cell" data-title="연체 건">
                        <div>
                            <span>1.76</span>
                        </div>
                    </div>
                </div>                
          </div>            
        </>

    )
}

export default Board9;
