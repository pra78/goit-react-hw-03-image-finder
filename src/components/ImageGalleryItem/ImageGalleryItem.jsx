import PropTypes from 'prop-types';
import { ImageGalleryItemImageStyled, ImageGalleryItemStyled } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ pics, alt, onClick }) => {
    return (  
        pics.map(pic => (<ImageGalleryItemStyled key={pic.id}>
            <ImageGalleryItemImageStyled src={pic.webformatURL} alt={"a picture of " + alt} data-large={pic.largeImageURL} onClick={onClick} />
        </ImageGalleryItemStyled >))
        
    );
}

ImageGalleryItem.propTypes = {
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    pic: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }))
}

export default ImageGalleryItem;