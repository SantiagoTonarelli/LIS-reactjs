import React, { useState } from "react";
import "date-fns";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

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
  /* const [errorDate, setErrorDate] = useState(false);
  const [errorHour, setErrorHour] = useState(false); */
  const [helperText, setHelperText] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());
   const [formValues, handleInputChange] = useForm({
    name: "",
	ci: ""
  });
  const { name, ci } = formValues; 

  const handleInputNameChange = (event) => {
    setValue(event.target.valueName);
    setHelperText("");
    setErrorName(false);
  };

  const handleInputCiChange = (event) => {
    setValueCi(event.target.valueCi);
    setHelperText("");
    setErrorCi(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      console.log("--------FORM OK-----------");
      //TODO submit
      //dispatch(startRegister(name, googleToken));
    }
    /*if (value === ) {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }*/
  };

  const isFormValid = () => {
    if (valueName.trim().length === 0) {
      setHelperText("El nombre es requerido");
      setErrorName(true);
      return false;
    }
    if (valueCi.trim().length === 0) {
      setHelperText("La cédula es requerida");
      setErrorCi(true);
      return false;
    }

    return true;
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
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
          label="Ingrese su nombre"
          type="text"
          error={errorName}
          id="standard-error-helper-text"
          name="name"
          value={name}
          helperText={helperText}
          onChange={handleInputChange}
        />

        <TextField
          label="Ingrese su CI"
          type="text"
          error={errorCi}
          id="standard-error-helper-text"
          name="ci"
          value={ci}
          helperText={helperText}
          onChange={handleInputChange}
        />
      </Grid>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="row" justify="center" alignItems="row">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Selecione una fecha"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            className={classes.date}
          />

          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Seleccione una hora"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
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
