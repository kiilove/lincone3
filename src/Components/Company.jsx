import { useState } from "react";
import { Stepper, Step, StepButton, Button } from "@mui/material";

import styled from "styled-components";
import { Label } from "@mui/icons-material";
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
  {
    label: "서류목록(선택)",
    data: <CompStepDocu />,
  },
];

const Container = styled.div`
  width: 100%;
  height: 600px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: white;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
`;

const SubContainer = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const NavWrapper = styled.div`
  display: flex;
`;
const Navbar = styled.div`
  width: ${100 / steps.length}%;
  height: 20px;
  padding: 20px;
  display: flex;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
const StepBody = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
`;
const Actionbar = styled.div``;

const Company = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const stepContent = () => {
    return steps[activeStep].data;
  };
  return (
    <Container>
      <Wrapper>
        <SubContainer>
          <NavWrapper>
            {steps.map((item, index) => (
              <Navbar>{item.label}</Navbar>
            ))}
          </NavWrapper>
          <BodyWrapper>
            <StepBody>{stepContent()}</StepBody>
          </BodyWrapper>
        </SubContainer>
      </Wrapper>
    </Container>
  );
};

export default Company;
