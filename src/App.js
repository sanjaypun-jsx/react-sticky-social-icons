import React from "react";
import styled from "styled-components";
import "./styles.css";

const DIV = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  top: 25%;
`;
const ICON = styled.i`
  margin: 0%;
  width: 1.5rem;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;

  &:nth-child(1) {
    background-color: #4267b2;
    color: white;
  }
  &:nth-child(2) {
    background-color: #1da1f2;
    color: white;
  }
  &:nth-child(3) {
    background-color: #0e76a8;
    color: white;
  }
  &:nth-child(4) {
    background-color: #ee66aa;
    color: #d90166;
  }
  &:nth-child(5) {
    background-color: #ef8236;
    color: white;
  }
  &:hover {
    width: 7rem;
    transition: all 0.2s ease-out;
    & > Span {
      transition: all 1.5s ease-out;
      opacity: 1;
    }
  }
`;
const Span = styled.span`
  margin-left: 2.5rem;
  color: white;
  font-size: 1rem;
  font-family: Rubik;
  opacity: 0;
`;
export default function App() {
  return (
    <div className="App">
      Sticky Social
      <DIV>
        <ICON
          onClick={() => window.open("www.facebook.com", "_blank")}
          className="fab fa-facebook-f"
        >
          <Span>POST</Span>
        </ICON>
        <ICON
          onClick={() => window.open("www.twitter.com", "_blank")}
          className="fab fa-twitter"
        >
          <Span>TWEET</Span>
        </ICON>
        <ICON
          onClick={() => window.open("www.linkedin.com", "_blank")}
          className="fab fa-linkedin-in"
        >
          <Span>POST</Span>
        </ICON>
        <ICON
          onClick={() => window.open("www.dribbble.com", "_blank")}
          className="fab fa-dribbble"
        >
          <Span>DESIGN</Span>
        </ICON>
        <ICON
          onClick={() => window.open("www.stackoverflow.com", "_blank")}
          className="fab fa-stack-overflow"
        >
          <Span>DEBUG</Span>
        </ICON>
      </DIV>
    </div>
  );
}
