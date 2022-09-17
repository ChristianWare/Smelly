import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ full }) => (
  <div className={`root_loader ${full ? "fill" : ""}`}>
    <CircularProgress />
  </div>
);

export default Loader;
