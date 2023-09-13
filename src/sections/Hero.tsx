import { useState } from "react";
import styled from "styled-components";

export const Hero = () => {
  const [gradientAngle, setGradientAngle] = useState(0); // Initial angle

  const handleMouseMove = (e: any) => {
    // Calculate the angle based on mouse position
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    const angle = Math.atan2(mouseY, mouseX);

    // Convert angle to degrees
    const angleDegrees = (angle * 720) / Math.PI;
    console.log(angleDegrees);

    // Update the gradient angle with a slight delay (e.g., 100ms)
    setTimeout(() => {
      setGradientAngle(angleDegrees);
    }, 100);
  };

  return (
    <Section
      onMouseMove={handleMouseMove}
      style={{
        background: `linear-gradient(${gradientAngle}deg, #ff6f61, #ffab49)`,
        transition: "background 2s ease" /* Add a transition effect */,
      }}>
      <Text>Hello! My name is</Text>

      <Name>DANIEL ALIPHON</Name>

      <Text>and this is my portfolio.</Text>
    </Section>
  );
};

//     const Element = styled.div``

const Section = styled.div`
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 10rem;
  color: rgb(240, 15, 86);
  text-shadow: 10px 10px rgb(255, 111, 97);
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 4rem;
  color: white;
  font-family: "Palanquin", sans-serif;
  text-shadow: 7px 7px rgb(255, 111, 97);
`;
