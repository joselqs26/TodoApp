import React from 'react'

import { Hero } from "../components/Hero";
import { Navbar } from '../components/Navbar';

import "../styles/index.css";
import "../styles/Description.css";

const Description = () => {
  return (
    <div className='Description'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Description;