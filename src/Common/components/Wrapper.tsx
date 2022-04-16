import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import styles from "./wrapper.styles.module.scss";
import { SxProps } from "@mui/material";

type WrapperProps = {
  children?: React.ReactNode;
  title: string;
  tall?: boolean;
  sx?: SxProps<object>;
};

const Wrapper = ({ children, title, tall, sx }: WrapperProps) => {
  return (
    <Paper
      className={tall ? styles.wrapperTall : styles.wrapper}
      elevation={3}
      sx={{ overflow: "auto", ...sx }}
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
