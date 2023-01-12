import React, { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { employeeStore } from "../../../App";
import { IEmployee } from "../../../interfaces/employees";
import { useNavigate } from "react-router-dom";

const CreateEmployee: FC<any> = observer((): ReactElement => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IEmployee>({} as IEmployee);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onBlur" });

  function onSubmit(e: any) {
    (async () => {
      await employeeStore.createEmployee({ name: e.name, job: e.job });
    })();

    alert("Employee was created")
    navigate("/employee");
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
        Create User
      </Typography>
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
          value={formData.job || ""}
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
          Create user
        </Button>
      </Box>
    </Box>
  );
});

export default CreateEmployee;
