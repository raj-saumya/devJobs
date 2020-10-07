import React, { useContext } from "react";
import Switch from "@material-ui/core/Switch";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ThemeContext } from "../services/Theme";

const ToggleSwitch = withStyles(theme => ({
  root: {
    width: "40px",
    height: "20px",
    display: "flex",
    padding: "2px"
  },
  switchBase: {
    padding: 6,
    "&$checked": {
      transform: "translateX(19px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: "#fff",
        borderColor: "none"
      }
    }
  },
  thumb: {
    width: 10,
    height: 10,
    boxShadow: "none",
    color: "#5a65e4"
  },
  track: {
    border: `1px solid #5a65e4`,
    borderRadius: 12,
    opacity: 1,
    backgroundColor: "#fff"
  },
  checked: {}
}))(Switch);

const ToggleTheme = () => {
  const { dispatch } = useContext(ThemeContext);

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Brightness7Icon style={{ color: "#fff", height: "18px" }} />
      <ToggleSwitch
        onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
        name="toggleSwitch"
      />
      <Brightness2Icon style={{ color: "#fff", height: "18px" }} />
    </Grid>
  );
};

export default ToggleTheme;
