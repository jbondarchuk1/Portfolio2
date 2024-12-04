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

/* template for data-reference later for index number
  tool: [
  "gif here",
  "name here",
  "language here",
  "sentence here", 
  ["link to project here or null", "is external (bool) or null"], 
  "link to code here"
  ],
*/

const projectData = {

  unityGame: new ProjectData(
    UnityGameGIF,
    "3D Game Made in Unity",
    "C#, Blender, Unity",
    "My in-progress hobby project based on my imagination and Metal Gear Solid. Written in C#, I developed the AI using Finite State Machines, art with blender, and many other features. I understand 3D vector math and raycasting among many other game development skills. Please enter the password-> helloworld to view and download the executable build from itch.io.",
    "https://jbondarchuk.itch.io/momos-nightmare",
    "https://github.com/jbondarchuk1/MomoNightmare"),

  girlFriendDiscordBot: new ProjectData(
    GFDiscordGIF,
    "Alexa Compatible Discord Bot",
    "Nodejs",
    "My girlfriend moved further away and to keep her company I designed a discord bot. It keeps track of the number of days until our next flight, runs Cron job reminders, has data saved and loaded from json, and has an Alexa command that wakes my Alexa and has Alexa say \"Girlfriend needs attention!\", followed by a push notification.",
    null,
    "https://github.com/jbondarchuk1/JCLoveyDovey"),
  srsTool: new ProjectData(
    SRSProgram,
    "Japanese Spaced Repetition Web Application",
    "C#/ASP.NET MVC",
    "Full-featured full-stack system with login, authentication, email verification and authorization. Renders tabular vocabulary data to the client on specified dates as per the spaced repetition algorithm.", 
    null, // for now null, but make sure to link this when we host this project; change to ["https://url.com", true]
    "https://github.com/jbondarchuk1/SRSProgramMultiplayerTrial"),
  webScraper: new ProjectData(
    WebScraper,
    "Kanshudo Web Scraper",
    "Python",
    "Scrapes the user’s currently saved favorites list on Kanshudo (bank of Japanese vocabulary) and inputs them to a spreadsheet via the google sheets API.",
    null,
    "https://github.com/jbondarchuk1/KanshudoScraper"),
  assembler: new ProjectData(
    Assembler,
    "Assembler",
    "Python",
    "Acts as an assembler/parser for bits feeding through a Hack computer CPU. Input: asm assembly language file, output: hack machine language/16 bit binary file.",
    null,
    "https://github.com/jbondarchuk1/Assembler-Project"),
}

function Projects() {
    return (
      <div className={styles.projects}>
      <Title title='PROJECTS'></Title>
        <ul className={styles.ul}>
        {
          Object.entries(projectData).map( project => {
            return(
              project[1].RenderProject()
          )})
        }
        </ul>
      </div>
    );
  }
  
  export default Projects;
  
