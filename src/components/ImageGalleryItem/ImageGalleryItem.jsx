import { ImageGalleryItemImageStyled, ImageGalleryItemStyled } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ pics, alt, onClick }) => {
    return (  
        pics.map(pic => (<ImageGalleryItemStyled key={pic.id}>
            <ImageGalleryItemImageStyled src={pic.webformatURL} alt={"a picture of " + alt} data-large={pic.largeImageURL} onClick={onClick} />
        </ImageGalleryItemStyled >))
        
    );
}

export default ImageGalleryItem;