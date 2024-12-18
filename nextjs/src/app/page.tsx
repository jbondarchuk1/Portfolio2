'use client';
import React from 'react';
import styles from '../styles/Home.module.css';
import mainStyles from '../styles/Main.module.css';
import Icons from '../components/IconContainer/Icons';
import Link from 'next/link';
import {Reveal} from '../components/Text/Reveal';
import useIntersectionObserver from '@/modules/IntersectionObserver';


const classForHeader = [
  [styles.titleCss, styles.h1Css, styles.pCss],
  [styles.titleCss2, styles.h1Css2, styles.pCss2]
];

function Home() {
  const { ref: portfolioRef, isIntersecting: isPortfolioVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: otherInfoRef, isIntersecting: isOtherInfoVisible } = useIntersectionObserver({ threshold: 0.1 });
  const { ref: aboutRef, isIntersecting: isAboutVisible } = useIntersectionObserver({ threshold: 0.1 });

    return(
      <div>
          <div className={styles.headerCss}>
            <div className={classForHeader[0][0]}>
              <div className={classForHeader[0][1]}>
                <Reveal text="JASON " size=""></Reveal>
                <Reveal text="BONDARCHUK" size=""></Reveal>
              </div>
              {/* <h1 className={classForHeader[0][1]}>JASON BONDARCHUK</h1><br/><br /> <br /> */}
              <p className={classForHeader[0][2]}>
                  Software Engineer from New York <br />and Master of Science in Computer Science at Johns Hopkins University.<br />
              </p>
          </div>
          <Icons isTop={true}/>
        </div>

        <div className={mainStyles.Main}>
          <div className={mainStyles.section}>
            <div className="p-1 mb-12 mt-6" ref={aboutRef}>
              {isAboutVisible && <Reveal text="ABOUT ME" size=" text-5xl"></Reveal>}
            </div>
            <p id={mainStyles.body1} className=" text-justify">
              I am a software engineer from Long Island and MS in Computer Science at Johns Hopkins University. 
              <br/><br/>I have professional software engineering experience in full-stack development, cloud computing and devops.
              <br/><br/>I have academic background in everything from Data Structures and Algorithms, Machine Learning, DevSecOps, Cloud Computing, Data Engineering (ETL, Map-Reduce, Data Streaming), Object Oriented Analysis and Design, and Software Engineering.
            </p>
          </div>
        </div>
        <div className={" bg-slate-300"}>
          <div className={mainStyles.section}>
          <div className="p-1 mb-12 mt-6" ref={portfolioRef}>
              {isPortfolioVisible && <Reveal text="PORTFOLIO GUIDE" size="text-5xl text-gray-800"></Reveal>}
            </div>
            <p id={mainStyles.body1} className=" text-justify">
              <br/><br/>For a look at a few of my personal projects, please visit the <Link href='/Projects' className='underline hover:text-blue-400'>'Projects'</Link> tab. These are non-exhaustive and do not include confidential projects from previous employment.

              <br/><br/>For a look at my current resume, please visit the <Link href='/Resume' className='underline hover:text-blue-400'>'Resume'</Link> tab.

              <br/><br/>To send an email to me, either send to <Link href='mailto:jason.r.bondarchuk@gmail.com' className='underline hover:text-blue-400'>jason.r.bondarchuk@gmail.com</Link> or click the <Link href='/Contact' className='underline hover:text-blue-400'>'Contact'</Link> link to send one through this web application.
            </p>
          </div>
        </div>
        <div className={mainStyles.Main}>
          <div className={mainStyles.section + " flex items-center justify-center flex-col text-center"}>
            <div className="p-1 mb-12 mt-6" ref={otherInfoRef}>
              {isOtherInfoVisible && <Reveal text="OTHER INFO" size="text-5xl"></Reveal>}
            </div>
            <p id={mainStyles.body1} >
              <br/>I am located in New York State but willing to relocate.
              <br/><br/>I am open to remote, hybrid and in-person positions.
              <br/><br/>I am a US citizen, able to receive security clearance <strong><em>after</em></strong> employment if necessary.
            </p>
          </div>
        </div>

      </div>
      );
  }
  
  
  export default Home;
