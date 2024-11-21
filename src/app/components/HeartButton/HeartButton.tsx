'use client'
import './HeartButton.scss';
import { TCharacterBasicInfo } from '@/app/ts/types';
import { useHeartButton } from './useHeartButton';

const HeartButton = (props: {character: TCharacterBasicInfo}) => {

    const { isFav, onToggleFavorite } = useHeartButton(props.character);
    
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