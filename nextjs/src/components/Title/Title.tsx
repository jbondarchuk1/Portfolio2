import {Reveal} from '../Text/Reveal';

export default function Title({title}:{title:string}){
    return (
        <div className='shadow-md h-40 bg-zinc-800 text-center flex items-center text-white text-5xl justify-center'>
            <Reveal text={title} size=''></Reveal>            
            {/* <h1 className='pt-10'>{title}</h1> */}
        </div>
    );
}