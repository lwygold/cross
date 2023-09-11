"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_info1() {            

    

    return (    
        <div className="sub info">            
            <main>                
                <div className='inner'>     
                    <h4 className=''>회원정보</h4>
                    <div className="deposit__tab">
                        <ul className="common__tab type1 height1">
                            <li className="active">
                                <a href="#">개인정보수정</a>
                            </li>
                            <li className="">
                                <a href="/account_info1_1">비밀번호 변경</a>
                            </li>
                            <li className="">
                                <a href="/account_info1_2">회원 탈퇴</a>
                            </li>                            
                        </ul>
                    </div>
                    <div className='info__header'>
                        <h5>개인정보수정</h5>
                    </div>
                    <div className='info__body'>
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>이름</span>
                            </div>
                            <div>
                                <input className='readonly' type="text" name='nameKr' value="주*나" />
                            </div>
                        </div>          
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>영문명(여권상 영문명)</span>
                            </div>
                            <div>                                
                                <input type="text" value="JOOHAENA" name='nameEn' />                                
                            </div>
                        </div>   
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>휴대폰 번호</span>
                            </div>
                            <div>          
                                <div className='info__body__row__box'>
                                    <input className='readonly' type="text" name='phone' value="010-****-2433" />
                                    <button className='type1'>휴대폰 번호 변경</button>
                                </div>                                                      
                            </div>
                        </div> 
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>국적</span>
                            </div>
                            <div>                                
                                <select name='nation1'>
                                    <option>대한민국</option>
                                    <option>가나</option>
                                    <option>일본</option>
                                    <option>미국</option>
                                </select>
                            </div>
                        </div>        
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>거주 국적</span>
                            </div>
                            <div>                                
                                <select name='nation2'>
                                    <option>대한민국</option>
                                    <option>가나</option>
                                    <option>일본</option>
                                    <option>미국</option>
                                </select>
                            </div>
                        </div>                          
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>주소</span>
                            </div>
                            <div>                                
                                <div className='info__body__row__box'>
                                    <input className='readonly border-blr0' type="text" name='addr1' value="007380" />
                                    <button className='type1'>우편번호 검색</button>
                                </div>                                                      
                                <input className='readonly border-tb0 border-r0' type="text" name='addr2' value="서울 영등포구 도림로 313(신길동, 건영아파트)" />
                                <input type="text" value="101-403" name='addr3' />
                            </div>
                        </div>     
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>알림설정</span>
                            </div>
                            <div>                                
                                <div className="check__line">
                                    <input id="agreeAll" type="checkbox" />
                                    <label for="agreeAll">
                                        <span>전체 동의</span>
                                    </label>                                    
                                </div>
                                <div className="check__line">
                                    <input id="agree1" type="checkbox" />
                                    <label for="agree1">
                                        <p>이메일 투자약관, 투자설명서 수신동의</p>
                                    </label>                                    
                                </div>
                                <div className="check__line">
                                    <input id="agree2" type="checkbox" />
                                    <label for="agree2">
                                        <p>(선택) 마케팅 수신동의 및 상품 알림</p>
                                    </label>                                    
                                </div>
                                <div className='blue__box'>
                                    <p>
                                        마케팅 수신 미동의시, 상품 안내 및 이자지급 내역 안내 등의 혜택에 제한이 발생합니다.  (※ 단, 입/출금 관련 내용과 긴급 공지사항은 수신 여부와 관계없이 발송될 수 있습니다.)
                                    </p>
                                </div>
                                <div className='modify__btn'>
                                    <button>수정하기</button>
                                </div>
                                
                            </div>
                        </div>     
                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_info1;
