import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFilters } from "../slices/register.slice";

export default function OwnerForm() {
  const { filters } = useAppSelector((state) => state.register);
  const dispatch = useAppDispatch();

  const handleFilters = (field: string, value: any) => {
    dispatch(setFilters({ ...filters, [field]: value }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalhes do dono
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(event) => handleFilters("firstName", event.target.value)}
            value={filters["firstName"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => handleFilters("lastName", event.target.value)}
            value={filters["lastName"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rg"
            name="rg"
            label="RG"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("rg", event.target.value)}
            value={filters["rg"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("cpf", event.target.value)}
            value={filters["cpf"]}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Endereço"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(event) => handleFilters("address1", event.target.value)}
            value={filters["address1"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Cidade"
            fullWidth
            autoComplete="shipping city"
            variant="standard"
            onChange={(event) => handleFilters("city", event.target.value)}
            value={filters["city"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Estado"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("state", event.target.value)}
            value={filters["state"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="CEP"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(event) => handleFilters("zip", event.target.value)}
            value={filters["zip"]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(event) => handleFilters("country", event.target.value)}
            value={filters["country"]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="reponsability"
                onChange={(event) =>
                  handleFilters("responsability", event.target.checked)
                }
                checked={filters["responsability"]}
              />
            }
            label="Me isento de qualquer responsabilidade sobre o animal"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
