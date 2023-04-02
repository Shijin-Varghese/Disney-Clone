import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>
        <Contentlogo1 src="/images/cta-logo-one.svg" alt=""></Contentlogo1>
        <Signup>GET ALL HERE</Signup>
        <Description>
          Disney+ is India’s largest premium streaming platform with more than
          100,000 hours of drama and movies in 17 languages, and coverage of
          every major global sporting event.
        </Description>
        <Contentlogo2 src="/images/cta-logo-two.png" alt=""></Contentlogo2>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    opacity: 0.6;
    content: url("/images/login-background.jpg");
    background: no-repeat top/cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  //   margin-top: 200px;
  align-items: center;
  //   justify-content: center;

  max-width: 658px;
  padding: 80px 40px;
  width: 90%;
`;
const Contentlogo1 = styled.img``;
const Contentlogo2 = styled.img`
  width: 80%;
`;
const Signup = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.4px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1;
`;
