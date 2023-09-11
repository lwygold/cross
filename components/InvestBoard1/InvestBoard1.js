"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';



function InvestBoard1() {

    const pi = 3.14159;    
    let circlePercentage = 0.78;
    const strokeDashoffset = `calc(${pi} + (${pi} * ${circlePercentage}))`;      
    const styles = {
      strokeDashoffset: strokeDashoffset,
    };
    
    
    return (        
       <>
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
                <span>나의 투자가능금액</span>
            </div>
            <div>
                <span>투자진행률</span>
            </div>
        
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
        <div className='row'>
            <Link href="#">
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
                    <span>5,000,000원</span>
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <svg className="circle_progress" width="20" height="20" viewBox="0 0 20 20">
                                <circle className="circle" cx="10" cy="10" r="8.5" stroke-width="3"></circle>
                                <circle
                                    className="progress"
                                    cx="10"
                                    cy="10"
                                    r="8.5"
                                    stroke-width="3"
                                    style={styles}></circle>
                            </svg>
                        </div>
                        <span>78%</span>
                    </div>
                </div>
            </Link>
        </div>
    </> 
    )
}

export default InvestBoard1;
