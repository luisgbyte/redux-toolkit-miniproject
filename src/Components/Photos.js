import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";
import PhotosLoadMore from "./PhotosLoadMore";

const Photos = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(loadNewPhotos(1));
  }, [dispath]);

  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  );
};

export default Photos;
