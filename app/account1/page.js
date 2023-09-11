"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';

import Board1 from '@components/Board1/Board1.js';
import Board2 from '@components/Board2/Board2.js';
import Board3 from '@components/Board3/Board3.js';
import Board4 from '@components/Board4/Board4.js';
import Board5 from '@components/Board5/Board5.js';


import DatePicker from "react-datepicker";


// import '@styles/account.css';

function Account1() {    

    () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        );
    };
      
    const linkName = usePathname();    
    
    const [activeMonth, setActiveMonth] = useState('1개월');
    const monthButtonClick = (duration) => {
        setActiveMonth(duration);
    };

    const [activeTax, setActiveTax] = useState('세전');
    const taxButtonClick = (duration) => {
        setActiveTax(duration);
    };

    const [activeTab1, setActiveTab1] = useState('투자 중 상품');

    const tabButtonClick1 = (duration) => {
        setActiveTab1(duration);
    };

    const [activeTab2, setActiveTab2] = useState('전체');

    const tabButtonClick2 = (duration) => {
        setActiveTab2(duration);
    };
    
    return (    
        <div className="sub account">            
            <main>                
                <div className='inner'>     
                    <div className='account__header'>
                        <ul className='common__tab type1'>
                            <li className={ linkName === '/account' ? 'active' : '' }>
                                <Link href="/account">
                                    My account
                                </Link>
                            </li>
                            <li className={ linkName === '/account1' ? 'active' : '' }>
                                <Link href="#">
                                    투자내역
                                </Link>
                            </li>
                            <li className={ linkName === '/account2' ? 'active' : '' }>
                                <Link href="/account2">
                                    계좌관리
                                </Link>
                            </li>
                            <li className={ linkName === '/account3' ? 'active' : '' }>  
                                <Link href="/account3">
                                    증빙서류
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='deposit__box flex__lrs'>
                        <div className='round'>
                            <div className='flex__lrt'>
                                <div>
                                    <div className='flex__b deposit__box__text1'>
                                        <p>이커머스투자파트너스</p>
                                        <span>님의 예치금</span>
                                    </div>
                                    <div className="flex__c deposit__box__text2">
                                        <div>
                                            <b>잔여투자 한도</b>
                                            <i>무제한</i>
                                        </div>
                                        <img src="./assets/images/sub/account_line1.svg" />
                                        <p><i>저축은행</i> <b>06641151583528</b></p>
                                        <i className='popup__btn1'>계좌복사</i>
                                    </div>                                    
                                </div>
                                <div className='flex__b deposit__box__text3'>
                                    <p>1,248,161,762</p>
                                    <span>원</span>
                                </div>
                            </div>
                        </div>
                        <div className='round flex__lrc'>
                            <div className="deposit__box__text4">
                                <p>누적 투자 원금</p>
                                <div className='flex__b '>
                                    <p>223,192,624,338</p>
                                    <span>원</span>
                                </div>
                            </div>
                            <img src="./assets/images/sub/account_line2.svg" />
                            <div className="deposit__box__text4">
                                <p>현재 자산</p>
                                <div className='flex__b'>
                                    <p>223,192,624,338</p>
                                    <span>원</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='deposit__tab'>
                        <ul className='common__tab type1 height1'>
                            <li                             
                                onClick={() => tabButtonClick1('투자 중 상품')}
                                className={activeTab1 === '투자 중 상품' ? 'active' : ''}>
                                <Link href="#">
                                    투자 중 상품
                                </Link>
                            </li>
                            <li 
                                onClick={() => tabButtonClick1('신청 중 상품')}
                                className={activeTab1 === '신청 중 상품' ? 'active' : ''}>
                                <Link href="/account1_1">
                                    신청 중 상품
                                </Link>
                            </li>
                            <li 
                                onClick={() => tabButtonClick1('지급 스케줄')}
                                className={activeTab1 === '지급 스케줄' ? 'active' : ''}>
                                <Link href="#">
                                    지급 스케줄
                                </Link>
                            </li>
                            <li 
                                onClick={() => tabButtonClick1('원리금 수취권 매매')}
                                className={activeTab1 === '원리금 수취권 매매' ? 'active' : ''}>
                                <Link href="#">
                                    원리금 수취권 매매
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='deposit__tab2'>
                        <ul className='common__tab type1 height1'>
                            <li                             
                                onClick={() => tabButtonClick2('전체')}
                                className={activeTab2 === '전체' ? 'active' : ''}>
                                <div>
                                    <span>전체</span>
                                    <img src={activeTab2 === '전체' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>3,121</b><span>건</span>
                                </div>
                                <div>
                                    <b>223,192,624,338</b><span>원</span>
                                </div>
                            </li>
                            <li 
                                onClick={() => tabButtonClick2('상환예정')}
                                className={activeTab2 === '상환예정' ? 'active' : ''}>
                                <div>
                                    <span>상환예정</span>
                                    <img src={activeTab2 === '상환예정' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>72</b><span>건</span>
                                </div>
                                <div>
                                    <b>4,314,170,951</b><span>원</span>
                                </div>
                            </li>
                            <li 
                                onClick={() => tabButtonClick2('상환완료')}
                                className={activeTab2 === '상환완료' ? 'active' : ''}>
                                <div>
                                    <span>상환완료</span>
                                    <img src={activeTab2 === '상환완료' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>3,049</b><span>건</span>
                                </div>
                                <div>
                                    <b>218,723,094,338</b><span>원</span>
                                </div>
                            </li>
                            <li 
                                onClick={() => tabButtonClick2('상환지연')}
                                className={activeTab2 === '상환지연' ? 'active' : ''}>
                                <div>
                                    <span>상환지연</span>
                                    <img src={activeTab2 === '상환지연' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>0</b><span>건</span>
                                </div>
                                <div>
                                    <b>0</b><span>원</span>
                                </div>
                            </li>
                            <li 
                                onClick={() => tabButtonClick2('연체')}
                                className={activeTab2 === '연체' ? 'active' : ''}>
                                <div>
                                    <span>연체</span>
                                    <img src={activeTab2 === '연체' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>0</b><span>건</span>
                                </div>
                                <div>
                                    <b>0</b><span>원</span>
                                </div>
                            </li>
                            <li 
                                onClick={() => tabButtonClick2('매각')}
                                className={activeTab2 === '매각' ? 'active' : ''}>
                                <div>
                                    <span>매각</span>
                                    <img src={activeTab2 === '매각' ? "./assets/images/sub/account_line3_on.svg" : "./assets/images/sub/account_line3.svg"}  />
                                    <b>0</b><span>건</span>
                                </div>
                                <div>
                                    <b>0</b><span>원</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='com__board deposit__body'>
                        <h5 className='account__title'>투자 중 상품</h5>
                        <div className='flex__lrc deposit__search'>
                            <div className='flex__c'>
                                <span 
                                    onClick={() => monthButtonClick('1개월')}
                                    className={activeMonth === '1개월' ? 'click__btn2 active' : 'click__btn2'}>1개월</span>
                                <span 
                                    onClick={() => monthButtonClick('3개월')}
                                    className={activeMonth === '3개월' ? 'click__btn2 active' : 'click__btn2'}>3개월</span>
                                <span 
                                    onClick={() => monthButtonClick('6개월')}
                                    className={activeMonth === '6개월' ? 'click__btn2 active' : 'click__btn2'}>6개월</span>
                                <div className='flex__c'>
                                    <span className='click__btn2'>2022-12-01</span>
                                    <span className='blank'>~</span>
                                    <span className='click__btn2'>2023-07-24</span>
                                </div>
                                <span className='click__btn2 active'>조회</span>
                            </div>
                            <div className='deposit__search__down'>                                
                                <a className='flex__c' href="" download>
                                    <span>엑셀 다운로드</span>
                                    <span><img src="./assets/images/sub/account_download1.svg" /></span>
                                </a>                                
                            </div>
                        </div>
                        <div className='board__wrap'>                            
                            <div className={activeTab2 === '전체' ? 'active' : ''}>
                                <Board1/>
                            </div>
                            <div className={activeTab2 === '상환예정' ? 'active' : ''}>
                                <Board2/>
                            </div>
                            <div className={activeTab2 === '상환완료' ? 'active' : ''}>
                                <Board3/>
                            </div>
                            <div className={activeTab2 === '상환지연' ? 'active' : ''}>
                                <Board4/>
                            </div>
                            <div className={activeTab2 === '연체' ? 'active' : ''}>
                                <Board4/>
                            </div>
                            <div className={activeTab2 === '매각' ? 'active' : ''}>
                                <Board5/>
                            </div>
                        </div>
                    </div>

                </div>
            </main>            
        </div>
    ) 
  }

export default Account1;
