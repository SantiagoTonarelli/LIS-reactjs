import React, { isValidElement, useRef, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button, Typography, CircularProgress, Fade } from "@material-ui/core";
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
  const [query, setQuery] = useState("idle");
  const timerRef = useRef();

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
    setHelperDateText("");
    setErrorDate(false);
  };

  const onMomentChange = (moment, value) => {
    setMoment(moment);
    setInputMomentValue(value);
    setHelperMomentText("");
    setErrorMoment(false);
  };

  const dateFormatter = (str) => {
    return str;
  };

  const onSubmit = (data) => {
    if (isFormValid(data)) {
      console.log("--------FORM OK-----------");
      //TODO submit
      //dispatch(startRegister(name, googleToken));
      clearTimeout(timerRef.current);

      if (query !== "idle") {
        setQuery("idle");
        return;
      }

      setQuery("progress");
      timerRef.current = setTimeout(() => {
        setQuery("success");
      }, 3000);
    }
  };

  const isFormValid = (data) => {
    let isValid = true;
    const { name, ci } = data;

    if (!name || name.trim().length === 0) {
      setHelperNameText("El nombre es requerido");
      setErrorName(true);
      isValid = false;
    } else if (!name.trim().match(/^[A-Za-z\s]+$/)) {
      setHelperNameText("El nombre no es válido");
      setErrorName(true);
      isValid = false;
    }
    if (!ci || ci.trim().length === 0) {
      setHelperCiText("La cédula es requerida");
      setErrorCi(true);
      isValid = false;
    } else if (
      (ci.trim().length !== 7 && ci.trim().length !== 8) ||
      !name.trim().match(/^\d{7,8}$/)
    ) {
      setHelperCiText("La cédula no es válida");
      setErrorCi(true);
      isValid = false;
    }
    const isValidDate = moment(inputDateValue, "DD/MM/yyyy").isAfter(moment());
    if (!inputDateValue || !isValidDate) {
      setHelperDateText("La fecha debe ser posterior al día actual");
      setErrorDate(true);
      isValid = false;
    }
    const startTime = moment("08:00", "HH:mm");
    const endTime = moment("22:00", "HH:mm");
    const isValidTime =
      moment(inputMomentValue, "HH:mm").isSameOrAfter(startTime) &&
      moment(inputMomentValue, "HH:mm").isSameOrBefore(endTime);
    if (!inputMomentValue || !isValidTime) {
      setHelperMomentText("La hora debe estar entre las 08:00 y 22:00");
      setErrorMoment(true);
      isValid = false;
    }

    return isValid;
  };

  if (query === "progress") {
    return (
      <div>
        <Fade
          in={query === "progress"}
          style={{
            transitionDelay: query === "progress" ? "100ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
    );
  }

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
            ampm={false}
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
