import { useEffect } from "react";
import { Button } from "@mui/material";
import SwiperQuotes from "./swiper-quotes";
import { useAppDispatch, useTypedSelector } from "@/hooks/redux";
import { fetchDoctorsRequest } from "@/actions/doctors";
import Loader from "@/components/loader";
import { signInRequest } from "../../actions/auth";

const Doctors = () => {
  const dispatch = useAppDispatch();
  const { doctors, pending } = useTypedSelector((state) => state.doctors);
  const { user, isAuth } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchDoctorsRequest());
  }, [dispatch]);

  const signIn = () => {
    dispatch(signInRequest("rojkov.box@gmail.com", "123456"));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (pending) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? <span>Hello {user?.email}</span> : null}
      <SwiperQuotes doctors={doctors} />
      <Button onClick={signIn}>Login</Button>
    </>
  );
};

export default Doctors;
