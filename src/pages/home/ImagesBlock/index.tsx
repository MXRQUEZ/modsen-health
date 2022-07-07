import { FC, cloneElement } from "react";
import { backgroundImages } from "../constants/images";
import { ImageStyled, ImagesWrapper, SourceStyled } from "./styled";

const ImagesBlock: FC = () => {
  return (
    <ImagesWrapper>
      {backgroundImages.map(({ id, webp, png, styled, alt }) =>
        cloneElement(
          styled,
          { key: id },
          <SourceStyled className="images__source" srcSet={webp} type="images/webp" />,
          <ImageStyled className="images__img" src={png} alt={alt} role="presentation" />
        )
      )}
    </ImagesWrapper>
  );
};

export default ImagesBlock;
