import React from "react";
import styled from "styled-components";

import { Loader, Button, Page, Typer, Label } from "lib/components";
import useRandomPerson from "./useRandomPerson";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import { LINKS } from "lib/constants/links";

const MainContentWrapper = styled.div`
  padding: 60px 40px;
  align-items: center;
  text-align: center;
`;

const HeaderWrapper = styled.div`
  height: 200px;
`;

const UserInfoWrapper = styled.div`
  margin-top: 100px;
  min-height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTyper = styled(Typer)`
  font-size: clamp(20px, 10px + 5vw, 60px);
  height: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.linkColor};
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.hoveredLinkColor};
  }
`;

const StyledButton = styled(Button)`
  margin: 50px auto;
`;

function HomePage() {
  const { isSuccess, isFetching, isError, data, refetch } = useRandomPerson();

  const fetchAnother = () => refetch();

  return (
    <Page>
      <MainContentWrapper>
        <HeaderWrapper>
          <StyledTyper text="Just some random fake users." />
          <Label>
            How about some activity suggestion?{" "}
            <StyledLink to={LINKS.ACTIVITY_SUGGESTION.path}>
              Click here
            </StyledLink>
          </Label>
        </HeaderWrapper>
        <UserInfoWrapper>
          {!isFetching && isSuccess && <UserInfo data={data} />}
          {isFetching && <Loader size={100} />}
          {isError && <p>An error ocured</p>}
        </UserInfoWrapper>
        <StyledButton onClick={fetchAnother}>Get another user</StyledButton>
      </MainContentWrapper>
    </Page>
  );
}

export default HomePage;
