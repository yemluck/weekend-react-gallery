import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList}) {

    console.log('galleryList props is', galleryList);

    return (
        <>
            
           
                {galleryList.map(galleryItem => (
                    <GalleryItem key={galleryItem.id} galleryItem={galleryItem}/>
                   ))}
            
            
        </>
                )
}

export default GalleryList