import React from "react";
import { useHistory } from "react-router-dom";
import { TimeContext } from "../../Providers/Time";
import { Container, Button, Nav } from "../Styles";

const Timer = () => {
  const history = useHistory();
  const { seconds, minutes, hour, handleStart } = React.useContext(TimeContext);

  return (
    <Container>
      <Nav>
        <p onClick={() => history.push("/timer")}>Contador</p>
        <p onClick={() => history.push("/register")}>Registrar</p>
      </Nav>
      <h1>
        {hour}:{minutes}:{seconds}
      </h1>
      <Button onClick={handleStart}>Começar</Button>
    </Container>
  );
};

export default Timer;
