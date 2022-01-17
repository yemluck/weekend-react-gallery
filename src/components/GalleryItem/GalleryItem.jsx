import './GalleryItem.css'
import { useState } from 'react'

function GalleryItem ({galleryItem, onClick}){

    // constant variable for image and text toggle
    const[ switchImg, setSwitch] = useState(true);

    // function to run when image is clicked
    const onImgClick = () => setSwitch(!switchImg);
    
    // function to run when text is clicked
    const onTextClick = () => setSwitch(!switchImg);

    return (
        <>
        <div className="Row">
            {/* ternary statement to help toggle between image and text */}
            {switchImg ? 
            <img onClick={onImgClick} src={galleryItem.path} alt={galleryItem.description} width="200" height="200" className="Image"/> :
            <p onClick={ onTextClick} > {galleryItem.description}</p> } <br></br>
            <button onClick={() => onClick(galleryItem.id, {galleryItem})}>❤️</button>
            <p>{galleryItem.likes} people love this</p>
        </div>
        </>
    )
}

export default GalleryItem