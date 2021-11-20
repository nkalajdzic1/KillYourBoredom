import Page from "lib/components/Page";
import Typer from "lib/components/Typer";
import React from "react";
import styled from "styled-components";

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  padding: 40px;
  align-items: center;
  text-align: center;
`;

const StyledTyper = styled(Typer)`
  font-size: clamp(20px, 40px + 100%, 90px);
`;

function Home() {
  return (
    <Page>
      <MainContentWrapper>
        <StyledTyper text="This is your awesome frase." />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          adipiscing turpis ante enim vel.
        </div>
      </MainContentWrapper>
    </Page>
  );
}

export default Home;
