import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import Page from "lib/components/Page";
import Typer from "lib/components/Typer";
import useOnScreen from "lib/hooks/useOnScreen";

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  padding: 40px;
  align-items: center;
  text-align: center;
`;

const StyledTyper = styled(Typer)`
  font-size: clamp(20px, 20px + 5vw, 60px);
  height: 150px;
`;

const Container = styled.div`
  height: 600px;
  outline: 2px solid;
  overflow-y: scroll;
`;

const Layer = styled.div`
  padding: 20px;
  margin: 20px;
  height: 400px;
  outline: 2px solid;
`;

function CustomLayer({ containerRef, layerIndex, setVisibleLayer }) {
  const layerRef = useRef();
  const isVisible = useOnScreen(containerRef, layerRef, layerIndex);

  useEffect(() => {
    isVisible && setVisibleLayer(layerIndex);
    // eslint-disable-next-line
  }, [isVisible]);

  return <Layer ref={layerRef} />;
}

function Home() {
  const containerRef = useRef();
  const [visibleLayer, setVisibleLayer] = useState(0);

  return (
    <Page>
      <MainContentWrapper>
        <StyledTyper text="This is your awesome frase." />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          adipiscing turpis ante enim vel.
        </div>
        <p>Visible layer: {visibleLayer}</p>
        <Container ref={containerRef}>
          {new Array(20).fill(null).map((_x, i) => (
            <CustomLayer
              key={i}
              containerRef={containerRef}
              layerIndex={i}
              setVisibleLayer={setVisibleLayer}
            />
          ))}
        </Container>
      </MainContentWrapper>
    </Page>
  );
}

export default Home;
