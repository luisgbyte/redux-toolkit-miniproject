import React from "react";
import { useSelector } from "react-redux";

import { List } from "./PhotosContent.styled";

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos);

  return (
    <List>
      {list.map((photo) => (
        <li key={photo.id} className="anime">
          <img src={photo.src} alt={photo.title} />
          <h2>{photo.title}</h2>
          <span>{photo.acessos}</span>
        </li>
      ))}
    </List>
  );
};
export default PhotosContent;
