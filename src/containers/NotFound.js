import React from "react";
//MATERIAL-UI
import { Container, Typography } from "@material-ui/core";

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <Typography gutterBottom variant="h5">
          Página não encontrada
        </Typography>
      </Container>
    );
  }
}

export default NotFound;
