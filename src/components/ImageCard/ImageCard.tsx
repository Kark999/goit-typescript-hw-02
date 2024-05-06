import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    small: string;
    // Інші необхідні поля для посилань на зображення можна додати тут
  };
  description: string;
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
