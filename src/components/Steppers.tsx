import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Login from './Login';
import Addresses from './Addresses';
import Review from './Review'
import {StateType} from './types/statetypes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);
export interface Values{
  email?: string,
  password?: string,
  gender?: string,
  age?: number,
  street?: string,
  area?: string,
  state?: string,
  country?: string,
  city?: string

}



export default function Steppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState<StateType[]>([]);
  const steps = getSteps();
  
  const handleNext = () => {
    console.log("Clicking Next")
  setActiveStep((prevActiveStep:number) => prevActiveStep + 1);
};
const handleBack= () => {
    console.log("Clicking Back")
  setActiveStep((prevActiveStep:number) => prevActiveStep - 1);
};


const handleReset = () => {
  // setFormValues({...initial})
  setActiveStep(0);
};
function getSteps() {
    return ['Personal Information', 'Address Information', 'Review Your Information'];
  }
  // const initial: Values[]=[
  //   email= "",
  //   password= "",
  //   gender= "",
  //   age 0,
  //   street:"",
  //   area: "",
  //   state: "",
  //   country: "",
  //   city: ""

  // ]
  
  
  function getStepContent(step: number,handleNext:()=>void,handleBack:()=>void,formValues: StateType[],setFormValues: React.Dispatch<React.SetStateAction<StateType[]>>) {
    switch (step) {
      case 0:
        return <Login handleNext={handleNext} activeStep={step} handleBack={handleBack} prevValues={formValues} setFormValues={setFormValues}/>;
      case 1:
        return <Addresses handleNext={handleNext} activeStep={step} handleBack={handleBack} prevValues={formValues} setFormValues={setFormValues}  />;
      case 2:
        return <Review handleNext={handleNext} activeStep={step} handleBack={handleBack} formValues={formValues} prevValues={formValues} setFormValues= {setFormValues}/>;
      default:
        return 'Unknown step';
    }
  }


 

  return (
   
     <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography  component={'span'} className={classes.instructions}>All steps completed</Typography>
            <br/>
            <Button
                disabled={activeStep === 0}
                onClick={handleReset}
                variant="contained" color="primary"
                style={{marginTop:"20px"}}
              >
                Reset
              </Button>
       
          </div>
        ) : (
          <div>
            <Typography  component={'span'} className={classes.instructions}>{getStepContent(activeStep,handleNext,handleBack,formValues,setFormValues)}</Typography>
            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    
    </div>
  );
}