import './GalleryItem.css'

function GalleryItem ({galleryItem}){



    return (
        <>
        <div className="Row">
            <img src={galleryItem.path} width="150" height="150" className="Image"/><br />
            <button> ❤️ </button>
            <button> 💔</button>
            <p>{galleryItem.likes} people love this</p>
        </div>
        </>
    )
}

export default GalleryItem