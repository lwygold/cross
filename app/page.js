import { usePathname } from 'next/navigation';

import Image from 'next/image';

import './pages.css';

export default function Home() {    

  return (
    <div className="main">      
      <main>    
        <video muted autoPlay loop>
            <source src="./assets/images/main/main.mp4" type="video/mp4" />
        </video>
        <div className='inner'>
          <h3>
            변화를 열망하는 사람들이 모여,<br/>
            역사에 남을 만한 변화를 만듭니다.
          </h3>
          <div className='flex1 text1_wrap'>
            <div className='text1'>
                <span>총 누적투자금액</span>
                <p>2조 7천억 원<b>+</b></p>
            </div>
            <div className='text1'>
                <span>대출잔액</span>
                <p>472억 원<b>+</b></p>
            </div>
          </div>
          <div className='flex1 text2_wrap'>
            <div className='text2'>
                <span>상환율</span>
                <p>98.288%</p>
            </div>
            <div className='text2_blank'>
                    <Image src='./assets/images/main/main_line1.svg' width={34} height={94} />
            </div>
            <div className='text2'>
                <span>투자참여 건수</span>
                <p>54만건<b>+</b></p>
            </div>
            <div className='text2_blank'>
                    <Image src='./assets/images/main/main_line1.svg' width={34} height={94} />
            </div>
            <div className='text2'>
                <span>연체율</span>
                <p>1.315%</p>
            </div>
            <div className='text2_blank'>
                    <Image src='./assets/images/main/main_line1.svg' width={34} height={94} />
            </div>
            <div className='text2'>
                <span>부실채권 매각건수</span>
                <p>26건</p>
            </div>
          </div>
          <div className='text3'>
            <p>2023년 08월 22일 현재기준</p>
            <p>총 <b>24,144건</b>의 대출이 실행되고 그 중 20건(0.08%)이 연체되었습니다.</p>
          </div>
        </div>
      </main>         
    </div>
  )
}
