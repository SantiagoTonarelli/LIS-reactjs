import React, { isValidElement, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: "30ch",
      },
    },
    date: {
      margin: theme.spacing(2),
      width: "30ch",
    },
    title: {
      margin: theme.spacing(2),
      color: theme.palette.primary.dark,
    },
    submit: {
      marginTop: theme.spacing(2),
      marginButtom: theme.spacing(2),
    },
  };
});

export function Form() {
  const classes = useStyles();

  const [errorName, setErrorName] = useState(false);
  const [errorCi, setErrorCi] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorMoment, setErrorMoment] = useState(false);
  const [helperNameText, setHelperNameText] = useState("");
  const [helperCiText, setHelperCiText] = useState("");
  const [helperDateText, setHelperDateText] = useState("");
  const [helperMomentText, setHelperMomentText] = useState("");
  const { register, handleSubmit } = useForm();
  const [selectedDate, setDate] = useState(moment());
  const [inputDateValue, setInputDateValue] = useState(
    moment().format("DD/MM/YYYY")
  );
  const [selectedMoment, setMoment] = useState(moment());
  const [inputMomentValue, setInputMomentValue] = useState(
    moment().format("HH:MM")
  );

  const onNameChange = () => {
    setHelperNameText("");
	setErrorName(false);
  };

  const onCiChange = () => {
    setHelperCiText("");
	setErrorCi(false);
  };

  const onDateChange = (date, value) => {
    setDate(date);
    setInputDateValue(value);
  };

  const onMomentChange = (moment, value) => {
    setMoment(moment);
    setInputMomentValue(value);
  };

  const dateFormatter = (str) => {
    return str;
  };

  const onSubmit = (data) => {
    if (isFormValid(data)) {
      console.log("--------FORM OK-----------");
      //TODO submit
      //dispatch(startRegister(name, googleToken));
    }
  };

  const isFormValid = (data) => {
    let isValid = true;
    const { name, ci, date, hour } = data;
    console.log(data);
    if (!name || name.trim().length === 0) {
      setHelperNameText("El nombre es requerido");
      setErrorName(true);
      isValid = false;
    }
    else if (!name.trim().match(/^[A-Za-z\s]+$/)) {
      setHelperNameText("El nombre es inválido");
      setErrorName(true);
      isValid = false;
    }
    if (!ci || ci.trim().length === 0) {
      setHelperCiText("La cédula es requerida");
      setErrorCi(true);
      isValid = false;
    } 
	else if (ci.trim().length !== 7 && ci.trim().length !== 8) {
      setHelperCiText("La cédula debe ser válida");
      setErrorCi(true);
      isValid = false;
    }

    return isValid;
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Typography
          align="center"
          variant="h3"
          component="h2"
          gutterBottom
          className={classes.title}
        >
          Ingrese sus datos
        </Typography>

        <TextField
          label="Ingrese su nombre (solo letras)"
          type="text"
          error={errorName}
          id="standard-error-helper-text"
          {...register("name")}
          helperText={helperNameText}
		  onChange={onNameChange}
        />

        <TextField
          label="Ingrese su CI sin puntos ni guión"
          type="text"
          error={errorCi}
          helperText={helperCiText}
          id="standard-error-helper-text"
          {...register("ci")}     
		  onChange={onCiChange}     
        />
      </Grid>

      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <Grid container direction="row" justify="center" alignItems="row">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            autoOk={true}
            showTodayButton={true}
            label="Selecione una fecha"
            format="DD/MM/yyyy"
            name="date"
			{...register("date")}  
            value={selectedDate}
            inputValue={inputDateValue}
            onChange={onDateChange}
            rifmFormatter={dateFormatter}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            error={errorDate}
            helperText={helperDateText}
            className={classes.date}
          />

          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Seleccione una hora"
            name="moment"
			{...register("hour")}  
            value={selectedMoment}
            inputValue={inputMomentValue}
            onChange={onMomentChange}
            rifmFormatter={dateFormatter}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
            error={errorMoment}
            helperText={helperMomentText}
            className={classes.date}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.submit}
      >
        <Button type="submit" variant="contained" color="primary">
          Agendar
        </Button>
      </Grid>
    </form>
  );
}
