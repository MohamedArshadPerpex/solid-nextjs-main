import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { darken } from "polished";

const AnimBox = (animParams) => keyframes`
  0% {
    transform: translate(${animParams.start[0]}%, ${animParams.end[0]}%);
  }
  50% {
    transform: translate(${animParams.start[1]}%, ${animParams.end[1]}%);
  }
  100% {
    transform: translate(${animParams.start[2]}%, ${animParams.end[2]}%);
  }
`;

const Container = styled.div`
  --size: ${(props) => props.sizeBoxes}px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-bottom: ${(props) => props.sizeMarginBottom}px;
  padding: 70px;
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
`;

const StyledBox = styled.div`
  --size: ${(props) => props.sizeBoxes}px;
  --duration: 800ms;
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
  transform: translate(${(props) => props.boxTransforms[0]}%, ${(props) => props.boxTransforms[1]}%);
  animation: ${(props) => AnimBox(props.animParams)} var(--duration) linear infinite;

  & > div {
    --background: ${(props) => props.colors.main};
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
  }

  & > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }
  & > div:nth-child(2) {
    --background: ${(props) => props.colors.right};
    --right: 0;
    --rotateY: 90deg;
  }
  & > div:nth-child(3) {
    --background: ${(props) => props.colors.left};
    --rotateX: -90deg;
  }
  & > div:nth-child(4) {
    --background: ${(props) => props.colors.shadow};
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }
`;

const StyledBoxDiv = styled.div`
  --background: ${(props) => props.boxDivParams.background};
  --top: ${(props) => props.boxDivParams.top};
  --right: ${(props) => props.boxDivParams.right};
  --bottom: ${(props) => props.boxDivParams.bottom};
  --left: ${(props) => props.boxDivParams.left};
  --translateZ: ${(props) => props.boxDivParams.translateZ};
  --rotateY: ${(props) => props.boxDivParams.rotateY};
  --rotateX: ${(props) => props.boxDivParams.rotateX};
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
`;

const BoxesLoader = ({
  className = `boxesloader`,
  boxColor = `#5C8DF6`,
  shadowColor = `#dbe3f4`,
  duration = 800,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  let sizeFound = 0.0;
  if (isDesktopOrLaptop) {
    sizeFound = desktopSize !== "" ? parseFloat(desktopSize) : parseFloat(size) * 2;
  } else if (isTabletOrMobile) {
    sizeFound = mobileSize !== "" ? parseFloat(mobileSize) : parseFloat(size);
  }

  const sizePassed = parseFloat(sizeFound);
  const sizeBoxes = (sizePassed * 32) / 64;
  const sizeMarginBottom = (sizePassed * 50) / 64;

  const boxRightColor = darken(0.15, boxColor);
  const boxLeftColor = darken(0.05, boxColor);

  const colors = {
    main: boxColor,
    right: boxRightColor,
    left: boxLeftColor,
    shadow: shadowColor,
  };

  const animParams = [
    {
      start: [100, 100, 200],
      end: [0, 0, 0],
    },
    {
      start: [0, 0, 100],
      end: [100, 0, 0],
    },
    {
      start: [100, 100, 0],
      end: [100, 100, 100],
    },
    {
      start: [200, 200, 100],
      end: [0, 100, 100],
    },
  ];
  const boxTransforms = [
    [100, 0],
    [0, 100],
    [100, 100],
    [200, 0],
  ];

  const boxDivParams = [
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: boxColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "0",
      bottom: "auto",
      left: "auto",
      background: boxRightColor,
      rotateX: "0deg",
      rotateY: "90deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      background: boxLeftColor,
      rotateX: "-90deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: shadowColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) * 3 * -1)",
    },
  ];

  return (
    <Container sizeMarginBottom={sizeMarginBottom} duration={duration} sizeBoxes={sizeBoxes} className={className}>
      {animParams.map((params, index) => (
        <StyledBox
          key={index}
          duration={duration}
          colors={colors}
          sizeBoxes={sizeBoxes}
          animParams={params}
          boxTransforms={boxTransforms[index]}
        >
          {boxDivParams.map((divParams, idx) => (
            <StyledBoxDiv key={idx} boxDivParams={divParams} />
          ))}
        </StyledBox>
      ))}
    </Container>
  );
};

export default BoxesLoader;
