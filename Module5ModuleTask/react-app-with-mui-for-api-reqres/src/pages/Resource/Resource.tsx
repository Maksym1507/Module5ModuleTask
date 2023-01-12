import React, { ReactElement, FC, useEffect } from "react";
import {
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { observer } from "mobx-react-lite";
import { resourceListStore } from "../../App";

const Resource: FC<any> = observer((): ReactElement => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        await resourceListStore.getSingleResource(id);
      }
    })();
  }, [id]);

  if (resourceListStore.singleResource) {
    if (resourceListStore.singleResource.id) {
      return (
        <Container>
          <Grid container spacing={4} justifyContent="center" m={4}>
            {resourceListStore.isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <Card sx={{ minWidth: 225, maxWidth: 300 }}>
                  <CardContent>
                    <Typography
                      noWrap
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {resourceListStore.singleResource?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {resourceListStore.singleResource?.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {resourceListStore.singleResource?.color}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {resourceListStore.singleResource?.pantone_value}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            )}
          </Grid>
        </Container>
      );
    }
  }

  return <NoMatch />;
});

export default Resource;
