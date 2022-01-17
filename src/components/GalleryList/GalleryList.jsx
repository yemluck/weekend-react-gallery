import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({galleryList, onClick}) {

    console.log('galleryList props is', galleryList);

    return (
        <>
            
           
                {galleryList.map(galleryItem => (
                    <GalleryItem 
                            key={galleryItem.id} 
                            galleryItem={galleryItem} 
                            onClick={onClick}
                        />
                   ))}
            
            
        </>
                )
}

export default GalleryList