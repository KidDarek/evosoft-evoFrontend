import styled from "@emotion/styled";
import AddQuestionButton from "./AddQuestionButton";
import { UserQuestionContext } from "../../context-providers/UserQuestionContext";
import React, { Fragment, useContext } from "react";
import MUIButton from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
  const { userQuestions } = useContext(UserQuestionContext);

  const navigate = useNavigate();
  const navigateToAnswerQuestionPage = () => {
    navigate(`/AnswerQuestion`);
  };

  return (
    <>
      <StyledPageDiv>
        <StyledHeader>Frequently Asked Questions</StyledHeader>
      </StyledPageDiv>
      {userQuestions.map((userQuestion) => {
        if (userQuestion.answer != null) {
          return (
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
          );
        }
        return null;
      })}
      <AddQuestionButton />
      <StyledPageDiv>
        <MUIButton variant="contained" onClick={navigateToAnswerQuestionPage}>
          {" "}
          Answer questions{" "}
        </MUIButton>
      </StyledPageDiv>
    </>
  );
};

export default FaqPage;
