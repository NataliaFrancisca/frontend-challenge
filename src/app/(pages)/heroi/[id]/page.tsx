import './Heroi.scss';
import Image from 'next/image';

import Loader from '@/app/components/Loader/Loader';
import HeartButton from '@/app/components/HeartButton/HeartButton';
import Comics from '@/app/components/Comics/Comics';
import HeroImage from '@/app/components/HeroImage/HeroImage';

import { fetchCharacterById, fetchCharacterComics } from "@/app/functions/fetchCharacter";
import { TCharacterFullInfo, TComicsInfo } from '@/app/ts/types';
import { getDateFormated } from '@/app/utils/formatDate';

const Page = async({ params }: { params: { id: string } }) => {

    const response = await fetchCharacterById(+params.id);
    const comicsResponse = await fetchCharacterComics(+params.id);

    if(!response.results && !comicsResponse.results){
        <main className="main__hero">
            <Loader />
        </main>
    }

    const { name, description, comics, series, thumbnail } = response.results[0] as TCharacterFullInfo;

    const getDateLastRelease = () => {
        if(!comicsResponse.results?.length) return null;

        const lastRelease = comicsResponse.results.at(-1) as TComicsInfo | undefined;
        if(!lastRelease) return null;

        const onSaleDate = lastRelease.dates?.find(date => date.type === "onsaleDate")?.date;
        return onSaleDate ? getDateFormated(onSaleDate) : null;
    };


    return (
        <main className="main__hero">
            <h1 className='h1__background-name'>{name}</h1>

            <menu className='menu__search'>
                <Image src={"/images/logo/logo.svg"} height={50} width={100} alt="logo marvel"/>
            </menu>

            <header className='header__main-info'>
                <section className='section__main-info'>
                    <div className='div__basic-info'>
                        <h1>{name}</h1>
                        <HeartButton character={response.results[0]} />
                    </div>

                    <p className='p__description'>{description}</p>

                    <div className='div__medias-info'>
                        <article className='article__media-info'>
                            <h2>Quadrinhos</h2>
                            <span>
                                <Image width={30} height={30} alt='quadrinhos' src="/icon/book/book.svg" />
                                {comics.available.toLocaleString('pt-BR')}
                            </span>
                        </article>

                        <article className='article__media-info'>
                            <h2>Filmes</h2>
                            <span>
                                <Image width={30} height={30} alt='video' src="/icon/video/video.svg" />
                                {series.available.toLocaleString('pt-BR')}
                            </span>
                        </article>
                    </div>

                    <div className='div__media-rating'>
                        <h2>Rating:</h2>
                        <span>
                            <Image width={20} height={20} alt='video' src="/icon/review/heart-color.svg" />
                            <Image width={20} height={20} alt='video' src="/icon/review/heart-color.svg" />
                            <Image width={20} height={20} alt='video' src="/icon/review/heart-color.svg" />
                            <Image width={20} height={20} alt='video' src="/icon/review/heart-color.svg" />
                            <Image width={20} height={20} alt='video' src="/icon/review/heart-color.svg" />
                        </span>
                    </div>

                    <div className='div__media-last-release'>
                        <h2>Último Quadrinho:</h2>
                        <span>
                           {getDateLastRelease()}
                        </span>
                    </div>

                </section>

                <HeroImage heroImage={{
                    hero: {
                        name: name,
                        thumbnail: thumbnail
                    },
                    comics: comicsResponse.results.slice(0, 3)
                }}/>
            </header>    

            
            {comicsResponse.results.length > 0 && <Comics comics={comicsResponse.results} /> }

            <footer></footer>
        </main>
      );
}

export default Page;
