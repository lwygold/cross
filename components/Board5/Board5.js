"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board5() {
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
                    상환 원금
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
                    <div className="board__table__cell" data-title="상환 원금">
                    <div>
                        <span>57,541,101</span>원
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
                    <div className="board__table__cell" data-title="상환 원금">
                    <div>
                        <span>57,541,101</span>원
                    </div>
                    </div>
                </div>
                    </div>
            <Paging/>
        </>

    )
}

export default Board5;
