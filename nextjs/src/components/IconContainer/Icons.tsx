
import React from 'react';
import Link from 'next/link';
import email from '../../../static/icons/email_transparent.png'
import github from '../../../static/icons/github_transparent.png'
import medium from '../../../static/icons/medium_transparent.png'
import linkedin from '../../../static/icons/linkedin_transparent.png'
import styles from '../../styles/Icons.module.css';


const icons = [
    [github, 'https://github.com/jbondarchuk1'],
    [medium, 'https://jason-r-bondarchuk.medium.com/'],
    [linkedin, 'https://www.linkedin.com/in/jason-bondarchuk-8457921ba/']
]

export default function Icons({isTop}:{isTop:boolean}) {
    const iconsCss = isTop ? styles.iconsCssTop: styles.iconsCssBottom;

    return (
      <div className={iconsCss}>
        <ul>
          <li>
            <Link href="/Contact">
                <img className='shadow-md rounded-full' src={email.src} />
            </Link>
          </li>
            {icons.map((arr:any, index) => {
                return (
                    <li key={index}  >
                        <Link href={arr[1]}><img className='shadow-md  rounded-full' src={arr[0].src}></img></Link>
                    </li>
                );
            })}
        </ul>
      </div>
    );
  }
