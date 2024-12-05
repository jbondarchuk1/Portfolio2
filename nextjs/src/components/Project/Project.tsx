import Link from 'next/link';
import '../../styles/Project.module.css';
import { Url } from 'next/dist/shared/lib/router/router';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

class ProjectData{
    public image;
    public headline:string = "";
    public description:string = "";
    public language:string = "";
    public projectLink:string|null = "";
    public repoLink:string = "";

    constructor(image:any, headline:string, language:string, description:string, projectLink:string|null, repoLink:string){
        this.image = image;
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
        return (
            <li className='m-auto' key={'project' + Math.random()}>
                <Card className="m-auto shadow-lg max-w-screen-sm bg-zinc-800 ">
                    <CardHeader className='m-5 text-center'>
                        <CardTitle className='text-2xl'>{data.headline}</CardTitle>
                        <CardDescription className='text-xl'>{data.language}</CardDescription>
                    </CardHeader>
                    <CardContent className=' border p-3 m-2'>
                        <img className='m-auto' src={data.image.src} height="200" width="400"></img>
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