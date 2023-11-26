import { useSelector } from "react-redux";
import { CircularProgress, Backdrop } from "@mui/material";

export const Loader = () => {
  const isLoading = useSelector((state) => state.loader);

  return (
    <div className="loader">
      <Backdrop sx={{ color: "#fff", zIndex: 9999 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
