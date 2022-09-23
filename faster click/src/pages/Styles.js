import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding: 17px 7px;
  align-items: center;
  width: 100%;
  max-width: 370px;
  gap: 40px;
  background-color: var(--white);
  border: 2px solid var(--black);
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  color: var(--ocean-blue);
  border: 1px solid var(--black);
  background-color: transparent;
  transition: 0.2s ease-in;
  font-size: 0.9rem;

  :hover {
    color: var(--white);
    background-color: var(--ocean-blue);
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: var(--ocean-blue);
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Registers = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 250px;
  gap: 10px;

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--ocean-blue);
    margin: 0 auto;
  }
`;
