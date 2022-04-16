import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import styles from "./wrapper.styles.module.scss";

type AccountsProps = {
  children?: React.ReactNode;
  title: string;
  tall?: boolean;
};

const Wrapper = ({ children, title, tall }: AccountsProps) => {
  return (
    <Paper
      className={tall ? styles.wrapperTall : styles.wrapper}
      elevation={3}
      sx={{ overflow: "auto" }}
    >
      <>
        <Typography align="center">{title}</Typography>
        <Divider />
        {children}
      </>
    </Paper>
  );
};

export default Wrapper;
