"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/invest.css';

function Invest4() {        
            



    return (    
        <div className="sub">            
            <main>
                <div className='inner'>
                    <div className='invest__detail type1'>
                        <div className='invest__detail__left'>
                            <div className='invest__detail__left__title2'>
                                <div>
                                    <h3>카드매출 선정산 25885호</h3>                                    
                                </div>
                                <div>
                                    <p>1,000,000</p><span>원</span>
                                </div>
                            </div>                            

                            <div className='toggle__wrap'>
                                <div className='toggle__item type1'>                                    
                                    <div className='toggle__item__body'>                                     
                                        <div className='mt-0 toggle__item__body__item'>
                                            <span>투자 안내사항</span>
                                            <div>
                                                <div className='toggle__item__body__box'>                                                    
                                                    <div className='mt-5 toggle__item__body__text'>
                                                        <p>모집이 완료된 투자 상품은 취소가 불가능합니다.</p>
                                                        <p>모집 미달로 인해 투자가 되지 않거나 대출자가 대출을 취소할 경우, 투자금은 "나의 예치금 계좌"로 입금됩니다.</p>
                                                        <p>투자를 신청하실 경우 등록해 주신 SNS 또는 문자로 투자 신청 현황과 수익금 지급 관련 내용을 안내해 드립니다.</p>
                                                        <p>모집이 완료되어 대출이 실행되면 투자확정으로 상세 내용을 안내해 드립니다.</p>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className='toggle__item__body__item'>
                                            <span>투자 위험고지</span>
                                            <div>
                                                <div className='toggle__item__body__box'>                                                
                                                    <div className='mt-5 toggle__item__body__text'>
                                                        <p>본 투자 상품은 원금이 보장되지 않습니다. 모든 투자에는 기대수익에 상응하는 투자위험이 있음을 유의하셔야 합니다.</p>
                                                        <p>대출자가 원금의 전부 또는 일부를 상환하지 못할 경우 발생하는 투자금 손실 등 투자위험은 투자자가 부담하게 됩니다.</p>                                                        
                                                    </div>       
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                          

                        </div>
                        <div className='static invest__detail__right'>
                            <h4 className='border1'>약관 동의작성</h4>  

                            <div className="invest__detail__text1">
                                <p>
                                    나 <span>홍길동은</span>(는) <span>상기 내용을 확인하였으며,</span><br />
                                    <span>그 내용에 동의</span>합니다.
                                </p>
                            </div>                            
                            <div className="invest__detail__input type1">
                                <p>투자 가능한 금액이 아닙니다.</p>
                                <input className='type1' type="text" placeholder='네 (직접입력)' />                                
                            </div>                            

                            <div className="invest__detail__agree">
                                <div className="check__line">
                                    <input id="agree" type="checkbox" />
                                    <label for="agree">
                                        <span>투자자 이용약관에 동의합니다.</span>
                                    </label>
                                    <i className='charge1'>보기</i>
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

export default Invest4;