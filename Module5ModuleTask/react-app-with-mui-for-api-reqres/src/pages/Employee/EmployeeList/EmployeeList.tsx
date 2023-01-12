import { FC, ReactElement } from "react";
import { Box, Container, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import EmployeeCard from "./components/EmployeeCard";
import { employeeStore } from "../../../App";

const EmployeeList: FC<any> = observer((): ReactElement => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" my={4}>
        {!employeeStore.employees.length ? (
          <Box>List of employees is empty</Box>
        ) : (
          <>
            {employeeStore.employees?.map((item) => (
              <Grid key={item.id} item lg={4} md={4} xs={6}>
                <EmployeeCard {...item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
});

export default EmployeeList;
