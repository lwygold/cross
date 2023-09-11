"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_info1_2() {            

    const [activeButton, setActiveButton] = useState(1);

    const buttonClick = (duration) => {
        setActiveButton(duration);
    };
    

    return (    
        <div className="sub info">            
            <main>                
                <div className='inner'>     
                    <h4 className=''>회원정보</h4>
                    <div className="deposit__tab">
                        <ul className="common__tab type1 height1">
                            <li className="">
                                <a href="/account_info1">개인정보수정</a>
                            </li>
                            <li className="">
                                <a href="account_info1_1">비밀번호 변경</a>
                            </li>
                            <li className="active">
                                <a href="#">회원 탈퇴</a>
                            </li>                            
                        </ul>
                    </div>
                    <div className='info__header'>
                        <h5>회원 탈퇴</h5>
                    </div>
                    <div className='info__body'>
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>회원탈퇴 유의사항</span>
                            </div>
                            <div>
                                <div className='desc__box'>
                                    <p>회원탈퇴 후에는 동일한 이메일(아이디)로 가입이 불가능합니다.</p>
                                    <p>가상계좌 잔액이 0원인 경우 탈퇴가 가능합니다.</p>
                                    <p>투자중인 상품이 없는 경우 탈퇴가 능합니다.</p>
                                </div>
                            </div>
                        </div>          
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>탈퇴 사유가 무엇인가요?</span>
                            </div>
                            <div>                                
                                <div className="deposit__tab">
                                    <ul className="common__tab type1">
                                        <li
                                             onClick={() => buttonClick(1)}
                                                            className={activeButton === 1 ? 'active' : ''}>
                                            <span><img src='./assets/images/sub/button_arr1.svg' />상품/서비스 불만</span>
                                        </li>
                                        <li 
                                            onClick={() => buttonClick(2)}
                                                            className={activeButton === 2 ? 'active' : ''}>
                                            <span><img src='./assets/images/sub/button_arr1.svg' />투자금 손실 우려</span>
                                        </li>
                                        <li 
                                            onClick={() => buttonClick(3)}
                                                            className={activeButton === 3 ? 'active' : ''}>
                                            <span><img src='./assets/images/sub/button_arr1.svg' />개인정보 유출 우려</span>
                                        </li>
                                        <li
                                            onClick={() => buttonClick(4)}
                                                            className={activeButton === 4 ? 'active' : ''}>
                                            <span><img src='./assets/images/sub/button_arr1.svg' />개인홈페이지/어플 사용 불편</span>
                                        </li>                                        
                                    </ul>
                                    <div>
                                        <input type="text" placeholder='직접 기입' />
                                    </div>
                                </div>
                            </div>
                        </div>                                        
                        <div className='info__body__row flex__lrt mt0'>
                            <div>동의 확인</div>
                            <div>          
                                <div className="check__line mb65">
                                    <input id="agree1" type="checkbox" />
                                    <label for="agree1">
                                        <p>위에 회원탈퇴 유의사항을 모두 확인하였으며 동의합니다.</p>
                                    </label>
                                </div>                                                      
                                <div className='modify__btn'>
                                    <button>회원 탈퇴하기</button>
                                </div>                                
                            </div>
                        </div>     
                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_info1_2;
