import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../app/hooks";

export default function Review() {
  const { filters } = useAppSelector((state) => state.register);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Revisão
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalhes do dono
          </Typography>
          <Typography gutterBottom>
            Nome: {filters.firstName} {filters.lastName}
          </Typography>
          <Typography gutterBottom>RG: {filters.rg}</Typography>
          <Typography gutterBottom>CPF: {filters.cpf}</Typography>
          <Typography gutterBottom>Endereço: {filters.address}</Typography>
          <Typography gutterBottom>Cidade: {filters.city}</Typography>
          <Typography gutterBottom>Estado: {filters.state}</Typography>
          <Typography gutterBottom>CEP: {filters.zip}</Typography>
          <Typography gutterBottom>País: {filters.country}</Typography>
          <Typography gutterBottom>
            Termo de responsabilidade:{" "}
            {filters.vaccineCard === true ? "OK" : "Não assinado"}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalhes do animal
          </Typography>
          <Typography gutterBottom>Nome: {filters.petName}</Typography>
          <Typography gutterBottom>Peso: {filters.petWeight}</Typography>
          <Typography gutterBottom>Raça: {filters.petWeight}</Typography>
          <Typography gutterBottom>Idade: {filters.petAge}</Typography>
          <Typography gutterBottom>
            Carteira de vacina:{" "}
            {filters.vaccineCard === true ? "OK" : "Não entregue"}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
