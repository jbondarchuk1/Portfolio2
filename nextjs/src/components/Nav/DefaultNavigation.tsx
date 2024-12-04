'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navigation.module.css';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

// me just messing around with state
const scrollClasses = [
  [styles.nav, styles.listContainer, styles.list1, styles.list2], 
  [styles.nav + " " + styles.onScroll, styles.scrollListContainer, styles.scrollList1, styles.scrollList2]
]

// make the href route to the main page
function Navigation() {

  const [navStyle, setNavStyle] = useState(0);
  
  const handleScroll = () => { 
    if (window.scrollY > 0){
      setNavStyle(1)
    }
    else{
      setNavStyle(0);
    }
}

  useEffect(() =>{
    handleScroll();
    window.addEventListener('scroll', handleScroll)
  }, [navStyle]);



    return (


      
      <nav className={scrollClasses[navStyle][0]}>
        <div className={scrollClasses[0][1]}>
            <ul className={scrollClasses[navStyle][2]}>
                <li ><Link href='/'>Jason Bondarchuk</Link></li>
                <li ><Link href='/Resume'>Resum&eacute;</Link></li>
                <li ><Link href='/Projects'>Projects</Link></li>
            </ul>

            <ul className={scrollClasses[navStyle][3]}>
                <li ><Link href='/Contact'>Contact</Link></li>
            </ul>
        </div>
      </nav>
    )
  }
  
  export default Navigation;
