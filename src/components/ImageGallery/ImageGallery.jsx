import { ImageGalleryStyled } from "./ImageGallery.styled";

const ImageGallery = ({ children }) => {
    return (
        <ImageGalleryStyled>
            {children}
        </ImageGalleryStyled>
    );
}

export default ImageGallery;