import { FC } from "react";
import arc from "@images/arc.svg";
import { StyledBgImagesWrapper } from "./styled";

const BackgroundArcs: FC = () => {
  return (
    <StyledBgImagesWrapper>
      <img className="bottom-arc1" src={arc} alt="background arc" role="presentation" />
      <img className="bottom-arc2" src={arc} alt="background arc" role="presentation" />
      <img className="bottom-arc3" src={arc} alt="background arc" role="presentation" />
      <img className="bottom-arc4" src={arc} alt="background arc" role="presentation" />
      <img className="bottom-arc5" src={arc} alt="background arc" role="presentation" />
      <img className="bottom-arc6" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc1" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc2" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc3" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc4" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc5" src={arc} alt="background arc" role="presentation" />
      <img className="top-arc6" src={arc} alt="background arc" role="presentation" />
    </StyledBgImagesWrapper>
  );
};

export default BackgroundArcs;
