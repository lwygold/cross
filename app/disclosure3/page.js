"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Board9 from '@components/Board9/Board9.js';

import '@styles/disclosure.css';

function Disclosure3() {    

    const linkName = usePathname();    

    // const [activeMonth, setActiveMonth] = useState(0);    
    // const [activeTax, setActiveTax] = useState(0);        

    const [activeFinance, setActiveFinance] = useState("type1");

    const financeChange = (event) => {
        const selectedValue = event.target.value;
        setActiveFinance(selectedValue);
    };

    const [activeExecutives, setActiveExecutives] = useState("type1");

    const executivesChange = (event) => {
        const selectedValue = event.target.value;
        setActiveExecutives(selectedValue);        
    };

    const [activeShareholder, setActiveShareholder] = useState("2021");

    const shareholderChange = (event) => {
        const selectedValue = event.target.value;
        setActiveShareholder(selectedValue);
    };

    
  
    
    return (    
        <div className="sub disclosure">            
            <main>                
                <div className='inner'>     
                    <div className='account__header'>
                        <ul className='common__tab type1'>
                            <li className={ linkName === '/disclosure' ? 'active' : '' }>
                                <Link href="/disclosure">
                                    결산공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure1' ? 'active' : '' }>
                                <Link href="/disclosure1">
                                    월간공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure2' ? 'active' : '' }>
                                <Link href="/disclosure2">
                                    수시공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure3' ? 'active' : '' }>  
                                <Link href="#">
                                    기타공시
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='disclosure__wrap'>
                        <div className='disclosure__content1 disclosure__board1'>
                            <div className="disclosure__board__header">
                                <span>연도별 중개현황</span>
                                <select className="basic__select1 w133">
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                </select>
                            </div>                            
                            <table className="fin-table">
                                <thead>
                                    <tr>
                                        <th>구분</th>
                                        <th>총 연계대출 금액</th>
                                        <th>총 연체채권 잔액</th>
                                        <th>연체율 (%)</th>
                                        <th>연체 건</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>부동산PF</th>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>부동산담보</th>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>기타담보(어음, 매출채권 담보 제외)</th>
                                        <td>1,500,000,000</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>어음, 매출채권 담보</th>
                                        <td>1,368,444,856,000</td>
                                        <td>620,727,460</td>
                                        <td>2.10</td>
                                        <td>20</td>
                                    </tr>
                                    <tr>
                                        <th>개인 신용</th>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>법인 신용</th>
                                        <td>88,000,150,000</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th>합계</th>
                                        <td>1,457,945,006,000</td>
                                        <td>620,727,460</td>
                                        <td>1.76</td>
                                        <td>20</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='text1'>
                                <p>* 본 중개현황의 연체채권 잔액 및 연체율 산정기준은 약정상환일로부터 30일이상 원금 및 이자의 지급을 지체한 연계대출 채권 잔액을 기준으로 공시되었습니다.</p>
                            </div>                            
                        </div>     

                        <div className='disclosure__content2'>
                            <div className="disclosure__board__header">
                                <span>사업 구조</span>                        
                            </div>                            
                            <img src="./assets/images/sub/disclosure_img1.png" />
                        </div>

                        <div className='disclosure__content3'>
                            <div className="disclosure__board__header">
                                <span>정산 업무</span>                        
                            </div>                            
                            <img src="./assets/images/sub/disclosure_img2.png" />
                        </div>

                        <div className='disclosure__content4'>
                            <div className="disclosure__board__header">
                                <span>재무 현황</span>        
                                <div>
                                    <select className="basic__select1 w133" onChange={financeChange}>
                                        <option value="type1">재무상태표</option>
                                        <option value="type2">손익계산서</option>                                        
                                    </select>

                                    <select className="basic__select1 w133">
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                    </select>
                                </div>                
                            </div>                            
                            <div>

                                {activeFinance=="type1" && 
                                    <table className="fin-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">구분</th>
                                                <th>금액 (원)</th>
                                                <th>구성비 (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th rowSpan="6">자산</th>
                                                <th>현금 및 예치금</th>
                                                <td>186,393,173</td>
                                                <td>1.80</td>
                                            </tr>
                                            <tr>
                                                <th>유가증권</th>
                                                <td>9,471,816,140</td>
                                                <td>91.58</td>
                                            </tr>
                                            <tr>
                                                <th>단기대여금 및 수취채권</th>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <th>유형자산</th>
                                                <td>87,966,064</td>
                                                <td>0.85</td>
                                            </tr>
                                            <tr>
                                                <th>기타자산</th>
                                                <td>596,837,209</td>
                                                <td>5.77</td>
                                            </tr>
                                            <tr>
                                                <th>자산총계</th>
                                                <td>10,343,012,586</td>
                                                <td>100.00</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="3">부채</th>
                                                <th>차입부채</th>
                                                <td>6,523,105,369</td>
                                                <td>91.66</td>
                                            </tr>
                                            <tr>
                                                <th>기타부채</th>
                                                <td>593,454,293</td>
                                                <td>8.34</td>
                                            </tr>
                                            <tr>
                                                <th>부채총계</th>
                                                <td>7,116,559,662</td>
                                                <td>100.00</td>
                                            </tr>
                                            <tr>
                                                <th rowSpan="6" className="bg-white">자본</th>
                                                <th>납입자본금</th>
                                                <td>3,355,186,000</td>
                                                <td>103.99</td>
                                            </tr>
                                            <tr>
                                                <th>자본잉여금</th>
                                                <td>11,270,389,383</td>
                                                <td>349.31</td>
                                            </tr>
                                            <tr>
                                                <th>이익잉여금</th>
                                                <td>-11,399,122,459</td>
                                                <td>-353.30</td>
                                            </tr>
                                            <tr>
                                                <th>자본조정</th>
                                                <td>0</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th>기타 포괄순익누계액</th>
                                                <td>0</td>
                                                <td>0.00</td>
                                            </tr>
                                            <tr>
                                                <th>자본총계</th>
                                                <td>3,226,452,924</td>
                                                <td>100.00</td>
                                            </tr>
                                            <tr>
                                                <th colSpan="2">부채 및 자본 총계(총자산)</th>
                                                <td>10,343,012,586</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                }

                                {activeFinance=="type2" && 
                                    <table className="fin-table">
                                        <thead>
                                            <tr>
                                                <th>구분</th>
                                                <th>금액 (원)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>영업수익</th>
                                                <td>984,506,288</td>
                                            </tr>
                                            <tr>
                                                <th>영업비용</th>
                                                <td>2,902,853,160</td>
                                            </tr>
                                            <tr>
                                                <th>영업이익</th>
                                                <td>-1,918,346,872</td>
                                            </tr>
                                            <tr>
                                                <th>영업외수익</th>
                                                <td>203,099,381</td>
                                            </tr>
                                            <tr>
                                                <th>영업외비용</th>
                                                <td>1,304,254,460</td>
                                            </tr>
                                            <tr>
                                                <th>법인세차감전순이익</th>
                                                <td>-3,019,501,951</td>
                                            </tr>
                                            <tr>
                                                <th>법인세비용</th>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <th>당기순이익</th>
                                                <td>-3,019,501,951</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                }
                                
                                <div className='text1'>
                                    <p>* 주식회사 크로스파이낸스 코리아와 그 종속기업(P2P연계대부업인 주식회사 한국기업금융대부) 연결 회계기준으로 공시되었습니다.</p>
                                </div>
                            </div>                            
                        </div>

                        <div className='disclosure__content5'>
                            <div className="disclosure__board__header">
                                <span>임직원 및 전문가 현황</span>        
                                <div>
                                    <select className="basic__select1 w133" onChange={executivesChange}>
                                        <option value="type1">임직원</option>
                                        <option value="type2">전문가</option>                                        
                                    </select>
                                    <select className="basic__select1 w133">
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                    </select>
                                    <select className="basic__select1 w79">                                        
                                        <option>3</option>                                        
                                        <option>6</option>                                        
                                    </select>
                                </div>                
                            </div>                            
                            <div>
                                    {activeExecutives=="type1" && 
                                        <table className="fin-table">
                                            <thead>
                                                <tr>
                                                    <th colSpan="3">구분</th>
                                                    <th>국내</th>
                                                    <th>국외</th>
                                                    <th>합계</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th rowSpan="4">임원</th>
                                                    <th colSpan="2">비등기임원</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th rowSpan="2">등기이사</th>
                                                    <th>사내이사</th>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <th>사외이사</th>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <th colSpan="2">감사 또는 상근감사위원</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th rowSpan="7">직원</th>
                                                    <th rowSpan="4">정규직</th>
                                                    <th>전체</th>
                                                    <td>15</td>
                                                    <td>1</td>
                                                    <td>16</td>
                                                </tr>
                                                <tr>
                                                    <th>(일반직)</th>
                                                    <td>11</td>
                                                    <td>1</td>
                                                    <td>12</td>
                                                </tr>
                                                <tr>
                                                    <th>(전문인력*)</th>
                                                    <td>4</td>
                                                    <td>0</td>
                                                    <td>4</td>
                                                </tr>
                                                <tr>
                                                    <th>(무기계약직)</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th rowSpan="3">비정규직</th>
                                                    <th>전체</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th>(전문인력)</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th>(그 외)</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th colSpan="3">계</th>
                                                    <td>20</td>
                                                    <td>1</td>
                                                    <td>21</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    }

                                    {activeExecutives=="type2" && 

                                        <table className="fin-table">
                                            <thead>
                                                <tr>
                                                    <th rowSpan="2">구분</th>
                                                    <th colSpan="2">국내</th>
                                                    <th colSpan="2">국외</th>
                                                    <th rowSpan="2">합계</th>
                                                </tr>
                                                <tr>
                                                    <th>정규직</th>
                                                    <th>비정규직</th>
                                                    <th>정규직</th>
                                                    <th>비정규직</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>회계사</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <th>변호사*</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>여신심사역</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>준법감시*</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>IT</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>데이터 사이언티스트</th>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>그 외</th>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    }
                                <div className='text1'>
                                    <p>*전문인력 중 1 인은 사내이사 겸임</p>
                                </div>
                            </div>                            
                        </div>

                        <div className='disclosure__content6'>
                            <div className="disclosure__board__header">
                                <span>온라인 개인정보 관리 실태점검</span>        
                                <div>                                    
                                    <select className="basic__select1 w133">                                        
                                        <option>2022</option>
                                        <option>2021</option>
                                    </select>                                    
                                </div>                
                            </div>                            
                            <div>
                                <div className='text2'>
                                    <p>온라인투자연계금융업법 제30조 제2항에 따라서 ㈜크로스파이낸스코리아는 아래와 같이 온라인 정보관리 실태점검을 실시하였음.</p>
                                </div>
                                <table className="fin-table">
                                    <tbody>
                                        <tr>
                                            <td className="center">점검 기간</td>
                                            <td className="center">1차 : 2022년 11월 14일 ~ 2022년 12월 02일 2차 : 2022년 12월 27일 ~ 2022년 12월 28일</td>
                                        </tr>
                                        <tr>
                                            <td className="center">점검 기관</td>
                                            <td className="center">엔시큐어㈜ (정보보호산업진흥법 제23조에 따라 지정된 정보보호 서비스 전문기업)</td>
                                        </tr>
                                        <tr>
                                            <td className="center">점검 내용</td>
                                            <td className="center">개인신용정보 수집·이용(23개 항목) 개인신용정보 제공(9개 항목) 개인신용정보 처리 위탁(12개 항목)
                                                개인신용정보의 안전한 보관(51개 항목) 개인신용정보 삭제(파기)(13개 항목) 신용정보 활용체제 공시(4개 항목) 신용정보관리·보호인 지정 및
                                                내부통제 등(12개 항목) 신용정보 주체의 권리보장(13개 항목)</td>
                                        </tr>
                                        <tr>
                                            <td className="center">점검 결과</td>
                                            <td className="center">온라인 정보관리보호 이행율 86.5% - 전년도 대비 9.7% 상향 - 전년도 대비 개인신용정보 접근통제조치
                                                강화 등 신용정 보 보관(72.9%→87.5%), 신용정보 활용체제 공시(0%→ 100%), 신용정보 관리 및 내부통제(75%→83.3%)
                                                분야별 점 수 향상</td>
                                        </tr>
                                        <tr>
                                            <td className="center">개선 계획</td>
                                            <td className="center">점검 항목별 문제점을 개선하여 향상 예정</td>
                                        </tr>
                                    </tbody>
                                </table>                                
                            </div>                            
                        </div>

                        <div className='disclosure__content7'>
                            <div className="disclosure__board__header">
                                <span>대주주 현황</span>        
                                <div>                                    
                                    <select className="basic__select1 w133" onChange={shareholderChange}>                                        
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                    </select>                                    
                                </div>                
                            </div>                            
                            <div>                                
                                <div className='blue__box'>
                                    
                                        {activeShareholder=="2021" && 
                                        <ul>                                        
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner1.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner2.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner3.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner4.png" />
                                            </li>                                            
                                        </ul>
                                        }
                                        {activeShareholder=="2020" && 
                                        <ul>                                        
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner1.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner2.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner3.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner4.png" />
                                            </li>                                            
                                        </ul>
                                        }
                                        {activeShareholder=="2019" && 
                                        <ul>                                        
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner1.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner2.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner3.png" />
                                            </li>                                            
                                        </ul>
                                        }
                                        {activeShareholder=="2018" && 
                                        <ul>                                        
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner1.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner5.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner3.png" />
                                            </li>
                                        </ul>
                                        }
                                        {activeShareholder=="2017" && 
                                        <ul>                                        
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner1.png" />
                                            </li>
                                            <li>
                                                <img src="./assets/images/sub/disclosure_partner5.png" />
                                            </li>                                            
                                        </ul>
                                        }
                                        

                                </div>      
                                <div className='text1 right'>
                                    <p>* 한국투자파트너스, 한국성장금융은 벤처캐피탈 투자자로 대주주에 해당되지는 않음</p>                        
                                </div>
                            </div>                            
                        </div>

                        <div className='disclosure__content8'>
                            <div className="disclosure__board__header">
                                <span>웹 취약점 점검 결과</span>                                        
                            </div>                            
                            <div>
                                <div className='text2'>
                                    <p>웹 사이트 대상으로 취약점 점검을 실시했고 아래와 같이 조치하였습니다.</p>                        
                                </div>
                                <table className="fin-table">
                                    <tbody>
                                        <tr>
                                            <td className="center">순서</td>
                                            <td className="center">취약점 항목</td>
                                            <td className="center">취약점 개수</td>
                                            <td className="center">조치 완료</td>
                                        </tr>
                                        <tr>
                                            <td className="center">1</td>
                                            <td className="center" rowSpan="4">웹 영역 내 중요정보 평문 노출 확인</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">2</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">3</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">4</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">5</td>
                                            <td className="center">화면 내 중요정보 평문 노출 확인
                                            </td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">6</td>
                                            <td className="center" rowSpan="2">불충분한 인가 확인</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center">7</td>
                                            <td className="center">1</td>
                                            <td className="center">1</td>
                                        </tr>
                                        <tr>
                                            <td className="center" colSpan="2">총합</td>
                                            <td className="center">7</td>
                                            <td className="center">7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                            
                        </div>

                    </div>
                    
                </div>
            </main>
        </div>
    ) 
  }

export default Disclosure3;
