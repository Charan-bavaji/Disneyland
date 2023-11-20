import React from 'react';
import ImgSlider from './ImgSlider';
import NavBar from './NavBar';
import Viewers from './Viewers';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from 'firebase/firestore';
const Home = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'movies'));
                let recommends = [];
                let newDisneys = [];
                let originals = [];
                let trending = [];

                snapshot.forEach((doc) => {
                    switch (doc.data().type) {
                        case 'recommend':
                            recommends = [...recommends, { id: doc.id, ...doc.data() }];
                            break;

                        case 'new':
                            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                            break;

                        case 'original':
                            originals = [...originals, { id: doc.id, ...doc.data() }];
                            break;

                        case 'trending':
                            trending = [...trending, { id: doc.id, ...doc.data() }];
                            break;
                    }
                });

                dispatch(
                    setMovies({
                        recommend: recommends,
                        newDisney: newDisneys,
                        original: originals,
                        trending: trending,
                    })
                );
            } catch (error) {
                console.error('Error fetching data from Firestore:', error);
            }
        };
        fetchData();
    }, [userName]);

    return (
        <section className=' bg-[url("/src/assets/images/home-background.png")] w-auto h-auto bg-cover bg-repeat-y'>
            <NavBar />
            <ImgSlider />
            <Viewers />
        </section>
    )
}

export default Home;