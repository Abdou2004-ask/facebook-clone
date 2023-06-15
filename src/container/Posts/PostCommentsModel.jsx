import React, { useState, useRef } from 'react';
import { CgClose } from 'react-icons/cg';

import './PostCommentsModel.scss';
import Post from './Post';
import images from '../../constants/images';



const PostCommentsModel = ({ post, setViewPostCommentsModel }) => {
    const [comment, setComment] = useState('');
    const commentInputRef = useRef(null);

    const handleCommentChange = (e) => {
        setComment(e.target.value);

        autoResize(commentInputRef);
    };

    const autoResize = (item) => {
        const current = item.current;
        current.style.height = 'auto';
        current.style.height = `${ current.scrollHeight }px`;
    };

    return (
        <div className='post-comments-model'>
            <div className='post-comments-model__container'>
                <div 
                    className='post-comments-model__container__close'
                    onClick={ () => setViewPostCommentsModel(false) }
                >
                    <CgClose size={ 26 } />
                </div>
                <h2 className='post-owner'>{ `Publication de ${ post.name }` }</h2>
                <div className='post-comment-group'>
                    <Post 
                        post={ post } 
                        inTheComments={ true }
                    />
                    <div className='comments-group'>
                        <p>comment</p>
                        <p>comment</p>
                        <p>comment</p>
                        <p>comment</p>
                    </div>
                </div>
                <div className='add-new-comment'>
                    <div className='add-new-comment__wrapper'>
                        <div className='add-new-comment__wrapper__user-profile'>
                            <img src={ images.user_1 } alt="user profile" />
                        </div>
                        <div className='add-new-comment__wrapper__input'>
                            <textarea
                                ref={ commentInputRef }
                                type="text"
                                name='comment'
                                value={ comment }
                                placeholder='Ecrivez un commentaire...'
                                onChange={ handleCommentChange }
                                required
                            >
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostCommentsModel;