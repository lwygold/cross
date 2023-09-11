"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Board7 from '@components/Board7/Board7.js';

// import '@styles/account.css';

function Account2() {    

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
                                <Link href="#">
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

                    <div className='account__box1 flex__lrt'>
                        <div>
                            <h5 className='account__title'>
                                예치금 계좌 정보
                            </h5>
                            <div className='account__info account__info1'>
                                <div className='account__info__row flex__lrc'>
                                    <span>예치금</span>
                                    <div>
                                        <p>1,248,161,762</p><span>원</span>
                                    </div>                                    
                                </div>
                                <div className='account__info__row flex__lrc'>
                                    <span>출금 요청 금액</span>
                                    <div>
                                        <p>0</p><span>원</span>
                                    </div>                                    
                                </div>
                                <div className='account__info__row flex__lrc'>
                                    <span>투자 신청 금액</span>
                                    <div>
                                        <p>0</p><span>원</span>
                                    </div>                                    
                                </div>
                                <div className='account__info__row flex__lrc'>
                                    <span>출금 가능 금액</span>
                                    <div>
                                        <p>3,397</p><span>원</span>
                                    </div>                                    
                                </div>
                                <h6>저축은행 06641151583497</h6>
                                <div className='account__info__row2 flex__lrc'>
                                    <div>
                                        <span>입금하기</span>
                                        <img src="./assets/images/sub/account_arr1.svg" />    
                                    </div>
                                    
                                    <div>
                                        <button className='popup__btn1'>계좌복사</button>
                                        <button className='popup__btn1'>입금확인</button>
                                        <button className='popup__btn1'>입금계좌 제한해제</button>
                                    </div>
                                </div>
                            </div>
                            <div className='account__desc'>
                                <p>받을 계좌(출금 계좌)로 인증 받은 계좌에서만 입금이 가능합니다.</p>
                                <p>
                                    일부 증권사, 은행계좌에는 입금에 제한이 있을 수 있습니다. 이러한 경우 `입금계좌 제한 해제`<br/>
                                    버튼을 눌러주세요.
                                </p>
                                <p>
                                    23:30 ~ 00:30 사이에는 은행 금융망 자체 점검 시간으로 이체가 불가할 수 있습니다.
                                </p>
                                <p>
                                    입출금 내역의 잔액은 23/05/18일 이후의 내역부터 표시됩니다.
                                </p>
                                <p>
                                    관련 문의: 1599-9860
                                </p>
                            </div>
                        </div>
                        <div>
                            <h5 className='account__title'>
                                예치금 출금
                            </h5>
                            <div className='account__info account__info2'>
                                <div className='flex__lrc'>
                                    <div>
                                        <div className='invest__detail__btn'>
                                            <button className={activeButton === 1 ? 'active' : ''} onClick={() => { handleAdd(10);handleButtonClick(1);} }>+10만</button>
                                            <button className={activeButton === 2 ? 'active' : ''} onClick={() => { handleAdd(50);handleButtonClick(2);} }>+50만</button>
                                            <button className={activeButton === 3 ? 'active' : ''} onClick={() => { handleAdd(100);handleButtonClick(3);} }>+100만</button>
                                            <button className={activeButton === 4 ? 'active' : ''} onClick={() => { handleReset();handleButtonClick(4);} }>전액출금</button>
                                        </div>
                                        <div  className={`invest__detail__input ${isActive ? 'active mb0' : 'mb0'}`} >
                                            <p>투자 가능한 금액이 아닙니다.</p>
                                            <input 
                                                type="number"                                     
                                                onClick={inputInt}
                                                value={inputValue}
                                                onChange={(e) => { setInputValue(parseInt(e.target.value)); handleInputChange(e); } }
                                            />
                                            <span>만원</span>
                                        </div>
                                    </div>
                                    <div className='withdraw__money'>
                                        <button>출금하기</button>
                                    </div>                                    
                                </div>
                                
                                <h6 className='flex__c'><span className='charge1'>받을 계좌</span>기업은행 01038942433</h6>
                                    <div className='account__info__row2 ver1 flex__lrc'>
                                        <div>
                                            <span>변경하기</span>
                                            <img src="./assets/images/sub/account_arr2.svg" />    
                                        </div>
                                        
                                        <div>                                            
                                            <button className='popup__btn1'>받을 계좌 변경하기</button>
                                        </div>
                                    </div>
                            </div>
                            <div className='account__desc'>
                                <p>예치금 중 투자 신청 금액, 출금 요청 금액은 출금 가능 금액에서 제외됩니다.</p>
                                <p>
                                    출금 가능 시간은 2:00 ~ 23:00 입니다.
                                </p>
                                <p>
                                    출금요청 후 4자리 인증코드가 SMS로 전송됩니다.
                                </p>
                                <p>
                                    SMS가 수신되지 않을 경우, <span>마이페이지 &gt; 설정 &gt; 상세정보</span>에서 올바른 휴대폰번호가 등록되어 있는지 확인해주세요.
                                </p>                                                            
                            </div>
                        </div>
                    </div>
                    

                    <div className='com__board deposit__body'>
                        <h5>입출금 내역</h5>
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
                            <div className='flex__c deposit__search__down'>                                
                                <select className='basic__select1'>
                                    <option selected="">전체</option>
                                    <option selected="">1</option>
                                    <option selected="">2</option>                                
                                </select>
                                <a className='flex__c' href="" download>
                                    <span>엑셀 다운로드</span>
                                    <span><img src="./assets/images/sub/account_download1.svg" /></span>
                                </a>                                
                            </div>
                        </div>
                        <div className='board__wrap'>                            
                            <div className='active'>
                                <Board7/>                                
                            </div>                            
                        </div>
                    </div>

                </div>
            </main>            
        </div>
    ) 
  }

export default Account2;
