import css from "./ImageCard.module.css";

interface ImageCardProps extends Photo {
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  description,
  onClick,
}) => {
  return (
    <div>
      <img
        className={css.galleryImage}
        src={urls.small}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
