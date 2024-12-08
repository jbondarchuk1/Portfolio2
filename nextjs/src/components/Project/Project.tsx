import Link from 'next/link';
import '../../styles/Project.module.css';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import YouTube from 'react-youtube';

const opts = {
    height: '200',
    width: '400',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

function _onReady(event:any) {
// access to player in all event handlers via event.target
event.target.pauseVideo();
}

class ProjectData{
    public image;
    public videoLink:string|null;
    public headline:string = "";
    public description:string = "";
    public language:string = "";
    public projectLink:string|null = "";
    public repoLink:string = "";

    constructor(image:any, headline:string, language:string, description:string, projectLink:string|null, repoLink:string, videoLink:string|null){
        this.image = image;
        this.videoLink = videoLink;
        this.headline = headline;
        this.description= description;
        this.language= language;
        this.projectLink = projectLink;
        this.repoLink = repoLink;
    }

    public RenderProject() {
        const data:ProjectData = this;
        const getLink = () => {
            console.log(data.projectLink);
            if (data.projectLink === null){
                return
            }else {
                return <Button className='rounded-xl shadow-xl bg-zinc-600 hover:bg-zinc-700' variant="default"> <Link className='inline-block w-full m-auto' href={new URL(data.projectLink)}>Project</Link></Button>
            }
        }

        const getImageOrVideo = () => {
            if (data.videoLink != null){
                return (<div className='flex justify-center align-middle m-auto'><YouTube videoId={data.videoLink} opts={opts} onReady={_onReady} /></div>)
            }
            else return <img className='m-auto' src={data.image.src} height="200" width="400"></img>
            
        }

        return (
            <li className='m-auto' key={'project' + Math.random()}>
                <Card className="m-auto shadow-lg max-w-screen-sm bg-zinc-800 ">
                    <CardHeader className='m-5 text-center'>
                        <CardTitle className='text-2xl'>{data.headline}</CardTitle>
                        <CardDescription className='text-xl'>{data.language}</CardDescription>
                    </CardHeader>
                    <CardContent className=' border p-3 m-2'>
                        {getImageOrVideo()}
                        <Card className='bg-zinc-600 p-1 m-3 shadow-xl'>
                            <CardContent>
                                <h3 className='m-5 text-justify'>{data.description}</h3> {/*Description: */}
                            </CardContent>
                        </Card>


                    </CardContent>
                    <CardFooter className='grid gap-4'>
                        {getLink()}
                        <Button className='shadow-xl bg-zinc-600 hover:bg-zinc-700 rounded-xl' variant="default"> 
                            <Link className='inline-block w-full m-auto' href={data.repoLink}>Code</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </li>
        );
      }
}
  export default ProjectData;