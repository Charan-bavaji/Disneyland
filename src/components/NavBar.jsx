import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import disLogo from '../assets/images/logo.svg';
import { homeIcon, movieIcon, searchIcon, watchIcon, originals, series } from '../assets/images';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from "../features/user/userSlice";

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            // console.log(result.user.photoURL, result.user.displayName);
        } catch (error) {
            console.error("Google sign-in error:", error);
            alert(error.message);
        }
    };
    const signOut = () => {
        try {
            if (userName) {
                auth.signOut().then(() => {
                    dispatch(setSignOutState());
                    navigate("/");
                })
            }
        } catch (err) {
            alert(err.message);
        }
    }
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate('/home');
            }
        });
    }, [userName]);

    const imges = [{
        name: "home",
        img: homeIcon,
    }, {
        name: "movie",
        img: movieIcon,
    }, {
        name: "search",
        img: searchIcon,
    }, {
        name: "watch",
        img: watchIcon,
    }, {
        name: "originals",
        img: originals,
    }, {
        name: "series",
        img: series,
    }
    ]

    return (
        <div className=' fixed w-full h-20 flex justify-between z-50 backdrop-blur-md '>
            <div className='w-[8rem] h-20 z-1  flex justify-center items-center'>
                <img src={disLogo} alt='img' className="w-20 relative" />
            </div>
            {
                !userName ? <div className='w-28 h-20 z-1 flex justify-center items-center'>
                    {/* <Link to={"/home"}> */}
                    <button
                        onClick={signInWithGoogle}
                        className="border-solid border-2 border-white-500 py-1 px-3 rounded-md hover:text-black hover:bg-white ">Login</button>
                    {/* </Link> */}
                </div> : <>
                    <div className="w-full flex justify-between items-center">
                        <section className='flex '>
                            {imges.map((item, index) => (
                                <div className="h-20 flex justify-center items-center" key={index}>
                                    <div className="w-full h-20 px-4 flex justify-center items-center flex-row hover:cursor-pointer ">
                                        <img src={item.img} alt={item.name} className="w-6" />
                                        <span className="relative top-0.5 tracking-[2px] text-sm hover:border-b-2 border-white transition-[all 250ms]">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </section>
                        <section className=' group flex justify-end items-center w-auto h-auto overflow-hidden mx-6 '>
                            <img src={userPhoto} alt='userPhoto' width={50} height={50} className='rounded-full' />
                            <span onClick={signOut} className='hidden absolute top-[4rem] right-4 w-auto h-auto z-20 bg-[#080a12] p-1 rounded-md tracking-[0.1rem] text-sm border-1 border-slate-400 group-hover:flex cursor-pointer'>sign out</span>
                        </section>
                    </div>
                </>
            }
        </div>
    )
}

export default NavBar;