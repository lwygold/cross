"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_info1_1() {            

    

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
                            <li className="active">
                                <a href="#">비밀번호 변경</a>
                            </li>
                            <li className="">
                                <a href="/account_info1_2">회원 탈퇴</a>
                            </li>                            
                        </ul>
                    </div>
                    <div className='info__header'>
                        <h5>비밀번호 변경</h5>
                    </div>
                    <div className='info__body'>
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>현재 비밀번호</span>
                            </div>
                            <div>
                                <input className='readonly' type="text" name="currentPassword" placeholder="비밀번호를 입력해주세요" />
                            </div>
                        </div>          
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>새로운 비밀번호</span>
                            </div>
                            <div>                                
                                <input className='readonly' type="text" name="newPassword" placeholder="영문, 숫자, 특수문자 포함 8-15자리" />
                            </div>
                        </div>   
                        <div className='info__body__row flex__lrt'>
                            <div>
                                <span className='info__body__row__title'>새로운 비밀번호 확인</span>
                            </div>
                            <div>                                
                                <input className='readonly' type="text" name="confirmPassword" placeholder="비밀번호를 재입력 해주세요" />                                
                            </div>
                        </div>                         
                        <div className='info__body__row flex__lrt'>
                            <div></div>
                            <div>                                                                
                                <div className='modify__btn'>
                                    <button>비밀번호 변경</button>
                                </div>
                                
                            </div>
                        </div>     
                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_info1_1;
