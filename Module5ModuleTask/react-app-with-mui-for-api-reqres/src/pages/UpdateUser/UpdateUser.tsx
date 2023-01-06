import React, { FC, ReactElement, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as usersApi from "../../api/modules/users";
import { Box, Button, TextField, Typography } from "@mui/material";
import { IUpdatedUser } from "../../interfaces/updatedUser";
import { ICreateUpdateUser } from "../../interfaces/createUpdateUser";

const UpdateUser: FC<any> = (): ReactElement => {
  const [value, setValue] = useState<IUpdatedUser>();

  const [formData, setFormData] = useState<ICreateUpdateUser>({
    name: "morpheus",
    job: "zion resident",
  });

  const methods = useForm({ mode: "onBlur" });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  useEffect(() => {
    if (value?.updatedAt) {
      console.log(
        `User was updated.\nName: ${value.name}\nJob: ${value.job}\nUpdatedAt: ${value.updatedAt}`
      );
      alert(
        `User was updated.\nName: ${value.name}\nJob: ${value.job}\nUpdatedAt: ${value.updatedAt}`
      );
    }
  }, [value]);

  function onSubmit(e: any) {
    (async () => {
      setValue(await usersApi.updateUser(formData, 2));
    })();
  }

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        Update User
      </Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            fullWidth
            label="Name"
            sx={{ mb: 2 }}
            defaultValue={formData.name}
            error={!!errors["name"]}
            helperText={!!errors["name"] ? `${errors["name"].message}` : ""}
            {...register("name", {
              required: "Name can not be empty",
              minLength: { value: 3, message: "Min 3 symbols" },
            })}
            onChange={(e) => handleChange(e)}
          />

          <TextField
            fullWidth
            label="Job"
            type="text"
            sx={{ mb: 2 }}
            defaultValue={formData.job}
            error={!!errors["job"]}
            helperText={!!errors["job"] ? `${errors["job"].message}` : ""}
            {...register("job", {
              required: "Job can not be empty",
              minLength: { value: 3, message: "Min 3 symbols" },
            })}
            onChange={(e) => handleChange(e)}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{ py: "0.8rem", mt: "1rem" }}
          >
            Update user
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default UpdateUser;
