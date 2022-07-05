import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FC } from "react";
import { Typography, Grid } from "@mui/material";
import { IDoctor } from "@/types/IDoctor";

interface ISwiperQuotesProps {
  doctors: IDoctor[];
}

const SwiperQuotes: FC<ISwiperQuotesProps> = ({ doctors }) => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {doctors.map(({ id, image, name, quote }) => (
        <SwiperSlide key={id}>
          <Grid container columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}>
            <Grid item>
              <img src={image} alt={`doctor ${name}`} />
            </Grid>
            <Grid item>
              <Typography variant="h3" component="q">
                {quote}
              </Typography>
            </Grid>
          </Grid>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperQuotes;
