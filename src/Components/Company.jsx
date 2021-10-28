import { useState } from "react";
import { Step, Stepper, StepButton, Button, Box } from "@mui/material";

import styled from "styled-components";
import CompStepBasic from "./CompStepBasic";
import CompStepOption from "./CompStepOption";
import CompStepDocu from "./CompStepDocu";
// const steps = ["기본정보(필수항목 포함)", "부가정보(선택)", "사내서류 등록"];
const steps = [
  {
    label: "기본정보(필수)",
    data: <CompStepBasic />,
  },
  {
    label: "부가정보(선택)",
    data: <CompStepOption />,
  },
];

const Container = styled.div`
  width: 100%;
  height: 560px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
`;

const SubContainer = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 95%;
`;

const ActionWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
`;
const StepBody = styled.div`
  width: 100%;
  height: 400px;
`;
const Actionbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Company = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const stepContent = () => {
    return steps[activeStep].data;
  };
  return (
    <Container>
      <Wrapper>
        <SubContainer>
          <Stepper
            nonLinear
            activeStep={activeStep}
            sx={{ mt: 3, mb: 7, width: "95%" }}
          >
            {steps.map((item, index) => (
              <Step key={item.label}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {item.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <BodyWrapper>
            <StepBody>{stepContent()}</StepBody>
          </BodyWrapper>
          <ActionWrapper>
            {activeStep === steps.length ? (
              <Button onClick={handleReset}>Reset</Button>
            ) : (
              <Actionbar>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Actionbar>
            )}
          </ActionWrapper>
        </SubContainer>
      </Wrapper>
    </Container>
  );
};

export default Company;
