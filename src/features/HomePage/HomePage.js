import React from "react";
import styled from "styled-components";

import { Loader, Button, Page, Typer } from "lib/components";
import useRandomPerson from "./useRandomPerson";
import UserInfo from "./UserInfo";

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 150px 700px 50px;
  padding: 60px 40px;
  align-items: center;
  text-align: center;
`;

const StyledTyper = styled(Typer)`
  font-size: clamp(20px, 10px + 5vw, 60px);
  height: 200px;
`;

function HomePage() {
  const { isSuccess, isFetching, isError, data, refetch } = useRandomPerson();

  const fetchAnother = () => refetch();

  return (
    <Page>
      <MainContentWrapper>
        <StyledTyper text="Just a page with random fake users." />
        {!isFetching && isSuccess && <UserInfo data={data} />}
        {isFetching && <Loader style={{ margin: "0 auto" }} size={100} />}
        {isError && <p>An error ocured</p>}
        <Button style={{ margin: "50px auto" }} onClick={fetchAnother}>
          Get another user
        </Button>
      </MainContentWrapper>
    </Page>
  );
}

export default HomePage;
