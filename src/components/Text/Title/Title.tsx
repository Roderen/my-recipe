import {Typography} from "@mui/material";
import "./Title.scss";

type Props = {
  underline?: boolean,
  icon?: React.ReactNode,
  children: React.ReactNode
}

const Title = ({underline = true, icon, children}: Props) => {
  return (
    <>
      <div className="titleBox">
        {!icon ? '' : (
          <div className="icon">{icon}</div>
        )}
        <Typography className={`typography ${underline ? "underline" : ''}`} variant="h4" fontWeight="bold">
          {children}
        </Typography>
      </div>
    </>
  );
};

export default Title;