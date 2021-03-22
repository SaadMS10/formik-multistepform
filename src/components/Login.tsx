import React from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props {
  handleNext: () => void
  activeStep: number
  handleBack: ()=> void
  setFormValues: any
  prevValues:any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
        marginRight: theme.spacing(1),
      },
      backButton: {
        marginRight: theme.spacing(1),
      },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    red:{
      color:"red"

    }
  }),
);

  

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    gender: yup
    .string()
    .required('Gender is required'),
    age:yup
    .number()
    .min(18,"AGE should not be less than 18")
    .required("")
});

const Login :React.FC<Props>=({ handleNext,activeStep,handleBack,setFormValues,prevValues}) => {
    const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      gender:'',
      age:'', 
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
      handleNext();
      setFormValues({...values,...prevValues})
      
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField

          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
           <br/>
        <TextField
        
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
     <br/>
     <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={formik.values.age}
          onChange={formik.handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
          error={formik.touched.age && Boolean(formik.errors.age)}
        
        >
          <option aria-label="None" value=" " />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option> 
          <option value={13}>13</option>     
          <option value={14}>14</option>
          <option value={15}>15</option>   
          <option value={16}>16</option>
          <option value={17}>17</option>  
          <option value={18}>18</option>     
          <option value={19}>19</option>  
          <option value={20}>20</option>  
          <option value={21}>21</option>    
          <option value={22}>22</option>      
          <option value={23}>23</option>     
          <option value={24}>24</option>   
          <option value={25}>25</option>   
          <option value={26}>26</option> 
          <option value={27}>27</option>   
          <option value={28}>28</option>
          <option value={29}>29</option>     
          <option value={30}>30</option>    
          <option value={31}>31</option>    
          <option value={32}>32</option>
          <option value={33}>33</option>  
          <option value={34}>34</option>       
          <option value={35}>35</option>  
          <option value={36}>36</option>  
          <option value={37}>37</option>  
          <option value={38}>38</option>   
          <option value={39}>39</option>     
          <option value={40}>40</option>     
          <option value={41}>41</option>   
          <option value={42}>42</option>   
          <option value={43}>43</option>   
          <option value={44}>44</option>   
          <option value={45}>45</option>   
          <option value={46}>46</option>   
          <option value={47}>47</option>   
          <option value={48}>48</option>   
          <option value={49}>49</option>   
          <option value={50}>50</option>   
        </Select>
        <FormHelperText className={classes.red}>{formik.touched.age && formik.errors.age}</FormHelperText>
      </FormControl>
    <br/>
     <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
       aria-label="gender" 
       name="gender" 
       value={formik.values.gender} 
       onChange={formik.handleChange}
     
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    <br/>
    <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
{/*            
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === activeStep.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
    
        <Button color="primary" variant="contained"  type="submit" > 
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Login;