import './Comic.scss';
import Image from "next/image";
import { TComicsInfo } from "@/app/ts/types";

const Comic = (props: {comic: TComicsInfo}) => {
    const { title, thumbnail } = props.comic;
    
    return(
        <article className="article__comic">
            <Image 
                width={1000} 
                height={1000} 
                alt={'11'} 
                src={`${thumbnail.path}.${thumbnail.extension}`}
             />
            <span>{title}</span>
        </article>
    )
}

export default Comic;