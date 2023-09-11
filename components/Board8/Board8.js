"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

import Paging from '@components/Paging/Paging.js';

function Board8() {
    return (
        <> 
            <div className="board__table mt15">
                <div className="board__table__row head">
                    <div className="board__table__cell">
                    제목
                    </div>
                    <div className="board__table__cell">
                    발행일
                    </div>                                        
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                    
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                 
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                    
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                 
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                 
                </div>
                        <div className="board__table__row content">
                    <div className="board__table__cell " data-title="날짜">
                    <div>
                        <span>2022년 결산 공시 [공시 디자인 공통]</span>
                    </div>
                    </div>
                    <div className="board__table__cell no__title" data-title="구분">
                    <div>
                        <Link href="#">2023-08-24</Link>
                    </div>
                    </div>                 
                </div>
          </div>
            <Paging/>
        </>

    )
}

export default Board8;
