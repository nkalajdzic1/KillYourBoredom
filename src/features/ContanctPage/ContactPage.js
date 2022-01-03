import React from "react";
import styled, { css } from "styled-components";

import { Button, Page } from "lib/components";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const ContactButtonCss = css`
  margin-top: 20px;
  outline: none;
  width: 150px;
`;

const LinkedinButton = styled(Button)`
  ${ContactButtonCss}
  background-color: ${({ theme }) => theme.colors.blue};
`;

const GithubButton = styled(Button)`
  ${ContactButtonCss}
  background-color: ${({ theme }) => theme.colors.green};
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const StyledDiv = styled.div`
  padding: 10px;
`;

function ContactPage() {
  return (
    <Page>
      <Wrapper>
        <h2 style={{ marginTop: 100 }}>Contact</h2>
        <StyledDiv>Name: Nadir Kalajdžić</StyledDiv>
        <StyledDiv>
          Mail:{" "}
          <StyledLink href="mailto:nadir.kalajdzic@gmail.com">
            nadir.kalajdzic@gmail.com
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink href="https://nkalajdzic1.github.io/">
            Portfolio link
          </StyledLink>
        </StyledDiv>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <a href="https://www.linkedin.com/in/nadir-kalajdzic/">
            <LinkedinButton>LinkedIn</LinkedinButton>
          </a>
          <a href="https://github.com/nkalajdzic1/">
            <GithubButton>Github</GithubButton>
          </a>
        </div>
      </Wrapper>
    </Page>
  );
}

export default ContactPage;
