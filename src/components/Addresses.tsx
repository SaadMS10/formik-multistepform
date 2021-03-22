import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {StateType} from './types/statetypes'

interface Props {
  handleNext: () => void;
  activeStep: number;
  handleBack: () => void;
  setFormValues: React.Dispatch<React.SetStateAction<StateType[]>>;
  prevValues: StateType[];
}

const validationSchema = yup.object({
  street: yup.string().required("Complete Street Adress Required"),
  area: yup.string().required("Complete Area Adress Required"),
  city: yup.string().required("City Required"),
  state: yup.string().required("State Required"),
  country: yup.string().required("Country Required"),
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    backbutton: {
      marginRight: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    helper: {
      color: "red",
    },
  })
);

const Addresses: React.FC<Props> = ({
  handleNext,
  activeStep,
  handleBack,
  setFormValues,
  prevValues,
}) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      street: "",
      area: "",
      state: "",
      country: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleNext();
      setFormValues({ ...prevValues , ...values });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="street"
          name="street"
          label="Street Address"
          value={formik.values.street}
          onChange={formik.handleChange}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
        />
        <br />
        <TextField
          id="area"
          name="area"
          label="Area Address"
          value={formik.values.area}
          onChange={formik.handleChange}
          error={formik.touched.area && Boolean(formik.errors.area)}
          helperText={formik.touched.area && formik.errors.area}
        />
        <br />
        <TextField
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">State/Province</InputLabel>
          <Select
            native
            value={formik.values.state}
            onChange={formik.handleChange}
            inputProps={{
              name: "state",
              id: "state-native-simple",
            }}
            error={formik.touched.city && Boolean(formik.errors.city)}
          >
            <option aria-label="None" value="Select Your Province" />
            <option value={"Sindh"}>Sindh</option>
            <option value={"Balochistan"}>Balochistan</option>
            <option value={"Punjab"}>Punjab</option>
            <option value={"Khyber Pakhtoon Khuaan"}>
              Khyber Pakhtoon Khuaan
            </option>
          </Select>
          <FormHelperText className={classes.helper}>
            {formik.touched.state && formik.errors.state}
          </FormHelperText>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Country</InputLabel>
          <Select
            native
            value={formik.values.country}
            onChange={formik.handleChange}
            inputProps={{
              name: "country",
              id: "country-native-simple",
            }}
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <option aria-label="None" value="Select Your Country" />
            <option value={"Pakistan"}>Pakistan</option>
            <option value={"India"}>India</option>
            <option value={"Nepal"}>Bangladesh</option>
            <option value={"Nepal"}>Japan</option>
            <option value={"Nepal"}>Nepal</option>
          </Select>
          <FormHelperText className={classes.helper}>
            {formik.touched.country && formik.errors.country}
          </FormHelperText>
        </FormControl>
        <br />

        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backbutton}
        >
          Back
        </Button>

        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Addresses;
