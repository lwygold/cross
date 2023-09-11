import '@styles/globals.css';
import '@styles/account.css';
import '@styles/invest.css';

import Link from 'next/link';
import Header from '@components/Header/Header.js'
import Footer from '@components/Footer/Footer.js'


export const metadata = {
  title: 'KROSS',
  description: 'KROSS HOMEPAGE',
}

export default function RootLayout({ children }) {


  return (
    <html>      
      <body>        
        <Header />        
        {children}        
        <Footer />   
      </body>
    </html>
  )
}
