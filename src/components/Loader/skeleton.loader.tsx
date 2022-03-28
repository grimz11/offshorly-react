import { makeStyles } from "@mui/styles";
import Skeleton from "@mui/material/Skeleton";
import { Theme } from "@mui/material";

interface IProps {
  count: number;
  height?: number;
  marginBottom?: number | string;
  marginTop?: number | string;
  width?: number | string;
  variant?: any;
}

export const SkeletonLoader: React.FC<IProps> = ({
  count,
  height = 50,
  marginBottom = 0,
  marginTop = 0,
  width = "100%",
  variant = "text",
}) => {
  const useStyles = makeStyles((theme: Theme) => {
    return {
      root: {
        width: width,
        padding: "3.46px",
        [theme.breakpoints.down("sm")]: {
          padding: "2.46px",
        },
        height: "100%",
        backgroundColor: theme.palette.background.paper,
      },
      skeleton: {
        height: height,
        marginBottom: marginBottom,
        marginTop: marginTop,
        [theme.breakpoints.down("sm")]: {
          marginBottom: 0,
          marginTop: 0,
          height: 20,
        },
      },
    };
  });

  const classes = useStyles();
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(
      <Skeleton
        key={i}
        animation="wave"
        className={classes.skeleton}
        variant={variant!}
      />
    );
  }

  return (
    <>
      <div className={classes.root}>{items}</div>
    </>
  );
};
