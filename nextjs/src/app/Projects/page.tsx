'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';
import ProjectData from '../../components/Project/Project';
import SRSProgram from '../../../static/gifs/SRSProgram.gif'
import Assembler from '../../../static/gifs/Assembler.gif'
import WebScraper from '../../../static/gifs/KanshudoScraper.gif'
import UnityGameGIF from '../../../static/gifs/Game.gif'
import GFDiscordGIF from '../../../static/gifs/Bot.gif'
import Title from '../../components/Title/Title';
import {apiURL} from '../../modules/GlobalClientData';
import { Skeleton } from "@/components/ui/skeleton"
import { StaticImageData } from 'next/image';


const localgifs = [
  {key:'Unity', val:UnityGameGIF}, 
  {key:'Scraper', val:WebScraper}, 
  {key:'Assembler', val:Assembler}, 
  {key:'Spaced Repetition', val:SRSProgram}, 
  {key:'Discord', val:GFDiscordGIF}, 
]

function getImage(title:string):StaticImageData | null{
  let val = null;
  localgifs.forEach(x => {
    if (title.includes(x.key))
      val = x.val
  })
  return val;
}

function Projects() {
  const [res, setRes] = useState<ProjectData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = (await fetch(apiURL + "/projects"));
      const data = await result.json();
      let projectDataArr: ProjectData[] = [];
      
      data.forEach((x:any) => {
        let obj = new ProjectData(
          getImage(x.headline),
          x.headline,
          x.language,
          x.description,
          x.projectLink,          
          x.repoLink,          
        );

        projectDataArr.push(obj);
      });

      setRes(projectDataArr);

    }

    fetchData();
  }, []);

  if (res.length===0){
    return (
      <div className={styles.projects}>
        <Title title='PROJECTS'></Title>
        <div className="flex flex-col space-y-3 justify-center align-middle m-28 pl-8">
          <Skeleton className="h-56 w-4/5 rounded-xl bg-zinc-600" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] rounded-xl bg-zinc-600" />
            <Skeleton className="h-4 w-[200px] rounded-xl bg-zinc-600" />
          </div>
        </div>
      </div>
    );
  }
  else return (
    <div className={styles.projects}>
    <Title title='PROJECTS'></Title>
      <ul className={styles.ul}>
      {
        res.map((project) => {
          try{
            return project.RenderProject();
          }catch(err) {
            console.log(project, err);
          }
        })
      }
      </ul>
    </div>
  );
}
  
  export default Projects;
  
