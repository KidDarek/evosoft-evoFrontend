import styled from "@emotion/styled";
import AnswerQuestionButton from "./AnswerQuestionButton";
import DeleteQuestionButton from "./DeleteQuestionButton";
import { UserQuestionContext } from "../../context-providers/UserQuestionContext";
import React, { Fragment, useContext } from "react";

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
  width: "30%",
  borderBottom: "5px solid #ff0055",
});

const StyledButtonTable = styled("table")({
  width: "30%",
  height: "fit-content",
  display: "flex",
  marginBottom: "1%",
});

const StyledPageDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "10px 25px 10px 25px",
  backgroundColor: "#00EFB3",
});

const AnswerQuestionPage = () => {
  const { userQuestions } = useContext(UserQuestionContext);

  return (
    <>
      <StyledPageDiv>
        <StyledHeader>Unanswered Questions</StyledHeader>
      </StyledPageDiv>
      {userQuestions.map((userQuestion) => {
        if (userQuestion.answer == null) {
          return (
            <Fragment key={userQuestion.id}>
              <StyledPageDiv>
                <StyledQuestionContainer>
                  <StyledQuestion>{userQuestion.question}</StyledQuestion>
                </StyledQuestionContainer>
              </StyledPageDiv>
              <StyledPageDiv>
                <StyledButtonTable>
                  <tbody>
                    <tr>
                      <td width="50%">
                        <AnswerQuestionButton id={userQuestion.id} />
                      </td>
                      <td
                        style={{
                          width: "50%",
                          textAlign: "right",
                        }}
                      >
                        <DeleteQuestionButton id={userQuestion.id} />
                      </td>
                    </tr>
                  </tbody>
                </StyledButtonTable>
              </StyledPageDiv>
            </Fragment>
          );
        }
        return null;
      })}
    </>
  );
};

export default AnswerQuestionPage;
