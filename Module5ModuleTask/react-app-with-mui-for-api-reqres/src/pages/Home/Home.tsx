import React, { ReactElement, FC } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import UserCard from "./components";
import { observer } from "mobx-react-lite";
import { homeStore } from "../../App";

const UserList: FC<any> = observer((): ReactElement => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" my={4}>
        {homeStore.isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {homeStore.users?.map((item) => (
              <Grid key={item.id} item lg={2} md={4} xs={6}>
                <UserCard {...item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={homeStore.totalPages}
          page={homeStore.currentPage}
          onChange={(event, page) => homeStore.changePage(page)}
        />
      </Box>
    </Container>
  );
});

export default UserList;
