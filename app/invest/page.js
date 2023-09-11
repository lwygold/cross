"use client";


import Link from 'next/link';
import { useState } from "react";

// import Ui from "./ui";

import InvestCard1 from '@/components/InvestCard1/InvestCard1.js';
import InvestBoard1 from '@/components/InvestBoard1/InvestBoard1.js';
// import '@styles/invest.css';

function Invest() {        
                
    const [activeTab, setActiveTab] = useState('list');
    const [activeTab2, setActiveTab2] = useState('list');

    const handleTabChange = (tab) => {
      if (tab !== activeTab) {
        setActiveTab(tab);        
      }
    };

    const handleTabChange2 = (tab) => {
        if (tab !== activeTab2) {
          setActiveTab2(tab);            
        }
    };

    const pi = 3.14159;    
    let circlePercentage = 0.78;
    const strokeDashoffset = `calc(${pi} + (${pi} * ${circlePercentage}))`;      
    const styles = {
      strokeDashoffset: strokeDashoffset,
    };
  
  
  

    return (    
        <div className="sub invest">                        
            <main>                
                <div className='inner'>         
                    <div className='space'></div>           
                    <div className='invest__wrap scroll__fixed'>
                    
                        <div className='invest__box'>
                            <div className='text1'>
                                <p>
                                    지금 <b>12건</b>의<br/>
                                    투자상품이 진행중입니다.
                                </p>
                            </div>
                            <div className='invest__round invest__round1'>
                                <p><b>왕지영</b>님의 예치금</p>
                                <div><p>28,500,000</p><span>원</span></div>
                            </div>
                            <div className='invest__round invest__round2'>
                                <p>오늘 상환받는 금액</p>
                                <div>
                                    <p>2</p><span>건</span>
                                    <img src="./assets/images/sub/invest_line1.svg" />
                                    <p>4,100,000</p><span>원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className='invest__board'>

                        <div className='invest__board__header'>
                            <span>모집 중인 투자상품</span>
                            <div>
                                <img onClick={() => handleTabChange('list')} src={ activeTab === 'list' ? "./assets/images/sub/invest_board1_on.svg" : "./assets/images/sub/invest_board1_off.svg" } ></img>
                                <img onClick={() => handleTabChange('card')} src={ activeTab === 'card' ? "./assets/images/sub/invest_board2_on.svg" : "./assets/images/sub/invest_board2_off.svg" } ></img>
                            </div>
                        </div>

                        <div className='invest__board__body'>
                            <div className={ activeTab === 'list' ? "type1 active" : "type1" }>
                                <InvestBoard1 />
                            </div>
                            <div className={ activeTab === 'card' ? "type2 active" : "type2" }>
                                <InvestCard1 />  
                            </div>
                        </div>
                    </div>

                    <div className='invest__board mt-120 mb-120'>
                    
                        <div className='invest__board__header'>
                            <span>오픈 예정 상품</span>
                            <div>
                                <img onClick={() => handleTabChange2('list')} src={ activeTab2 === 'list' ? "./assets/images/sub/invest_board1_on.svg" : "./assets/images/sub/invest_board1_off.svg" } ></img>
                                <img onClick={() => handleTabChange2('card')} src={ activeTab2 === 'card' ? "./assets/images/sub/invest_board2_on.svg" : "./assets/images/sub/invest_board2_off.svg" } ></img>
                            </div>
                        </div>

                        <div className='invest__board__body'>
                            <div className={ activeTab2 === 'list' ? "type1 active" : "type1" }>
                                <InvestBoard1 />
                            </div>
                            <div className={ activeTab2 === 'card' ? "type2 active" : "type2" }>
                               <InvestCard1 />  
                            </div>
                        </div>
                    </div>
                    
                </div>
            </main>               
        </div>
    ) 
  }

export default Invest;