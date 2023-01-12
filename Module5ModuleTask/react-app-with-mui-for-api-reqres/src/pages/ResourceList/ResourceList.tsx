import React, { ReactElement, FC } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import ResourceCard from "./components/ResourceCard";
import { observer } from "mobx-react-lite";
import { resourceListStore } from "../../App";

const ResourceList: FC<any> = observer((): ReactElement => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4} justifyContent="center" my={4}>
        {resourceListStore.isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {resourceListStore.resources?.map((item) => (
              <Grid key={item.id} item lg={4} md={4} xs={6}>
                <ResourceCard {...item} />
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
          count={resourceListStore.totalPages}
          page={resourceListStore.currentPage}
          onChange={(event, page) => resourceListStore.changePage(page)}
        />
      </Box>
    </Container>
  );
});

export default ResourceList;
