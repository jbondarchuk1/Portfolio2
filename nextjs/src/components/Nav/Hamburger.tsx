'use client';

import React, { useState, useEffect } from 'react';
import  Link  from 'next/link';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function Hamburger(props:any) {

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='z-50 opacity-70 fixed m-5 p-5 bg-white shadow-xl rounded-xl hover:opacity-100'>Menu</DropdownMenuTrigger>
                    <DropdownMenuContent className='z-30 ml-5 bg-white shadow-xl rounded-xl cursor-pointer'>
                        <DropdownMenuLabel><Link href='/' id='NavLink'>Jason Bondarchuk</Link></DropdownMenuLabel>
                        <DropdownMenuSeparator className='bg-slate-200' />
                        <div className="rounded-xl hover:bg-slate-100">
                            <DropdownMenuItem><Link href='/Resume' id='NavLink'>Resum&eacute;</Link></DropdownMenuItem>
                        </div>
                        <DropdownMenuSeparator className='bg-slate-200' />
                        <div className="rounded-xl hover:bg-slate-100">
                            <DropdownMenuItem ><Link href='/Projects' id='NavLink'>Projects</Link></DropdownMenuItem>
                        </div>
                        <DropdownMenuSeparator className='bg-slate-200' />
                        <div className="rounded-xl hover:bg-slate-100">
                            <DropdownMenuItem ><Link href='/Contact' id='NavLink'>Contact</Link></DropdownMenuItem>
                       </div>
                    </DropdownMenuContent>

            </DropdownMenu>
            <div className="children">
                {props.children}
            </div>
            
        </div>
    );
  }
  
  export default Hamburger;
