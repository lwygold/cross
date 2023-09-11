"use client";

import Link from 'next/link';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Board8 from '@components/Board8/Board8.js';

import '@styles/disclosure.css';

function Disclosure2() {    

    const linkName = usePathname();    

    // const [activeMonth, setActiveMonth] = useState(0);    
    // const [activeTax, setActiveTax] = useState(0);    

    const [activeMonth, setActiveMonth] = useState('1개월');

    const monthButtonClick = (duration) => {
        setActiveMonth(duration);
    };

    const [activeTax, setActiveTax] = useState('세전');

    const taxButtonClick = (duration) => {
        setActiveTax(duration);
    };
  
    
    return (    
        <div className="sub account">            
            <main>                
                <div className='inner'>     
                    <div className='account__header'>
                        <ul className='common__tab type1'>
                            <li className={ linkName === '/disclosure' ? 'active' : '' }>
                                <Link href="/disclosure1">
                                    결산공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure1' ? 'active' : '' }>
                                <Link href="/disclosure1">
                                    월간공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure2' ? 'active' : '' }>
                                <Link href="#">
                                    수시공시
                                </Link>
                            </li>
                            <li className={ linkName === '/disclosure3' ? 'active' : '' }>  
                                <Link href="/disclosure3">
                                    기타공시
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='disclosure__board1'>
                        <Board8 />
                    </div>     
                </div>
            </main>
        </div>
    ) 
  }

export default Disclosure2;
