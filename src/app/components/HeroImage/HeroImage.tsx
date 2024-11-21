import { THeroImage } from '@/app/ts/types';
import './HeroImage.scss';
import Image from "next/image"

const HeroImage = (props: {heroImage: THeroImage}) => {

    const { hero, comics } = props.heroImage;

    return(
        <section className="section__hero-image">
            <Image 
                width={1000} 
                height={1000} 
                alt={hero.name} 
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} 
            />

            <div className='div__comics-img'>
                {comics.map((comic, index) => (
                    <Image 
                        key={index}
                        width={1000} 
                        height={1000} 
                        alt={hero.name} 
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroImage;