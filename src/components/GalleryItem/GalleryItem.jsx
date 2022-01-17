import './GalleryItem.css'

function GalleryItem ({galleryItem, onClick}){



    return (
        <>
        <div className="Row">
            <img src={galleryItem.path} alt={galleryItem.description} width="200" height="200" className="Image"/><br />
            <button onClick={() => onClick(galleryItem.id, {galleryItem})}>  ❤️ </button>
            <p>{galleryItem.likes} people love this</p>
        </div>
        </>
    )
}

export default GalleryItem