import React, { useState } from 'react';
import { data } from './data';
import './App.css';
import { Filter } from './component/Filter/Filter';
import { Header } from './component/Header/Header';
import { Footer } from './component/Footer/Footer';


export const App = () => {

   //HOOK
  const [Movies, setMovies] = useState(data)


  //APP
  return (
    <section className="app">
      <Header />
      <Filter movies={Movies} />
      <Footer />
    </section>
  )
}
