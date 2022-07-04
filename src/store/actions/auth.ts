// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchForecastActionOWM = createAsyncThunk<IWeather, IGeolocation>(
//   "fetchForecastOWM",
//   async (params, thunkAPI) => {
//     try {
//       return await getWeather(params);
//     } catch (error: unknown) {
//       const errorMsg = "Error happened while attempting to get the forecast of your city.";
//       return thunkAPI.rejectWithValue(errorMsg);
//     }
//   }
// );
