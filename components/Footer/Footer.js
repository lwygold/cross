"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Footer.css';


function Footer() {    
    return (    
        <footer>
            <div className="inner">                
                <h3>
                    <span><b>(주)</b>크로스파이낸스코리아</span>
                    <i></i>
                </h3>                
                <div className="flex1">
                    <div>
                        <div>
                            <span>대표이사 : 곽기웅</span>
                            <span className="blank"><img src="./assets/images/common/footer_line1.svg"></img></span>
                            <span>사업자등록번호 : 849-86-00603</span>
                            <span className="blank"><img src="./assets/images/common/footer_line1.svg"></img></span>
                            <span>온라인투자연계금융업 등록번호 : 2021-38</span>                       
                        </div>
                        <div>
                            <span>통신판매업신고 :  제2020-서울영등포-3741호</span>
                            <span className="blank"><img src="./assets/images/common/footer_line1.svg"></img></span>
                            <span>주소 : 서울특별시 영등포구 여의나루로71, 동화빌딩 9층</span>
                        </div>
                        <div>
                            <span>고객센터 : 1599-9860 [평일 09-17시 / 점심 11시-12시]</span>
                            <span className="blank"><img src="./assets/images/common/footer_line1.svg"></img></span>
                            <span>이메일 : cs@kross.kr</span>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href="/privacy">
                                    <span className="">개인정보처리방침</span>
                                </Link>
                            </li>  
                            <li>
                                <Link href="/basic_terms">
                                    <span className="">전자금융거래 기본약관</span>
                                </Link>
                            </li> 
                            <li>
                                <Link href="/investment_terms">
                                    <span className="">온라인연계투자약관</span>
                                </Link>
                            </li> 
                            <li>
                                <Link href="/credit_information">
                                    <span className="">신용정보 활용체제</span>
                                </Link>
                            </li> 
                            <li>
                                <Link href="/loan_terms">
                                    <span className="">온라인연계대출약관</span>
                                </Link>
                            </li> 
                            <li>
                                <Link href="/invest">
                                    <span className="">공지사항</span>
                                </Link>
                            </li> 
                        </ul>   
                    </div>
                </div>
                <div className="flex1 flex-end">
                    <div>
                        <h4>예치기관</h4>  
                        <div>
                            <div>
                                <span>웰컴저축은행(주)</span>
                                <span className='blank'><img src="./assets/images/common/footer_line1.svg"></img></span>
                                <span>사업자등록번호 : 120-87-93876</span>
                                <span className='blank'><img src="./assets/images/common/footer_line1.svg"></img></span>
                                <span>전화번호 : 02-838-2001</span>
                            </div>
                            <div>                            
                                <span>주소 : 서울시 구로구 디지털로 300 지밸리비즈플라자 5층</span>                            
                            </div>
                        </div>
                    </div>
                    <div>                        
                        <p>© 2023.<b>KROSS Finance Korea</b> All rights reserved.</p>                        
                    </div>
                </div>
            </div>
        </footer>  
    ) 
  }

export default Footer;
