import React from 'react';
import Hero from '../components/HomePage/Hero';
import TrendingMenu from '../components/HomePage/TrendingMenu';
import Categorie from '../components/HomePage/Categorie';
import BackImgAdd from '../components/HomePage/BackImgAdd';
import MenuShop from '../components/HomePage/MenuShop';
import FreeShipping from '../components/FreeShipping';

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <Categorie></Categorie>
        <TrendingMenu></TrendingMenu>
        <BackImgAdd></BackImgAdd>
        <MenuShop></MenuShop>
        <FreeShipping></FreeShipping>
        </>
    );
};

export default Home;