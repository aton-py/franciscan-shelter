import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OwnerForm from "../components/owner-form.component";
import PetForm from "../components/pet-form.component";
import Review from "../components/review.component";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const steps = ["Detalhes do dono", "Detalhes do animal", "Revisão"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <OwnerForm />;
    case 1:
      return <PetForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Register() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { filters } = useAppSelector((state) => state.register);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      localStorage.setItem("db", JSON.stringify(filters));
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Registro de animal
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Registro completo
              </Typography>
              <Typography variant="subtitle1">
                O animal foi cadastrado com sucesso no sistema
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => navigate("/")} sx={{ mt: 3, ml: 1 }}>
                  Voltar a Home
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Voltar
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Confirmar" : "Continuar"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Box>
  );
}
