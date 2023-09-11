"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';

// import '@styles/account.css';

function Account3() {    

    const linkName = usePathname();        

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
                                <Link href="/account">
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
                                <Link href="#">
                                    증빙서류
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='account__body type1'>
                        <div className='account__box'>
                            <div className='account__box__left'>

                                <div className='common__btn type1'>
                                    투자자격 변경 신청
                                </div>

                                <div className='row row1'>
                                    <div className='flex__lrc'>
                                        <span className='title1'>주해나 님</span>
                                        <div className='popup__btn1'>회원정보변경</div>
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

                                <h5 className="account__title">증빙서류</h5>

                                <div class="blue__box">
                                    <div className='flex__c border__bottom1'>
                                        <span className='blue__box__title'>
                                            잔고 내역서
                                        </span>
                                        <div className='flex__c'>
                                            <div className='flex__c'>
                                                <span className='blue__box__text1'>기준일</span>
                                                <div className='flex__c blue__box__box'>
                                                    <p className='blue__box__text1'>2022-12-01</p>
                                                    <img src="./assets/images/common/common_calendar.svg" />
                                                </div>                                                
                                            </div>                                            
                                            <div>
                                                <button className='blue__box__button1'>출력</button>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className='flex__c'>
                                        <span className='blue__box__title'>
                                            원천징수 내역서
                                        </span>
                                        <div className='flex__c'>
                                            <div className='flex__c'>
                                                <span className='blue__box__text1'>시작일</span>
                                                <div className='flex__c blue__box__box'>
                                                    <p className='blue__box__text1'>2022-12-01</p>
                                                    <img src="./assets/images/common/common_calendar.svg" />
                                                </div>                                                
                                            </div>   
                                            <div className='flex__c'>
                                                <span className='blue__box__text1'>종료일</span>
                                                <div className='flex__c blue__box__box'>
                                                    <p className='blue__box__text1'>2022-12-01</p>
                                                    <img src="./assets/images/common/common_calendar.svg" />
                                                </div>                                                
                                            </div>   
                                            <div className='flex__c'>
                                                <button className='blue__box__button1'>출력</button>
                                                <div className="deposit__search__down">
                                                    <a className="flex__c" href="" download="">
                                                    <span>엑셀 다운로드</span>
                                                    <span>
                                                        <img src="./assets/images/sub/account_download1.svg" />
                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>             
                                </div>

                                <h5 className="account__title">안내문구</h5>
                                <div className='desc__box'>
                                    <p>본 연계투자상품은 원금 및 이자 수익을 보장하지 않으며, 대출자의 중도상환 또는 지연, 연체, 부실이 발생할 경우 투자원금 손실이 발생할 수 있습니다. 또한 예금자보호법에 따라 예금보험공사가 보호하지 않으며, 원금손실에 대한 책임은 투자자에게 있습니다.</p>
                                    <p>투자금 모집 완료 전까지 투자의사를 철회할 수 있으며, 투자금 모집 완료 후에는 해당 상품의 상환 및 정산 처리가 완료될 때까지 연계투자계약의 해지가 제한됩니다.</p>
                                    <p>투자금 모집이 완료가 된 후 대출이 실행되며, 해당 대출이 실행되지 않을 경우 지체없이 투자원금을 예치금 계좌로 환불해드립니다.</p>
                                    <p>상품 상환일에 원리금이 회수되더라도 최대 5일 이내(단, 은행 휴무일인 경우에는 그 다음날) 투자자에게 투자원금 및 수익금을 정산하여 지급될 수 있습니다. 또한 대출자의 자금 상황에 따라 조기에 상환될 수 있으며, 조기상환 시 이자는 일할 계산되어 지급됩니다.</p>
                                    <p>본 상품은 플랫폼 이용료가 발생하지 않으며, 투자자 정산금액의 이자소득에 대한 세금·세율이 적용되며 소득세법 제 127조에 따라 개인은 15.4%(소득세 14%, 지방소득세 1.4%), 법인은 법인세법 제73조에 따라 15.4%(법인세 14%, 지방소득세 1.4%)로 원천징수 됩니다. 단, 법인세법 시행령 제 111조 제 1항에 따른 금융회사 또는 개인대부업자의 경우 세금을 원천징수 하지 않습니다.</p>
                                    <p>당사의 영업행위와 관련한 민원은 온라인 고객센터로 접수하실 수 있으며, 분쟁조정을 희망하시는 경우 금융감독원에 분쟁조정을 신청하실 수 있습니다.</p>
                                    <p>연계투자상품 계약에 앞서 본 상품 페이지의 금융상품 정보와 약관을 주의깊게 읽어보시기 바랍니다.</p>
                                    <p>당사는 이 연계투자상품에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자 이전에 상품화면 및 당사 공시정보를 충분히 숙지한 후 투자를 결정하시기 바랍니다.</p>
                                    <p>본 상품 페이지에 제공하는 매출채권 등급 및 관련 기업 정보 등은 콘텐츠 업체(한국기업데이터 등)정보이거나, 이를 당사에서 가공한 정보입니다. 당사와 콘텐츠 업체는 정보의 정확성이나 완전성을 보장할 수 없으며, 상황에 따라 일부 오류 또는 지연이 발생할 수 있습니다. 당사가 제공하는 모든 정보는 투자 참고 정보이므로 투자자 자신의 판단과 책임하에 상품 선택이나 투자시기에 대한 최종 결정이 이루어져야 합니다.</p>
                                    <p>본 상품 페이지는 관련 법령 및 내부 통제기준에 따른 절차를 준수하였습니다.</p>
                                </div>
                            </div>
                        </div> 
                    </div>                    
                </div>
            </main>
        </div>
    ) 
  }

export default Account3;
