import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
    thumb: string;
    small_s3: string;
    raw: string;
    full: string;
  };
  description: string;
}

interface ImageGalleryProps {
  photos: Photo[] | null;
  onImageClick: (photo: Photo) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
  return (
    <div>
      <ul className={css.gallery}>
        {Array.isArray(photos) &&
          photos.map(({ id, urls, description }) => {
            return (
              <li key={id}>
                <ImageCard
                  urls={urls}
                  description={description}
                  onClick={() => onImageClick({ id, urls, description })}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
