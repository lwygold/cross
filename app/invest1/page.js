import Link from 'next/link';


// import Ui from "../invest/ui";
import InvestBoard2 from '@/components/InvestBoard2/InvestBoard2.js';
// import '@styles/invest.css';

function Invest1() {        
            
    return (    
        <div className="sub invest">            
            <main>
                <div className='inner'>
                    <div className='space'></div>           
                    <div className='invest__wrap scroll__fixed'>
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

                        <div className='invest__box2'>                            
                            <h4>
                                현재는 투자상품<br/>
                                준비중입니다
                            </h4>
                            <img src="./assets/images/sub/invest_img1.png" />
                            <div className='invest__round invest__round4'>
                                <p>영업일 및 영업시간 안내</p>
                                <div className='inline-w50 border1'>
                                    <div>
                                        <p className='text1'>금요일 5시 이후 / 주말 및 공휴일</p>
                                    </div>
                                    <div>
                                        <p className='text2'>정기휴일</p>
                                    </div>
                                </div>
                                <div className='inline-w50'>
                                    <div>
                                        <p className='text1'>운영시간</p>
                                    </div>
                                    <div>
                                        <p className='text2'>09:00 ~ 16:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="invest__board__header mt100 mb45">                            
                            <span>지난 투자 상품</span>                            
                        </div>

                        <div className="invest__board__body">
                            <InvestBoard2 />                         
                        </div>                                     
                    </div>      

                    
            </main>               
        </div>
    ) 
  }

export default Invest1;