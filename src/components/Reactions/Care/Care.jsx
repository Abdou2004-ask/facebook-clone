import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import './Care.scss';



const Care = ({ zIndex, setUserReaction, setGiveReaction }) => {
    return (
        <div 
            className='reaction care-reaction' 
            style={{ zIndex }}
            onClick={ () => {
                setGiveReaction(false);
                setUserReaction('care');
            }}
        >
            <div className="body">
                <div className="face">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="mouth"></div>
                </div>
                <AiFillHeart size={ 13 } className='heart' />
            </div>
        </div>
    );
};

export default Care;