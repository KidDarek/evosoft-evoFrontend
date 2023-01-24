import styled from "@emotion/styled";
import { userQuestions } from "../../db";
import AddQuestionButton from "./AddQuestionButton";
import React, { Fragment, useState } from "react";

const StyledHeader = styled("h1")({
  color: "white",
  aligntext: "center",
  width: "80%",
  display: "flex",
  justifyContent: "center",
});

const StyledQuestion = styled("h2")({
  color: "white",
  aligntext: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StyledQuestionContainer = styled("div")({
  width: "40%",
  borderBottom: "5px solid #ff0055",
});

const StyledAnswer = styled("h3")({
  color: "white",
  aligntext: "left",
  width: "40%",
  display: "flex",
  justifyContent: "center",
});

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const FaqPage = (props) => {
  const [questionAdded, setIndex] = useState(true);

  return (
    <>
      <div>{questionAdded ? null : null}</div>
      <StyledPageDiv>
        <StyledHeader>
          Frequently Asked Questions
        </StyledHeader>
      </StyledPageDiv>
      {userQuestions.map((question, index) => (
        <Fragment key={index}>
          <StyledPageDiv>
            <StyledQuestionContainer>
              <StyledQuestion>{question.question}</StyledQuestion>
            </StyledQuestionContainer>
          </StyledPageDiv>
          <StyledPageDiv>
            <StyledAnswer>{question.answer}</StyledAnswer>
          </StyledPageDiv>
        </Fragment>
      ))}
      <AddQuestionButton
        setIndex={setIndex}
        questionAdded={questionAdded}
      ></AddQuestionButton>
    </>
  );
};

export default FaqPage;
