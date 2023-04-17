import styled from "@emotion/styled";
import AddQuestionButton from "./AddQuestionButton";
import {
  UserQuestionContext,
  UserQuestionContextProvider,
} from "../../context-providers/UserQuestionContext";
import React, { Fragment, useState, useContext } from "react";

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

const FaqPage = () => {
  const [questionAdded, setIndex] = useState(true);

  const { userQuestions } = useContext(UserQuestionContext);

  return (
    <>
      <div>{questionAdded ? null : null}</div>
      <StyledPageDiv>
        <StyledHeader>Frequently Asked Questions</StyledHeader>
      </StyledPageDiv>
      {userQuestions.map((userQuestion) => (
        <Fragment key={userQuestion.id}>
          <StyledPageDiv>
            <StyledQuestionContainer>
              <StyledQuestion>{userQuestion.question}</StyledQuestion>
            </StyledQuestionContainer>
          </StyledPageDiv>
          <StyledPageDiv>
            <StyledAnswer>{userQuestion.answer}</StyledAnswer>
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

const FaqPageWithContext = () => (
  <UserQuestionContextProvider>
    <FaqPage />
  </UserQuestionContextProvider>
);

export default FaqPageWithContext;
