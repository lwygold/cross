"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Scroll from "./scroll";

import './Header.css';



const Header = () =>  { 
    
    const linkName = usePathname();    
    const isMainPage = linkName === '/'; // 메인 페이지 경로에 따라 조정

    const logoImage = isMainPage ? './assets/images/main/main_logo1.svg' : './assets/images/sub/sub_logo1.svg';        
    
    return (    
        <header className={ isMainPage ? 'main ' : 'sub' }>
            <Scroll/>
            <div className="inner">
                <div>
                    <div className='logo'>    
                        <Link href="/">            
                            <img src={ logoImage } alt="로고이미지" />
                        </Link>
                    </div>
                    <ul>
                        <li className={ linkName === '/invest' ? 'active' : '' }>
                            <Link href="/invest">
                                <span className="">투자</span>
                            </Link>
                        </li>  
                        <li className={ linkName === '/account' ? 'active' : '' }>
                            <Link href="/account">
                                <span className="">My account</span>
                            </Link>
                        </li> 
                    </ul>                    
                </div>
                
                <ul>
                    <li className={ linkName === '/disclosure' ? 'active' : ''}>
                        <Link href="/disclosure">
                            <span className="">공시자료</span>
                        </Link>
                    </li>  
                    <li className={ linkName === '/about' ? 'active' : ''}>
                        <Link href="/about">
                            <span className="">회사소개</span>
                        </Link>
                    </li>  
                    <li className={ linkName === '/support' ? 'active' : ''}>
                        <Link href="/support">
                            <span className="">고객지원</span>
                        </Link>
                    </li>  
                    <li className={ linkName === '/loan' ? 'active' : ''}>
                        <Link href="/loan">
                            <span className="">대출</span>
                        </Link>
                    </li>  
                    <li className={ linkName === '/login' ? 'active' : '' }>
                        <Link href="/login">
                            <span className="">로그인</span>
                        </Link>
                    </li>  
                </ul>
            </div>
        </header>  
    ) 
  }

export default Header;
