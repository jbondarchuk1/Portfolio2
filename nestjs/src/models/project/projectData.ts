
/**
 * ProjectData is analagous to the ProjectData class in the NextJS project.
 * The projectLink property is optional.
 */
export default class ProjectData{
    public headline:string = "";
    public language:string = "";
    public description:string = "";
    public repoLink:string = "";
    public projectLink:string | null = "";

    constructor(headline:string, language:string, description:string, repoLink:string,projectLink:string){
        this.headline=headline;
        this.language=language;
        this.description=description;
        this.repoLink=repoLink;
        this.projectLink=projectLink;
    }
}

// the following is a hard-coded list of projects.
// why include a database if these are hard-coded? I feel it is important to show the separation of a 3 tier architecture
// This project would then be scalable so long as I migrate to a 
// different database and break the 2 projects into separate servers with load balancing/auto-scaling
export const projectData = {
  portfolio: new ProjectData(
    "Full-Stack Microservices Portfolio with (DevOps and Cloud Infrastructure)",
    "NextJS (Tailwind/ShadCN), NestJS (NodeJS and Jest), Docker, Low Level Cloud Infrastructure",
    "The site you are on right now is developed as a full-stack 3 tier end to end project with CI/CD. Please have a look around and watch the video for more information.",
    "https://app.jasonbondarchuk.tech",
    "https://github.com/jbondarchuk1/Portfolio2"),

    unityGame: new ProjectData(
      "3D Game Made in Unity",
      "C#, Blender, Unity",
      "My in-progress hobby project based on my imagination and Metal Gear Solid. Written in C#, I developed the AI using Finite State Machines and Behavior Trees, art with blender, and many other features. I understand 3D vector math and raycasting among many other game development skills. Please enter the password-> helloworld to view and download the (outdated) executable build from itch.io.",
      "https://jbondarchuk.itch.io/momos-nightmare",
      "https://github.com/jbondarchuk1/MomoNightmare"),
  
    girlFriendDiscordBot: new ProjectData(
      "Alexa Compatible Discord Bot",
      "Nodejs",
      "My girlfriend moved further away and to keep her company I designed a discord bot. It keeps track of the number of days until our next flight, runs Cron job reminders, has data saved and loaded from json, and has an Alexa command that wakes my Alexa and has Alexa say \"Girlfriend needs attention!\", followed by a push notification.",
      null,
      "https://github.com/jbondarchuk1/JCLoveyDovey"),

    neuralNet: new ProjectData(
      "Neural Network From Scratch",
      "C#",
      "This was a graduate school course project for Principles of Machine Learning. The project was to implement several neural networks from scratch, from single layer perceptrons, multilayer, and a multilayer network with an auto-encoder.",
      null,
      "https://github.com/jbondarchuk1/Intro-to-Machine-Learning"),

    webScraper: new ProjectData(
      "Kanshudo Web Scraper",
      "Python",
      "Scrapes the user’s currently saved favorites list on Kanshudo (bank of Japanese vocabulary) and inputs them to a spreadsheet via the google sheets API.",
      null,
      "https://github.com/jbondarchuk1/KanshudoScraper"),
  }