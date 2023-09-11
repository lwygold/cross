"use client";

import Link from 'next/link';
import { useState } from "react";
import Paging from '@components/Paging/Paging.js'


// import Ui from "../invest/ui";
// import '@styles/invest.css';

function Invest2() {        
            
    const [activeTab, setActiveTab] = useState('list');    

    const handleTabChange = (tab) => {
      if (tab !== activeTab) {
        setActiveTab(tab);        
      }
    };

    return (    
        <div className="sub invest">            
            <main>
                <div className='inner'>
                    <div className='space'></div>           
                    <div className='invest__wrap'>
                        <div className='invest__box'>                            
                            <div className='invest__round invest__round1'>
                                <p><b>왕지영</b>님의 예치금</p>
                                <div><p>28,500,000</p><span>원</span></div>
                            </div>
                            <div className='invest__round invest__round3'>
                                <p>투자 신청 중</p>
                                <div>
                                    <p>2</p><span>건</span>
                                    <img src="./assets/images/sub/invest_line1.svg" />
                                    <p>10,000,000</p><span>원</span>
                                </div>
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

                    <div className='invest__board mt-70'>

                        <div className='invest__board__header'>
                            <span>새로 오픈된 투자상품</span>
                            <div>
                                <img onClick={() => handleTabChange('list')} src={ activeTab === 'list' ? "./assets/images/sub/invest_board1_on.svg" : "./assets/images/sub/invest_board1_off.svg" } ></img>
                                <img onClick={() => handleTabChange('card')} src={ activeTab === 'card' ? "./assets/images/sub/invest_board2_on.svg" : "./assets/images/sub/invest_board2_off.svg" } ></img>
                            </div>
                        </div>

                        <div className='invest__board__body'>
                                <div className={ activeTab === 'list' ? "type1 active" : "type1" }>
                                    <div className='header__row row'>
                                        <div>
                                            <span>수수료</span>
                                        </div>
                                        <div>
                                            <span>상품명</span>
                                        </div>
                                        <div>
                                            <span>수익률</span>
                                        </div>
                                        <div>
                                            <span>투자기간</span>
                                        </div>
                                        <div>
                                            <span>총 모집금액</span>
                                        </div>
                                        <div>
                                            <span>투자진행률</span>
                                        </div>               
                                        <div>
                                            <span>투자타이머</span>
                                        </div>
                                    </div>
                                    <div className='row'>     
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25620호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25620호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge2'>수수료 3%</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25619호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge3'>신청중인 상품</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25618호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge2'>수수료 3%</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25617호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge2'>수수료 3%</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25616호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge2'>수수료 3%</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25615호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>  
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                             
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge3'>신청중인 상품</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25614호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>  
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                             
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25613호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>  
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                             
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25612호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>   
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                            
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25611호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>  
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                             
                                        </Link>
                                    </div>
                                    <div className='row'>
                                        <Link href="/">                                           
                                            <div>
                                            <span className='charge1'>수수료 면제</span>
                                            </div>
                                            <div>
                                                <span>카드매출 선정산 25610호</span>
                                            </div>
                                            <div>
                                                <span>12.20%</span>
                                            </div>
                                            <div>
                                                <span>10일</span>
                                            </div>
                                            <div>
                                                <span>464,500,000원</span>
                                            </div>
                                            <div>
                                                <div className='flex'>
                                                    <div>
                                                        <img src="./assets/images/sub/invest_circle1.svg"></img>
                                                    </div>
                                                    <span>78%</span>
                                                </div>                                        
                                            </div>  
                                            <div>
                                                <span>5,000,000원</span>
                                            </div>
                                             
                                        </Link>
                                    </div>
                                </div>
                                <div className={ activeTab === 'card' ? "type2 active" : "type2" }>
                                    <ul>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25620호</p>
                                                    <span className='charge3'>신청중인 상품</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>85%</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>93명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>464,500,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25619호</p>
                                                    <span className='charge2'>수수료 3%</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>87%</span>
                                                        <div>
                                                            <span style={{ width:'87%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>43명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>576,200,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25618호</p>
                                                    <span className='charge1'>수수료 면제</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>85%</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>63명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>214,500,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25617호</p>
                                                    <span className='charge1'>수수료 면제</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>98%</span>
                                                        <div>
                                                            <span style={{ width:'98%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>193명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>12,000,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25616호</p>
                                                    <span className='charge2'>수수료 3%</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>87%</span>
                                                        <div>
                                                            <span style={{ width:'87%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>43명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>576,200,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25615호</p>
                                                    <span className='charge3'>신청중인 상품</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>85%</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>63명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>214,500,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25614호</p>
                                                    <span className='charge3'>신청중인 상품</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>85%</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>93명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>464,500,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25613호</p>
                                                    <span className='charge2'>수수료 3%</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>87%</span>
                                                        <div>
                                                            <span style={{ width:'87%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>43명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>576,200,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                        <li>
                                            <Link href="/">            
                                                <div>
                                                    <p>카드매출 선정산 25612호</p>
                                                    <span className='charge1'>수수료 면제</span>
                                                </div>
                                                <div>
                                                    <div className="flex1">
                                                        <span>투자진행률</span>
                                                        <span>85%</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자기간</span>
                                                        <span>10일</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>투자인원</span>
                                                        <span>63명</span>
                                                    </div>
                                                    <div className="flex1">
                                                        <span>순수익률(세전)</span>
                                                        <span>12.20%</span>
                                                    </div>                                            
                                                    <div className="flex1">
                                                        <span>투자타이머</span>
                                                        <span>54분 16초 남음</span>
                                                        <div>
                                                            <span style={{ width:'85%' }}></span>
                                                        </div>
                                                    </div>
                                                </div>    
                                                <div>
                                                    <div className="flex1">
                                                        <span><b>총 모집 금액</b></span>
                                                        <span><b>214,500,000원</b></span>
                                                    </div>
                                                </div>    
                                            </Link>                                
                                        </li>
                                    </ul>  
                                </div>
                            </div>
                        </div>
                                                
                        <div className='invest__board2 mt100'>
                            <div className="invest__board__header">
                                <span>지난 투자 상품</span>
                            </div>
                            
                            <div className='invest__board__body mt45'>
                                <div className="header__row row row2">
                                    <div><span>상품명</span></div>
                                    <div><span>지급일</span></div>
                                    <div><span>수익률</span></div>
                                    <div><span>투자기간</span></div>
                                    <div><span>투자자</span></div>
                                    <div><span>모집금액</span></div>
                                    <div><span>상태</span></div>
                                </div>
                            </div>

                            <div className='invest__board__body invest__board__body2'>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>
                                <div className="row row2">
                                    <Link href="/">            
                                        <div><span>카드매출 선정산 25620호</span></div>
                                        <div><span>2023-08-23</span></div>
                                        <div><span>12.20%</span></div>
                                        <div><span>7일</span></div>
                                        <div><span>42명</span></div>                                    
                                        <div><span>464,200,000원</span></div>
                                        <div><span className="charge2">상환 중</span></div>
                                    </Link>
                                </div>                                
                            </div>
                        </div>
                        <Paging />                    
                    </div>      

                                    
            </main>               
        </div>
    ) 
  }

export default Invest2;