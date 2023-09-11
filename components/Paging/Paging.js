"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';



import './Paging.css';

const Paging = () =>  { 
        
    
    return (    
        <div className="paging type1">
            <Link href="/">
                <img src="./assets/images/sub/paging_arrf.svg" />
            </Link>            
            <Link href="/" className='paging__prev'>
                <img src="./assets/images/sub/paging_arrp.svg" />
            </Link>            
            <Link href="/" className='active'>
                <span>1</span>
            </Link>            
            <Link href="/">
                <span>2</span>
            </Link>            
            <Link href="/">
                <span>3</span>
            </Link>            
            <Link href="/">
                <span>4</span>
            </Link>            
            <Link href="/">
                <span>5</span>
            </Link>            
            <Link href="/" className='paging__next'>
                <img src="./assets/images/sub/paging_arrn.svg" />
            </Link>            
            <Link href="/">
                <img src="./assets/images/sub/paging_arrl.svg" />
            </Link>            
        </div>
    ) 
  }

export default Paging;
