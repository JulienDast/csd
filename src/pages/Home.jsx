import React from 'react';
import { Button } from "@material-tailwind/react";
import HeroImg from '../assets/images/hero.png'
import { PlayIcon } from '@heroicons/react/20/solid';
import MapImg from '../assets/images/rayon.png';
import HomePic from '../assets/images/home.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='w-11/12 lg:w-full flex flex-col justify-center items-center my-10'>
      <img className='rounded-2xl border-4 border-green-200' src={HeroImg} alt="Logo présentation Christophe Sabine Désisectisation" />
      <div className="flex items-center mx-auto mt-10">
        <Link to='/contact' className='hover:decoration-3 hover:decoration-white ease-in-out underline-offset-4'>
          <Button size='lg' className='flex flex-col items-center text-center text-xl p-10 bg-green-200 hover:underline'>Besoin de mes services aux alentours de Noyelles-sur-Mer ?
            <PlayIcon className='w-5 h-5 mr-5'/>
          </Button>
        </Link>
      </div>
      <div id='actions' className='flex flex-col xl:flex-row items-center gap-6 mt-10'>
        <div className="location">
          <img className="h-96 rounded-2xl" src={MapImg} alt="Carte du champ d'action"/>
        </div>
        <div className="bugs rounded-2xl bg-amber-50 border-4 border-green-200 p-10 text-center text-xl">
          <ul>
            <li>Destruction de nids de guêpes</li>
            <li>***</li>
            <li>Élimination de frelons européens et asiatiques</li>
            <li>***</li>
            <li>Récupération d'essaims d'abeilles</li>
            <li>***</li>
            <li>Traitement contre les puces, les fourmis et les mouches</li>
            <li>***</li>
            <li>Dératisation et éradication des chenilles porcessionnaires</li>
          </ul>
        </div>
        <div className="pic">
          <img className="rounded-2xl" src={HomePic} alt="Photo Christophe Sabine Désinsectisation"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
