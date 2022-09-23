import React from "react";
import { useHistory } from "react-router-dom";
import { TimeContext } from "../../Providers/Time";
import { Container, Button, Nav, Registers } from "../Styles";

const Register = () => {
  const history = useHistory();
  const { registers, handleReset } = React.useContext(TimeContext);

  return (
    <Container>
      <Nav>
        <p onClick={() => history.push("/timer")}>Contador</p>
        <p onClick={() => history.push("/register")}>Registrar</p>
      </Nav>
      <Registers>
        <h1>Registros:</h1>
        {registers.map((register, index) => {
          const formatedHour =
            register.hour < 10 ? `0${register.hour}` : register.hour;
          const formatedMinutes =
            register.minutes < 10 ? `0${register.minutes}` : register.minutes;
          const formatedSeconds =
            register.seconds < 10 ? `0${register.seconds}` : register.seconds;

          return (
            <p
              key={index}
            >{`${formatedHour} : ${formatedMinutes} : ${formatedSeconds}`}</p>
          );
        })}
      </Registers>
      <Button onClick={handleReset}>Registrar</Button>
    </Container>
  );
};

export default Register;
