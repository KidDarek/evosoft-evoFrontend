import styled from "@emotion/styled";
import { userQuestions } from "../../db";
import AddQuestionButton from "./AddQuestionButton";
import React, { Fragment, useState } from "react";

const StyledHeader = styled("div")({
  color: "white",
  aligntext: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const StyledQuestion = styled("h1")({
  color: "white",
  aligntext: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  border: "5px solid red",
});

const StyledAnswer = styled("h2")({
  color: "white",
  aligntext: "center",
  width: "100%",
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
          <h1> Frequently Asked Questions</h1>
        </StyledHeader>
      </StyledPageDiv>
      {userQuestions.map((question, index) => (
        <Fragment key={index}>
          <StyledPageDiv>
            <StyledQuestion>{question.question}</StyledQuestion>
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
