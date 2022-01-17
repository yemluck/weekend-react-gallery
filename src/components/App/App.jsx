import React from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header'
import '../Header/Header.css'
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList'

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

  const updateLikes = (id, galleryItem) => {
    console.log('in updateLikes', id, galleryItem);

    axios.put(`/gallery/like/${id}`, galleryItem)
      .then(res => {
        fetchGalleryList();
      })
      .catch(err => {
        console.log('PUT /like failed', err)
      })

  }

console.log('galleryList', galleryList);


    return (
      <div className="App">
        <Header />
        <GalleryList 
            galleryList={galleryList} 
            onClick={updateLikes}
         />
     
      </div>
      
    );
}

export default App;
