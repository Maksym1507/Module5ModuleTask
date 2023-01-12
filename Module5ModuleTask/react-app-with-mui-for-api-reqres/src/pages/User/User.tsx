import React, { ReactElement, FC, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import NoMatch from "../NoMatch";
import { homeStore } from "../../App";
import { observer } from "mobx-react-lite";

const User: FC<any> = observer((): ReactElement => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (id) {
        await homeStore.getSingleUser(id);
      }
    })();
  }, [id]);

  if (homeStore.singleUser) {
    debugger;
    if (homeStore.singleUser.id) {
      return (
        <Container>
          <Grid container spacing={4} justifyContent="center" m={4}>
            {homeStore.isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <Card sx={{ maxWidth: 250 }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={homeStore.singleUser?.avatar}
                    alt={homeStore.singleUser?.email}
                  />
                  <CardContent>
                    <Typography
                      noWrap
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {homeStore.singleUser?.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {homeStore.singleUser?.first_name}{" "}
                      {homeStore.singleUser?.last_name}
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

export default User;
