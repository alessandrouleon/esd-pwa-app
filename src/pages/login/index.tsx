import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Header } from "../../components/header";
import { Body, Container, ContentBody } from "./styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { COLORS } from "../../styles/theme/colors";
import { ButtonGroups } from "../../components/buttonGroups";
import SendIcon from "@mui/icons-material/Send";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { CleaningServicesOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CustomizedSnackbars } from "../../components/Alert";
import { LocalStorageToken } from "../../services/Storage/token";
import { ChipsArray } from "../../components/chip";
import { login } from "../../services/login";
import axios from "axios";

const initialStateAlert = {
  open: false,
  message: "",
  type: "error" as "error" | "success",
};

export function Login() {
  const [error, setError] = useState(false);
  const [isSwitchChecked, setIsSwitchChecked] = useState(true);
  const [registrationValue, setRegistrationValue] = useState("");
  const keyboardNumbers: number[] = [];
  const [alert, setAlert] = useState(initialStateAlert);

  for (let i = 1; i <= 9; i++) {
    keyboardNumbers.push(i);
  }
  keyboardNumbers.push(0);

  const navigate = useNavigate();

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleNumberClick = (number: number) => {
    setRegistrationValue((prevValue) => prevValue + number.toString());
  };

  const handleClearTextField = () => {
    setRegistrationValue("");
  };

  const onSubmit = async () => {
    try {
      if (!registrationValue) {
        setError(true);
      } else {
        setError(false);
        const response = await login(registrationValue);
        if (response.data.token !== 0) {
          const token = response.data.token;
          const [, payload] = token.split(".");
          const decodedPayload = JSON.parse(atob(payload));
          const username = decodedPayload.registration;

          LocalStorageToken.setLocalStorageToken(response.data.token);
          LocalStorageToken.setLocalStorageName(username);
          const registration: string = response.data.registration;
          navigate("/home", {
            state: { registration },
          });
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data;
        setAlert({
          open: true,
          message: message || "Internal server error",
          type: "error",
        });
      }
    }
  };

  useEffect(() => {
    if (registrationValue.length > 0) {
      setError(false);
    }
  }, [registrationValue]);

  return (
    <Container>
      <Header company="Empresa" icon={<HelpOutlineIcon fontSize="large" />} />
      <Body>
        <ContentBody>
          <CustomizedSnackbars
            open={alert.open}
            onClose={() => setAlert({ ...alert, open: false })}
            message={alert.message}
            bgColorsSnack={alert.type}
          />

          <Typography
            variant="h4"
            fontWeight={500}
            color={COLORS.NEUTRAL_800}
            mb={3}
            textAlign="center"
          >
            Teste ESD
          </Typography>

          <Typography
            fontWeight={400}
            fontSize={15}
            color={COLORS.NEUTRAL_700}
            mb={0}
            textAlign="center"
          >
            Informe a matrícula do chip no input
          </Typography>
          <ChipsArray key={1} />
          <Box component="form" mt={2} mb={2} autoComplete="off">
            <div>
              <div style={{ position: "relative" }}>
                <TextField
                  id="registration"
                  label="Matrícula"
                  placeholder="Digite sua matrícula..."
                  fullWidth
                  value={registrationValue}
                  disabled={isSwitchChecked}
                  onChange={(e) => {
                    setRegistrationValue(e.target.value);
                    if (e.target.value) {
                      setError(false);
                    }
                  }}
                  error={error}
                  helperText={error ? "Preencha o campo vazio" : ""}
                  variant="outlined"
                />
                {registrationValue && (
                  <IconButton
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                    }}
                    onClick={handleClearTextField}
                    size="small"
                  >
                    <CleaningServicesOutlined />
                  </IconButton>
                )}
              </div>
              {!isSwitchChecked ? (
                <Stack>
                  <Button
                    variant="outlined"
                    sx={{
                      marginTop: "1rem",
                      padding: "0.6rem 0 0.5rem 0",
                    }}
                    onClick={onSubmit}
                  >
                    Acessar
                    <SendIcon
                      style={{
                        marginLeft: "0.8rem",
                      }}
                    />
                  </Button>
                </Stack>
              ) : null}
            </div>
          </Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 16,
                }}
              ></Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isSwitchChecked}
                      onChange={handleSwitchChange}
                    />
                  }
                  label={
                    isSwitchChecked
                      ? "Ocultar teclado virtual"
                      : "Exibir teclado virtual"
                  }
                />
              </FormGroup>
            </Box>
          </Typography>
          {isSwitchChecked ? (
            <Card
              sx={{
                minWidth: 275,
                maxWidth: 355,
                backgroundColor: `${COLORS.NEUTRAL_100}`,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <ButtonGroups
                  keyboardNumbers={keyboardNumbers}
                  onAcessClick={onSubmit}
                  buttonText={<Typography>Acessar</Typography>}
                  onNumberClick={handleNumberClick}
                />
              </CardContent>
            </Card>
          ) : null}
          <Box mb={20}></Box>
        </ContentBody>
      </Body>
    </Container>
  );
}
