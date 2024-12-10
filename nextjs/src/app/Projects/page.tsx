'use client';

import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Link from 'next/link';
import styles from '../../styles/Projects.module.css';
import ProjectData from '../../components/Project/Project';
import SRSProgram from '../../../static/gifs/SRSProgram.gif'
import Assembler from '../../../static/gifs/Assembler.gif'
import WebScraper from '../../../static/gifs/KanshudoScraper.gif'
import UnityGameGIF from '../../../static/gifs/Game.gif'
import GFDiscordGIF from '../../../static/gifs/Bot.gif'
import Title from '../../components/Title/Title';
import {apiURL, headers} from '../../modules/GlobalClientData';
import { Skeleton } from "@/components/ui/skeleton"
import { StaticImageData } from 'next/image';


const localgifs = [
  {key:'Unity', val:UnityGameGIF, link:"_J1CinOQ_Eo"}, 
  {key:'Microservices', val:UnityGameGIF, link:"V8oaUuuZ1OU"}, 
  {key:'Neural', link:"HJXHXMfGAOs"},
  {key:'Scraper', val:WebScraper, link:null}, 
  {key:'Assembler', val:Assembler, link:null}, 
  {key:'Spaced Repetition', val:SRSProgram, link:null}, 
  {key:'Discord', val:GFDiscordGIF, link:null}, 
]

function getImage(title:string):StaticImageData | null{
  let val = null;
  localgifs.forEach(x => {
    if (title.includes(x.key))
      val = x.val
  })
  return val;
}

function getVideo(title:string):string | null{
  let link = null;
  localgifs.forEach(x => {
    if (title.includes(x.key))
      link = x.link
  })
  return link;
}


function Projects() {
  const [res, setRes] = useState<ProjectData[]>([]);

  useEffect(() => {
    async function fetchData() {
      console.log("FETCHING");
      const result = (await fetch(apiURL + "/projects", {headers:headers}));
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
          getVideo(x.headline)         
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
  
