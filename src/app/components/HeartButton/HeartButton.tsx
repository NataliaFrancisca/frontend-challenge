'use client'
import './HeartButton.scss';
import { useCharacter } from '../Character/useCharacter';
import { TCharacterBasicInfo } from '@/app/ts/types';

const HeartButton = (props: {character: TCharacterBasicInfo}) => {

    const { isFav, onToggleFavorite } = useCharacter(props.character);
    
    return(
        <label className="label__switch-favorite">
            <input 
                type="checkbox" 
                checked={isFav}
                id="filter-favorites"
                onChange={() => onToggleFavorite()}
            />
            <span className="icon" />
        </label>
    )
}

export default HeartButton;