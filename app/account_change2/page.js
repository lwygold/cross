"use client";

import Link from 'next/link';
import { useState } from "react";

import '@styles/account.css';

function Account_change2() {                


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
                                <span className='info__body__row__title'>현재 투자자격</span>
                            </div>
                            <div>                                
                                <input className='readonly' value="일반투자자" />
                                <div className='img__box'>
                                    <img src='./assets/images/sub/change_arr1.svg' />
                                </div>                                
                            </div>
                        </div>                                                                                          

                        <div className='info__body__row flex__lrt'>
                            <div className='type1'>
                                <span className='info__body__row__title'>신청 투자자격</span>
                            </div>
                            <div>                                          
                                <div className='btn__line2'>                                
                                    <button 
                                        onClick={() => activeButtonClick(1)}
                                        className={activeButton === 1 ? 'btn__type1 active' : 'btn__type1'}>
                                        소득적격투자자
                                    </button>
                                    <button 
                                        onClick={() => activeButtonClick(2)}
                                        className={activeButton === 2 ? 'btn__type2 active' : 'btn__type2'}>
                                        전문투자자
                                    </button>
                                </div>  
                                <div className='btn__line3'>
                                    <button>다음 단계</button>
                                </div>
                            </div>
                        </div>     

                    </div>
                </div>
            </main>
        </div>
    ) 
  }

export default Account_change2;
