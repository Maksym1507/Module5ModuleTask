import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IEmployee } from "../../../../interfaces/employees";
import { employeeStore } from "../../../../App";
import IconButton from "@mui/material/IconButton";

const EmployeeCard: FC<IEmployee> = (props): ReactElement => {
  return (
    <Card sx={{ minWidth: 225, maxWidth: 300, height: 200 }}>
      <CardContent>
        <Typography noWrap gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Job: {props.job}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CreatedAt: {props.createdAt}
        </Typography>
        {props.updatedAt && (
          <Typography variant="body2" color="text.secondary">
            UpdatedAt: {props.updatedAt}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Link
            marginRight={1}
            key={props.id}
            component={NavLink}
            to={`${props.id}/updateEmployee`}
            underline="none"
            variant="button"
            sx={{ fontSize: "large" }}
          >
            <EditIcon />
          </Link>
          <IconButton onClick={() => employeeStore.deleteEmployee(props.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
