"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_change1() {                
    

    return (    
        <div className="sub info change">            
            <main>                
                <div className='inner'>     
                    <h4 className=''>투자자격 변경</h4>                    
                    <div className='info__header'>
                        <p><b>주해나</b> 님의 현재 투자자격은 <span>일반투자자</span>입니다</p>
                    </div>
                    <div className='info__body'>
                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>투자자격 변경을 원하시나요?</span>
                            </div>
                            <div>                                
                                <div className='round__box1'>
                                    <div className='file__input'>
                                        <input type='file' />
                                    </div>                                        
                                    <p>투자자격 변경 신규 신청</p>
                                </div>                                
                            </div>
                        </div>          
                                                      
                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>투자자격 신청 현황</span>
                            </div>
                            <div>          
                                <div className='round__box2'>
                                    <div className='file__not'>
                                        <span>!</span>
                                    </div>                                        
                                    <p>현재 접수 된 신청이 없습니다</p>
                                </div>       
                            </div>
                        </div>     

                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>
                                    지난 자격 변경 내역<br/>
                                    <span>총 <b>0</b>건</span>
                                </span>
                            </div>
                            <div>          
                                <div className='round__box2'>
                                    <div className='file__not'>
                                        <span>!</span>
                                    </div>                                        
                                    <p>지난 투자자격 신청 내역이 없습니다</p>
                                </div>    
                                <div className='btn__line'>
                                    <button className='btn__cancel'>취소</button>
                                    <button className='btn__apply'>자격 변경 신청</button>
                                </div>  
                            </div>
                        </div>     

                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_change1;
