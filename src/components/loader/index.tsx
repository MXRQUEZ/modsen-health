import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Loader = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
