import React from "react";
import styled from "styled-components";

import { Page, Dropdown, Label } from "lib/components";

const PageWrapper = styled.div`
  margin-top: 80px;
  margin-inline: clamp(25px, 5%, 70px);
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    padding-right: 20px;
  }
`;

function SuggestionPage() {
  return (
    <Page>
      <PageWrapper>
        <DropdownWrapper>
          <Label>Select:</Label>
          <Dropdown />
        </DropdownWrapper>
      </PageWrapper>
    </Page>
  );
}

export default SuggestionPage;
