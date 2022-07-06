import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={160} sx={{ m: "auto" }} />
    </Box>
  );
};

export default Loader;
