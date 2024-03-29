import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 800;
  text-shadow: 0 2px 2px #00000028;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
`;

export const SkillContent = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div.category {
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 2px;
      height: 90%;
      background-color: ${(props) => props.theme.colors.project};
      position: absolute;
      top: 1em;
      left: 1px;
    }
  }

  h1#title {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
    font-size: 1.2em;
    text-shadow: 0 2px 2px #00000028;
    font-weight: bold;
  }

  p {
    cursor: default;
    padding-left: 1.2em;
    color: ${(props) => props.theme.colors.textColor};
    line-height: 3em;
    font-family: "Inter";
    font-size: 1em;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      transform: translateX(2px);
      color: ${(props) => props.theme.colors.linkHover};
    }
  }
`;
