import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/');
    };
  return(
    <>
      <Header/>
      <Footer/>
    </>
  )
}