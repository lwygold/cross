"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_change4() {                


    const [activeButton, setActiveButton] = useState(1);

    const activeButtonClick = (duration) => {
        setActiveButton(duration);
    };
    

    return (    
        <div className="sub info change">            
            <main>                
                <div className='inner'>     
                    <h4 className=''>투자자격 변경</h4>                    
                    <div className='info__header'>                        
                        <h5 className='flex__lrc'>
                            <span>투자자격 변경 신규 신청</span>
                            <span className='popup__btn2'>투자자 자격별 한도 안내</span>
                        </h5>                        
                    </div>
                    <div className='info__body'>
                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>신청 투자자격</span>
                            </div>
                            <div>                                
                                <input className='readonly input__text active' value="소득적격투자자" />                                
                            </div>
                        </div>                                                                                          

                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>자격 요건 안내</span>
                            </div>
                            <div>                                                                          
                                <div className='toggle__box'>
                                    <div className='toggle__box__top'>
                                        <input className='readonly input__text border-bottom0' value="소득적격투자자" />
                                        <img className='toggle__arr' src='./assets/images/sub/change_arr2.svg' />
                                    </div>                                    
                                    <div className='toggle__box__bottom'>
                                        <div>
                                            <h5>필수조건</h5>
                                            <p className='text1'>
                                                최근 5년 중 1년 이상 투자 계좌를 유지하고 금융위가 고시하는 금융투자상품잔고를 5천만 원이상(월말 평균잔고 기준) 보유
                                            </p>
                                        </div>
                                        <div>
                                            <h5>아래 중 선택1</h5>
                                            <p className='text2'>
                                                <span>1.</span>연소득 1억원 이상 개인(부부 합산 시 1.5억원)
                                            </p>
                                            <p className='text2'>
                                                <span>2.</span>순자산(거주주택 제외) 5억원 이상
                                            </p>
                                            <p className='text2'>
                                                <span>3.</span>금융관련 전문성 회계사, 감평사, 변호사, 변리사, 세무사, 투자운용인력, 재무위험관리사 등 시험 합격자, 금융투자업 주요 직무 종사자 등
                                            </p>
                                        </div>
                                        <p className='text3'>
                                            전문투자자 확인증 발급 관련 자세한 문의는 각 증권사로 연락 부탁드립니다
                                        </p>
                                    </div>                                        
                                </div>    

                                                      
                            </div>
                        </div>   

                         <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>필수 제출 서류</span>
                            </div>
                            <div>                                
                                <div className='round__box3 flex__lrc'>
                                    <div className='doc'>
                                        <p className='text1'>필수 제출 서류를 확인해주세요</p>
                                        <div className='flex__b'>
                                            <img src='./assets/images/sub/change_arr3.svg' />
                                            <img src='./assets/images/sub/change_arr5.svg' />
                                            <p className='type1'>전문투자자 확인증(금융투자협회 or 증권사)</p>
                                        </div>
                                    </div>
                                    <div className='status on'>
                                        <span>미충족</span>
                                        <span>첨부완료</span>
                                    </div>
                                </div>

                                <div class="btn__line">
                                    <button class="btn__cancel">이전단계</button>
                                    <button class="btn__apply">신청하기</button>
                                </div>      
                            </div>
                        </div>       

                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_change4;
