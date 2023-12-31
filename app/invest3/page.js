"use client";

import Link from 'next/link';
import { useState } from "react";


// import Ui from "../invest/ui";
// import '@styles/invest.css';

function Invest3() {        
            
    const [activeTab, setActiveTab] = useState('list');    

    const handleTabChange = (tab) => {
      if (tab !== activeTab) {
        setActiveTab(tab);        
      }
    };
    

    const [inputValue, setInputValue] = useState(0);
    
    const handleAdd = (amount) => {
      setInputValue(prevValue => parseInt(prevValue) + parseInt(amount) );                  
    };

    const inputInt = (e) => {
        if (e.target.value == 0) {
            setInputValue("");            
        } 
    };
  
    const handleReset = () => {
      setInputValue(0);
    }; 

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const [isActive, setIsActive] = useState(false);
    const maxValue = 500;

    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
  
      if (parseInt(newValue) > maxValue) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };


    return (    
        <div className="sub invest">            
            <main>
                <div className='inner'>
                    <div className='invest__detail'>
                        <div className='invest__detail__left'>
                            <div className='invest__detail__left__title'>
                                <div>
                                    <h3>카드매출 선정산 25885호</h3>
                                    <span className='charge1'>수수료면제</span>
                                </div>
                                <div>
                                    <img src='./assets/images/sub/invest_line3.svg' />
                                    <span className='text1'>원리금 상환일 2023-09-25</span>
                                </div>
                            </div>
                            <div className='invest__detail__round mt55'>
                                <div className='detail__round1'>
                                    <span>70<i>%</i></span>
                                    <img src='./assets/images/sub/invest_line2.svg' />
                                    <p>84명 투자</p>
                                </div>
                                <div className='detail__round2'>
                                    <div>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span>523,140,000원</span>
                                        <span>727,480,000원</span>
                                    </div>
                                </div>
                                <ul className='detail__ul1 scroll__fixed'>
                                    <li>
                                        <p>예상 연 순수익률(세전)</p>
                                        <span>12.2<i>%</i></span>
                                    </li>
                                    <li>
                                        <p>총 모집금액</p>
                                        <span>737,480,000<i>원</i></span>
                                    </li>
                                    <li>
                                        <p>투자기간</p>
                                        <span>2<i>일</i></span>
                                    </li>
                                    <li>
                                        <p>나의 투자가능금액</p>
                                        <span>5,000,000<i>원</i></span>
                                    </li>                                    
                                </ul>
                                <p>준법감시인 심사필 제23-4-0002호 (2023-08-24)</p>
                            </div>  

                            <div className='toggle__wrap'>
                                <div className='toggle__item'>
                                    <div className='toggle__item__header'>
                                        <span>상품 설명</span>
                                        <img src='./assets/images/sub/invest_toggle1.svg' />
                                    </div>
                                    <div className='toggle__item__body'>
                                        <div className='toggle__item__body__item'>
                                            <span>투자포인트</span>
                                            <div>
                                                <div className='toggle__item__body__box'>
                                                    <span className='charge4'>안정적인 상환 구조</span>
                                                    <div className='toggle__item__body__text'>
                                                        <p>차입자인 선정산 업체는 쿠팡(쇼핑몰)의 정산금을 회수하여 대출을 상환합니다.</p>
                                                        <p>쿠팡(쇼핑몰) 정산은 정해진 기한에 맞춰 정확하게 지급되므로 상환이 비교적 안정적입니다.</p>
                                                    </div>
                                                </div>
                                                <div className='toggle__item__body__box'>
                                                    <span className='charge4'>리스크 최소화</span>
                                                    <div className='toggle__item__body__text'>
                                                        <p>선정산 업체(차입자)는 종합적인 데이터를 기반으로 쿠팡 셀러를 심사·선별합니다.</p>
                                                        <p>선정산 업체(차입자)는 쇼핑몰 정산금이 회수 되지 않는 경우에도 당사와 체결한 업무협약에 따라 우선 대출을 상환합니다.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>상세설명</span>
                                            <div>
                                                <div className='toggle__item__body__box'>                                                
                                                    <div className='mt-5 toggle__item__body__text'>
                                                        <p>본 상품은 법인 신용 대출 상품입니다.</p>
                                                        <p>대출목적: 매출채권 매입(쿠팡입점 셀러의 매출채권)</p>
                                                        <p>상환재원: 매출정산 대금(쿠팡입점 셀러의 매출정산금)</p>
                                                        <p>본 상품을 통해 모집된 투자금은 선정산 업체가 쿠팡에 입점 된 셀러들에게 선정산 지급하는 용도로 대출됩니다.</p>
                                                        <p>선정산이란, 온라인 쇼핑몰이 입점 판매자에게 정산 예정인 상품판매금액을 선정산 업체가 미리 정산해주는 서비스입니다.</p>
                                                        <p>선정산 업체는 셀러의 매출채권을 양도받아 CMS 출금으로 정산금을 회수합니다.</p>
                                                        <p>선정산 업체는 셀러의 종합적인 데이터(판매, 매출, 정산) 분석을 통해 우량성, 안정성, 상품성을 심사하여 상환 리스크를 최소화합니다.</p>                                                    
                                                    </div>                                                                                                
                                                </div>
                                            </div>                                            
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>상품 리스크</span>
                                            <div>
                                                <div className='toggle__item__body__box'>
                                                    <span className='charge4'>차입자 부도 및 매출채권의 위험</span>
                                                    <div className='toggle__item__body__text'>
                                                        <p>차주인 선정산 업체, 판매자(셀러), 오픈마켓/소셜커머스가 부도· 폐업·파산 할 경우 이에 따른 원금손실 가능성이 있습니다.</p>
                                                        <p>셀러가 선정산 업체(차입자)에 양도하는 매출채권은 "장래 매출채권"에 해당합니다. 따라서 대량 환불 및 반품 등이 발생할 시에, 선정산 기업은 정산금을 원활히 회수 하지 못 할 수 있습니다.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>추심 절차</span>
                                            <div>
                                                <div className='toggle__item__body__box'>                                                
                                                    <div className='mt-5 toggle__item__body__text'>
                                                        <p>본 투자 상품에 포함되어 있는 대출채권의 채무불이행이 발생한 경우 채권 추심에 최선을 다하며, 추심을 통해 차입자에게서 회수한 금액을 투자자에게 배분할 의무가 있습니다.</p>
                                                        <p>단, 자체 추심 또는 외부 기관 위탁, 부실채권 매각 등으로 발생하는 추심 관련 수수료를 환급 전 차감한 후 추심액을 배분합니다.</p>                                                        
                                                    </div>       
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='toggle__wrap'>
                                <div className='toggle__item'>
                                    <div className='toggle__item__header'>
                                        <span>상품 구조</span>
                                        <img src='./assets/images/sub/invest_toggle1.svg' />
                                    </div>
                                    <div className='toggle__item__body'>
                                        <div className='toggle__item__body__item'>
                                            <img src='./assets/images/sub/invest_flow1.png' />
                                        </div>
                                    </div>
                                </div>
                            </div>    

                             <div className='toggle__wrap'>
                                <div className='toggle__item'>
                                    <div className='toggle__item__header'>
                                        <span>차입자 정보</span>
                                        <img src='./assets/images/sub/invest_toggle1.svg' />
                                    </div>
                                    <div className='toggle__item__body'>
                                        <div className='toggle__item__body__item'>
                                            <span>일반정보</span>
                                            <div>
                                                <div className='toggle__item__body__box'>
                                                    <div className='toggle__item__body__board'>
                                                        <div>
                                                            <div className='row'>
                                                                <span>차입자</span>
                                                                <span>온라인선정산 업체</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>대표자 신용등급</span>
                                                                <span>859점 (외부 신용평가)</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>연체기록</span>
                                                                <span>없음</span>
                                                            </div>
                                                        </div>         
                                                        <div>
                                                            <div className='row'>
                                                                <span>주소</span>
                                                                <span>서울 강동구 풍성로</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>상환계획</span>
                                                                <span>만기일 이내 일시상환</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>연대보증내역</span>
                                                                <span>있음</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className='text2'>*크로스파이낸스코리아는 차입자 증빙서류를 받아 확인하고 보관하고 있습니다.</p>
                                                </div>                                                
                                            </div>
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>
                                                요약 재무정보
                                                <div>
                                                    <p><span>단위:</span><span>천 원</span></p>
                                                    <p><span>평가일:</span><span>2022.12.31</span></p>
                                                </div>
                                            </span>
                                            <div>
                                                <div className='toggle__item__body__box'>
                                                    <div className='toggle__item__body__board'>
                                                        <div>
                                                            <div className='row'>
                                                                <span>KoDATA 신용등급</span>
                                                                <span>B+</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>매출액</span>
                                                                <span>8,185,738</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>영업이익</span>
                                                                <span>654,332</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>당기손익</span>
                                                                <span>447,891</span>
                                                            </div>
                                                        </div>         
                                                        <div>
                                                            <div className='row'>
                                                                <span>설립일</span>
                                                                <span>2018.08.13</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>자산</span>
                                                                <span>9,240,868</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>부채</span>
                                                                <span>4,540,868</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>자본</span>
                                                                <span>3,240,868</span>
                                                            </div>
                                                        </div>                                              
                                                    </div>
                                                    <p className='text2'>* 차입자가 신규사업자인 경우는 요약재무정보 자료가 없어 미표기 될수 있습니다.</p>
                                                </div>                                                
                                            </div>
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>
                                                대출정보
                                                <div>
                                                    <p><span>단위:</span><span>원</span></p>                                                    
                                                </div>
                                            </span>
                                            <div>
                                                <div className='toggle__item__body__box'>
                                                    <div className='toggle__item__body__board'>
                                                        <div>
                                                            <div className='row'>
                                                                <span>차입목적</span>
                                                                <span>선정산</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>3년간 대출실적</span>
                                                                <span>122,327,830,000</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>현재 대출잔액</span>
                                                                <span>2,013,560,000</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>*온투업권 대출잔액</span>
                                                                <span>2,013,560,000</span>
                                                            </div>
                                                        </div>                                                   
                                                        <div>
                                                            <div className='row'>
                                                                <span>총 대출금액</span>
                                                                <span>2018.08.13</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>총 대출잔액</span>
                                                                <span>9,240,868</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>최근 3년 간 상환<br/>완료 대출 실적</span>
                                                                <span>4,540,868</span>
                                                            </div>
                                                            <div className='row'>
                                                                <span>온투업권 상환내역</span>
                                                                <span>3,240,868</span>
                                                            </div>
                                                        </div>    
                                                        

                                          
                                                    </div>
                                                    <p className='text2'>*온라인투자 연계 금융업자로 부터 받은 연계대출 잔액 (해당 및 다른 온라인투자 연계 금융업자 포함)</p>
                                                </div>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        

                            <div className='toggle__wrap'>
                                <div className='toggle__item'>
                                    <div className='toggle__item__header'>
                                        <span>투자자 유의사항</span>
                                        <img src='./assets/images/sub/invest_toggle1.svg' />
                                    </div>
                                    <div className='toggle__item__body toggle__item__body__text mt30'>
                                        <p>본 연계투자상품은 원금 및 이자 수익을 보장하지 않으며, 대출자의 중도상환 또는 지연, 연체, 부실이 발생할 경우 투자원금 손실이 발생할 수 있습니다. 또한 예금자보호법에 따라 예금보험공사가 보호하지 않으며, 원금손실에 대한 책임은 투자자에게 있습니다.</p>
                                        <p>투자금 모집 완료 전까지 투자의사를 철회할 수 있으며, 투자금 모집 완료 후에는 해당 상품의 상환 및 정산 처리가 완료될 때까지 연계투자계약의 해지가 제한됩니다.</p>
                                        <p>투자금 모집이 완료가 된 후 대출이 실행되며, 해당 대출이 실행되지 않을 경우 지체없이 투자원금을 예치금 계좌로 환불해드립니다. 상품 상환일에 원리금이 회수되더라도 최대 5일 이내(단, 은행 휴무일인 경우에는 그 다음날) 투자자에게 투자원금 및 수익금을 정산하여 지급될 수 있습니다. 또한 대출자의 자금 상황에 따라 조기에 상환될 수 있으며, 조기상환 시 이자는 일할 계산되어 지급됩니다.</p>
                                        <p>본 상품은 플랫폼 이용료가 발생하지 않으며, 투자자 정산금액의 이자소득에 대한 세금·세율이 적용되며 소득세법 제 127조에 따라 개인은 15.4%(소득세 14%, 지방소득세 1.4%), 법인은 법인세법 제73조에 따라 15.4%(법인세 14%, 지방소득세 1.4%)로 원천징수 됩니다. 단, 법인세법 시행령 제 111조 제 1항에 따른 금융회사 또는 개인대부업자의 경우 세금을 원천징수 하지 않습니다. 당사의 영업행위와 관련한 민원은 온라인 고객센터로 접수하실 수 있으며, 분쟁조정을 희망하시는 경우 금융감독원에 분쟁조정을 신청하실 수 있습니다.</p>
                                        <p>연계투자상품 계약에 앞서 본 상품 페이지의 금융상품 정보와 약관을 주의깊게 읽어보시기 바랍니다. 당사는 이 연계투자상품에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자 이전에 상품화면 및 당사 공시정보를 충분히 숙지한 후 투자를 결정하시기 바랍니다.</p>
                                        <p>본 상품 페이지에 제공하는 매출채권 등급 및 관련 기업 정보 등은 콘텐츠 업체(한국기업데이터 등)정보이거나, 이를 당사에서 가공한 정보입니다. 당사와 콘텐츠 업체는 정보의 정확성이나 완전성을 보장할 수 없으며, 상황에 따라 일부 오류 또는 지연이 발생할 수 있습니다. 당사가 제공하는 모든 정보는 투자 참고 정보이므로 투자자 자신의 판단과 책임하에 상품 선택이나 투자시기에 대한 최종 결정이 이루어져야 합니다.</p>
                                        <p>본 상품 페이지는 관련 법령 및 내부 통제기준에 따른 절차를 준수하였습니다.</p>
                                    </div>                                    
                                </div>
                            </div>

                        </div>
                        <div className='invest__detail__right'>
                            <h4>투자하기</h4>  
                            
                            <div className='invest__detail__btn'>
                                <button className={activeButton === 1 ? 'active' : ''} onClick={() => { handleAdd(10);handleButtonClick(1);} }>+10만</button>
                                <button className={activeButton === 2 ? 'active' : ''} onClick={() => { handleAdd(50);handleButtonClick(2);} }>+50만</button>
                                <button className={activeButton === 3 ? 'active' : ''} onClick={() => { handleAdd(100);handleButtonClick(3);} }>+100만</button>
                                <button className={activeButton === 4 ? 'active' : ''} onClick={() => { handleReset();handleButtonClick(4);} }>초기화</button>
                            </div>
                            <div  className={`invest__detail__input ${isActive ? 'active' : ''}`} >
                                <p>투자 가능한 금액이 아닙니다.</p>
                                <input 
                                    type="number"                                     
                                    onClick={inputInt}
                                    value={inputValue}
                                    onChange={(e) => { setInputValue(parseInt(e.target.value)); handleInputChange(e); } }
                                />
                                <span>만원</span>
                            </div>
                            
                            <div className='invest__detail__price'>
                                <div>
                                    <span className='text1'>예상 수익금</span>
                                    <span className='text2'>44,712원</span>
                                </div>
                                <div>
                                    <span className='text1'>최종 상환금(세후)</span>
                                    <span className='text2'>37,842원</span>
                                </div>
                            </div>

                            <div className='invest__detail__complete'>
                                <button>투자하기</button>
                                <img src="./assets/images/sub/btn_line1.svg"></img>
                            </div>
                            
                        </div>
                    </div>                                        
                </div>                          
            </main>               
        </div>
    ) 
  }

export default Invest3;