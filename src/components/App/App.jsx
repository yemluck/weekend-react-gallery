import React from 'react';
import axios from 'axios'
import './App.css';
import Header from '../Header/Header'
import '../Header/Header.css'
import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  // import useEffect so fetchGalleryList is called once... remember empty array
  useEffect(() => {
    fetchGalleryList();
  }, [])



// set useState to empty array to prevent rendering error on first run
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
        // send put and update State
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
