import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Home(){
    const irPara= useNavigate();
    const handleClick = () => {
      irPara('/');
    };
  return(
    <Header/>
  )
}