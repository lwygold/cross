"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';

import '@styles/account.css';

function Account() {    

    const linkName = usePathname();    

    // const [activeMonth, setActiveMonth] = useState(0);    
    // const [activeTax, setActiveTax] = useState(0);    

    const [activeMonth, setActiveMonth] = useState('1개월');

    const monthButtonClick = (duration) => {
        setActiveMonth(duration);
    };

    const [activeTax, setActiveTax] = useState('세전');

    const taxButtonClick = (duration) => {
        setActiveTax(duration);
    };
  
    
    return (    
        <div className="sub account">            
            <main>                
                <div className='inner'>     
                    <div className='account__header'>
                        <ul className='common__tab type1'>
                            <li className={ linkName === '/account' ? 'active' : '' }>
                                <Link href="#">
                                    My account
                                </Link>
                            </li>
                            <li className={ linkName === '/account1' ? 'active' : '' }>
                                <Link href="/account1">
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
                    <div className='account__body type1'>
                        <div className='account__box'>
                            <div className='account__box__left'>

                                
                                <Link href="/account_change1">
                                    <div className='common__btn type1'>투자자격 변경 신청</div>                                    
                                </Link>                                

                                <div className='row row1'>
                                    <div className='flex__lrc'>
                                        <span className='title1'>주해나 님</span>
                                        <div className='popup__btn1'><Link href="/account_info1">회원정보변경</Link></div>
                                    </div>
                                    <div>
                                        <p className="text1">haena224@naver.com</p>
                                        <p className='flex__c'>
                                            <i className='popup_circle1'><img src="./assets/images/sub/popup_icon1.svg"></img></i>
                                            <span className='text2'>일반 개인투자자</span>
                                        </p>
                                    </div>     
                                </div>

                                <div className='row row2'>
                                    <div className='flex__c'>
                                        <span className="text1">남은 투자한도</span>
                                        <i className='popup_circle1'>?</i>                                        
                                    </div>
                                    <div className='info'>
                                        <div className='flex__lrc'>
                                            <span className=''>총  한도</span>
                                            <p className=''>40,000,000원</p>
                                        </div>
                                        <div className='flex__lrc'>
                                            <span className=''>잔여한도</span>
                                            <p className=''>20,084,871원</p>
                                        </div>
                                    </div>                                    
                                </div>

                                <div className='row row3'>
                                    <div className='flex__lrc'>
                                        <span className="text1">가상계좌정보</span>
                                        <span className='popup__btn1'>출금계좌관리</span>
                                    </div>
                                    <div className='info'>
                                        <div className='flex__lrc'>
                                            <span className=''>예금주</span>
                                            <p className=''>주해나</p>
                                        </div>
                                        <div className='flex__lrc'>
                                            <span className=''>은행명</span>
                                            <p className=''>NH농협은행</p>
                                        </div>
                                        <div className='flex__lrc'>
                                            <div className='flex__lc'>
                                                <span className=''>계좌번호</span>
                                                <i className='popup__btn1'>계좌복사</i>
                                            </div>                                            
                                            <p className=''>79018931826651</p>
                                        </div>
                                        <div className='flex__lrc'>
                                            <span className=''>내 예치금</span>
                                            <p className=''>0원</p>
                                        </div>
                                    </div>                                    
                                </div>

                                <div className='btn__line flex__lrc'>
                                    <div className='common__btn type2'>충전하기</div>
                                    <div className='common__btn type3'>출금하기</div>
                                </div>
                                                                
                            </div>
                            <div className='account__box__right'>
                                <div className='flex__lrc box1'>
                                    <div className='flex__c'>
                                        <span className="text1">오늘 투자가능 금액</span>
                                        <i className='popup_circle1'>?</i>                                        
                                    </div>
                                    <div className='flex__c'>
                                        <p>1,400,000</p><span>원</span>
                                    </div>                                    
                                </div>

                                <div className='flex__lrc box2'>
                                    <div>
                                        <h4>현재 예치금</h4>
                                        <div className='flex__c'>
                                            <p>100,000</p>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>오늘 상환예정금</h4>
                                        <div className='flex__c'>
                                            <p>3</p>
                                            <span>건</span>
                                            <img src="./assets/images/sub/blank1.svg"></img>
                                            <p>100,000</p>
                                            <span>원</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex__lrt box3'>
                                    <div>
                                        <div>
                                            <h4>수익률</h4>
                                            <div className='round'> 
                                                <div className='flex__lrc btn__line1'>
                                                    <div>
                                                        <span 
                                                            onClick={() => monthButtonClick('1개월')}
                                                            className={activeMonth === '1개월' ? 'click__btn1 active' : 'click__btn1'}>1개월</span>
                                                        <span 
                                                            onClick={() => monthButtonClick('3개월')}
                                                            className={activeMonth === '3개월' ? 'click__btn1 active' : 'click__btn1'}>3개월</span>
                                                        <span 
                                                            onClick={() => monthButtonClick('6개월')}
                                                            className={activeMonth === '6개월' ? 'click__btn1 active' : 'click__btn1'}>6개월</span>
                                                    </div>
                                                    <div className="toggle__line">
                                                        <span 
                                                            onClick={() => taxButtonClick('세전')}
                                                            className={activeTax === '세전' ? 'click__btn1 active' : 'click__btn1'}>세전</span>
                                                        <span
                                                            onClick={() => taxButtonClick('세후')}
                                                            className={activeTax === '세후' ? 'click__btn1 active' : 'click__btn1'}>세후</span>
                                                    </div>
                                                </div>

                                                <div className='round__box1'>
                                                    <div className='round__box1__text'>
                                                        <p>
                                                            <span>주해나 님의</span><i>누적 투자수익금</i>
                                                        </p>
                                                        <p>
                                                            <span>839,665</span><i>원</i>
                                                        </p>                                                    
                                                    </div>
                                                    <div className='round__box1__text border0'>
                                                        <p>
                                                            <span>주해나 님의</span><i>누적 투자수익금</i>
                                                        </p>
                                                        <p>
                                                            <span>839,665</span><i>원</i>
                                                        </p>                                                    
                                                    </div>
                                                </div>
                                                                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h4>자산</h4>
                                            <div className='round'> 
                                                <h5>현재 자산</h5>
                                                <div className='round__box1'>
                                                    <div className='round__box1__text type2'>
                                                        <p>
                                                            <i>예치금 + 현재 투자금액</i>
                                                        </p>
                                                        <p>
                                                            <span>19,977,632</span><i>원</i>
                                                        </p>                                                    
                                                    </div>
                                                    <div className='round__box2__text'>
                                                        <div className='flex__lrc'>  
                                                            <span>예치금</span>
                                                            <span><b>3,397</b>원</span>
                                                        </div> 
                                                        <div className='flex__lrc'>  
                                                            <span>현재 투자 금액</span>
                                                            <span><b>19,974,235</b>원</span>
                                                        </div> 
                                                        <div className='flex__lrc'>  
                                                            <span>투자 신청 금액</span>
                                                            <span><b>0</b>원</span>
                                                        </div>                                                                                                                                                                                                                                 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                    </div>                    
                </div>
            </main>
        </div>
    ) 
  }

export default Account;
