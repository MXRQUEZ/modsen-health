import { FC } from "react";
import arc from "@images/arc.svg";
import { ImagesWrapper, ArcImage } from "./styled";

const BackgroundArcs: FC = () => {
  return (
    <ImagesWrapper>
      <ArcImage className="bottom-arc1" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="bottom-arc2" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="bottom-arc3" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="bottom-arc4" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="bottom-arc5" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="bottom-arc6" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc1" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc2" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc3" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc4" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc5" src={arc} alt="background arc" role="presentation" />
      <ArcImage className="top-arc6" src={arc} alt="background arc" role="presentation" />
    </ImagesWrapper>
  );
};

export default BackgroundArcs;
