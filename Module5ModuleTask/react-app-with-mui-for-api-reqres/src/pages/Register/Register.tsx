import React, { FC, ReactElement, useContext } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { AppStoreContext } from "../../App";
import RegisterStore from "./RegisterStore";

const Register: FC<any> = observer((): ReactElement => {
  const appStore = useContext(AppStoreContext);
  const store = new RegisterStore(appStore.authStore);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  function onSubmit(e: any) {
    (async () => {
      await store.register();
    })();
  }

  return (
    <Box
      sx={{
        mx: 4,
        mt: 8,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: "2rem", display: "flex" }}
      >
        Sign up
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="Email"
          type="email"
          autoComplete="email"
          sx={{ mb: 2 }}
          error={!!errors["email"]}
          helperText={!!errors["email"] ? `${errors["email"].message}` : ""}
          {...register("email", {
            required: "Email can not be empty",
            pattern: {
              value: /^[a-zA-Z0-9].+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: "Invalid email format",
            },
          })}
          onChange={(e) => store.changeEmail(e.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mb: 2 }}
          error={!!errors["password"]}
          helperText={
            !!errors["password"] ? `${errors["password"].message}` : ""
          }
          {...register("password", {
            required: "Password can not be empty",
            minLength: { value: 3, message: "Min 3 symbols" },
          })}
          onChange={(e) => store.changePassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          sx={{ py: "0.8rem", mt: "1rem" }}
        >
          Sign up
        </Button>
        {!!appStore.authStore.token && (
          <p
            className="mt-3 mb-3"
            style={{ color: "green", fontSize: 14, fontWeight: 700 }}
          >{`Success! Token is: ${appStore.authStore.token} with id: ${appStore.authStore.id}`}</p>
        )}
      </Box>
    </Box>
  );
});

export default Register;
