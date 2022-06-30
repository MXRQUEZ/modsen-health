import { FC, cloneElement } from "react";

import { backgroundImages } from "../constants/images";
import { StyledImagesBlock } from "./styled";

const ImagesBlock: FC = () => {
  return (
    <StyledImagesBlock>
      {backgroundImages.map(({ id, webp, png, styled }) =>
        cloneElement(
          styled,
          { key: id },
          <source srcSet={webp} type="images/webp" />,
          <img src={png} alt="A man with a hurting spine" role="presentation" />
        )
      )}
    </StyledImagesBlock>
  );
};

export default ImagesBlock;
