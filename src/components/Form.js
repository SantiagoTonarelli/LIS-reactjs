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
import { Container, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
//TODO arreglar para que sea responsive y los campos de fecha y hora se ponga uno abajo del otro
const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(2),
        width: "100%",
      },
    },
  };
});

export function Form() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container justify="center">
        <Grid item className={classes.root}>
          <Typography align="center" variant="h3" component="h2" gutterBottom>
            Ingrese sus datos
          </Typography>

          <div>
            <TextField id="standard-basic" label="Ingrese su nombre" />
          </div>

          <div>
            <TextField id="standard-basic" label="Ingrese su CI" />
          </div>
        </Grid>
      </Grid>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction={"row"} justify="center" spacing={3}>
          <Grid item>
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
            />
          </Grid>

          <Grid item>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Seleccione una hora"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
  );
}

/*
<form className={classes.root} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid alignItems="center" container direction="column" justify="center">
          <Grid item xs="auto">
            <h1>Ingrese sus datos</h1>

            <Container maxWidth="sm">
              <TextField id="standard-basic" label="Ingrese su nombre" />
            </Container>

            <Container maxWidth="sm">
              <TextField id="standard-basic" label="Ingrese su CI" />
            </Container>

            <Container maxWidth="sm">
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
              />
            </Container>

            <Container maxWidth="sm">
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Seleccione una hora"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Container>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </form>
*/
