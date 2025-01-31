import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Itens from '../components/Produtos';

export default function Home(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/');
    };
  return(
    <>
      <Header/>
      <Itens />
      <Footer/>
    </>
  )
}