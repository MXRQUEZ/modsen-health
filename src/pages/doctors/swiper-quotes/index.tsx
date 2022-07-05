import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FC } from "react";
import { Typography, Box } from "@mui/material";
import { IDoctor } from "@/types/IDoctor";

interface ISwiperQuotesProps {
  doctors: IDoctor[];
}

const SwiperQuotes: FC<ISwiperQuotesProps> = ({ doctors }) => {
  return (
    <Box marginTop={4}>
      <Swiper navigation modules={[Navigation]} className="mySwiper">
        {doctors.map(({ id, image, name, quote }) => (
          <SwiperSlide key={id}>
            <img src={image} alt={`doctor ${name}`} />
            <Typography variant="h3" component="q">
              {quote}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperQuotes;
