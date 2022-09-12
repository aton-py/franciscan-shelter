import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setFilters } from "../slices/register.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function PetForm() {
  const { filters } = useAppSelector((state) => state.register);
  const dispatch = useAppDispatch();

  const handleFilters = (field: string, value: any) => {
    dispatch(setFilters({ ...filters, [field]: value }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalhes do animal
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="petName"
            label="Nome do pet"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("petName", event.target.value)}
            value={filters["petName"]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="petWeight"
            label="Peso"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("petWeight", event.target.value)}
            value={filters["petWeight"]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="petBreed"
            label="Raça"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("petBreed", event.target.value)}
            value={filters["petBreed"]}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="petAge"
            label="Idade"
            helperText="Em anos humanos"
            fullWidth
            variant="standard"
            onChange={(event) => handleFilters("petAge", event.target.value)}
            value={filters["petAge"]}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="vaccineCard"
                onChange={(event) =>
                  handleFilters("vaccineCard", event.target.checked)
                }
                checked={filters["vaccineCard"]}
              />
            }
            label="Confirmo entrega de carteira de vacina animal"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
