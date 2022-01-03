import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Page from "lib/components/Page";
import { Button } from "lib/components";
import { LINKS } from "lib/constants/links";

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 7rem;
`;

const DescriptionWrapper = styled.div`
  text-align: center;
`;

function Page404() {
  return (
    <Page>
      <Wrapper>404</Wrapper>
      <DescriptionWrapper>An error ocurred.</DescriptionWrapper>
      <Link to={LINKS.HOME.path} style={{ textDecoration: "none" }}>
        <Button style={{ margin: "30px auto", display: "flex" }}>
          Go to Home page
        </Button>
      </Link>
    </Page>
  );
}

export default Page404;
