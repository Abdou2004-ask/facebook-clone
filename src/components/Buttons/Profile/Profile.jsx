import { IoSettingsSharp, IoLogOut } from 'react-icons/io5';
import { BsChevronRight } from 'react-icons/bs';
import { BsFillQuestionCircleFill, BsFillMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { signOut, deleteUser } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';

import './Profile.scss';
import images from '../../../constants/images';
import { auth, db } from '../../../config/firebase';
import { useAuth } from '../../../context/AuthContext';



const Profile = () => {
    const { user } = useAuth();

    const handleUserLogOut = () => {
        signOut(auth)
            .then(() => {
                deleteDoc(doc(db, "users", user.uid))
                    .then(() => console.log('Log out successfully'))
                    .catch((error) => console.log('Error while deleting from firestore', error));
            })
            .catch((error) => console.log('Error while signing out', error));
    };

    return (
        <div className='profile-container'>
            <div className='profiles'>
                <Link to='/home' className='header'>
                    <img 
                        className='image'
                        alt={ user.displayName ? user.displayName : 'user' }
                        src={ !user.photoURL ? images.user_1 : user.photoURL }
                    />
                    <p>{ user.displayName ? user.displayName : 'User' }</p>
                </Link>
                <div className='line' />
                <button>Voir tous les profiles</button>
            </div>
            
            <div className='parameters'>
                <div className='param'>
                    <div className='icon'>
                        <IoSettingsSharp size={ 20 } />
                    </div>
                    <p>Paramètres et confidentialité</p>
                    <BsChevronRight className='chevron' size={ 22 } />
                </div>
                <div className='param'>
                    <div className='icon'>
                        <BsFillQuestionCircleFill size={ 18 } />
                    </div>
                    <p>Aide et assistance</p>
                    <BsChevronRight className='chevron' size={ 22 } />
                </div>
                <div className='param'>
                    <div className='icon'>
                        <BsFillMoonFill size={ 20 } />
                    </div>
                    <p>Affichage et accessibilité</p>
                    <BsChevronRight className='chevron' size={ 22 } />
                </div>
                <div 
                    className='param logout'
                    onClick={ handleUserLogOut }
                >
                    <div className='icon'>
                        <IoLogOut size={ 22 } />
                    </div>
                    <p>Se déconnecter</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;