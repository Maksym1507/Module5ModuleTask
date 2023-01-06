import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { IResource } from "../../../interfaces/resources";

const ResourceCard: FC<IResource> = (props): ReactElement => {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 225, maxWidth: 300 }}>
      <CardActionArea onClick={() => navigate(`/resource/${props.id}`)}>
        <CardContent>
          <Typography noWrap gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.color}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.pantone_value}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceCard;
