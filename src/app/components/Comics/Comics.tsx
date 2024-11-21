import "./Comics.scss";
import { TComicsInfo } from "@/app/ts/types";
import Comic from "../Comic/Comic";

const Comics = (props: {comics: TComicsInfo[]}) => {
    return(
        <section className="section__comics">
            <h1>Últimos Lançamentos</h1>

            <section className="section__grid-comics">
                {props.comics.reverse().map((comic) => (
                  <Comic comic={comic} key={comic.id} />
                ))}
            </section>
        </section>
    )
}

export default Comics;