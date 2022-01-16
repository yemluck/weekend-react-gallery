import React from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header'
import '../Header/Header.css'
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    fetchGalleryList();
  }, [])

const [galleryList, setGalleryList] = useState([])

const fetchGalleryList = () => {
  axios.get('/gallery')
        .then(res => {
          setGalleryList(res.data)
        })
          .catch(err => {
            console.log('GET /gallery failed', err);
          })
}


console.log('galleryList', galleryList);


    return (
      <div className="App">
        <Header />
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
