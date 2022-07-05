import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FC } from "react";
import { Typography, CardMedia, Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { IDoctor } from "@/types/IDoctor";

interface ISwiperQuotesProps {
  doctors: IDoctor[];
}

const SwiperQuotes: FC<ISwiperQuotesProps> = ({ doctors }) => {
  return (
    <Container
      sx={{
        mt: 5,
      }}
    >
      <Swiper navigation modules={[Navigation]}>
        {doctors.map(({ id, image, name, surname, specialty, quote }) => (
          <SwiperSlide key={id}>
            <Card sx={{ display: "flex", height: 320, pr: 7.5, pl: 7.5, backgroundColor: "white" }}>
              <CardMedia
                component="img"
                sx={{
                  width: 320,
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: { xs: "none", sm: "block" },
                }}
                image={`${image}`}
                alt={`${specialty} ${name} ${surname}`}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  sx={{
                    "& > i": {
                      color: "gray",
                      opacity: 0.2,
                    },
                  }}
                >
                  <i className="fa-solid fa-quote-left fa-3x" />
                </Typography>
                <Typography variant="h4" component="q" sx={{ display: "block", height: 120, overflowY: "auto" }}>
                  {quote}
                </Typography>
                <Typography variant="subtitle1" component="cite" sx={{ mt: 5, ml: 2.5, display: "block" }}>
                  {`${specialty} ${name} ${surname}`}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwiperQuotes;
