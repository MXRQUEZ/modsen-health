import { FC } from "react";
import arc from "@images/arc.svg";
import { StyledBgImagesWrapper } from "./styled";

const BackgroundArcs: FC = () => {
  return (
    <StyledBgImagesWrapper>
      <img className="bottom__arc1" src={arc} alt="background arc" role="presentation" />
      <img className="bottom__arc2" src={arc} alt="background arc" role="presentation" />
      <img className="bottom__arc3" src={arc} alt="background arc" role="presentation" />
      <img className="bottom__arc4" src={arc} alt="background arc" role="presentation" />
      <img className="bottom__arc5" src={arc} alt="background arc" role="presentation" />
      <img className="bottom__arc6" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc1" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc2" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc3" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc4" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc5" src={arc} alt="background arc" role="presentation" />
      <img className="top__arc6" src={arc} alt="background arc" role="presentation" />
    </StyledBgImagesWrapper>
  );
};

export default BackgroundArcs;
