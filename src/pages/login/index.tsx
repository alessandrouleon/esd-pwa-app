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

export function Login() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isSwitchChecked, setIsSwitchChecked] = useState(true);
  const [registrationValue, setRegistrationValue] = useState("");
  const [spanMessage, setSpanMessage] = useState(false);
  const keyboardNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  //const [alert, setAlert] = useState(initialStateAlert);

  const navigate = useNavigate();

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitchChecked(event.target.checked);
  };

  const handleNumberClick = (number: number) => {
    setRegistrationValue((prevValue) => prevValue + number.toString());
    setSpanMessage(false);
  };

  const handleClearTextField = () => {
    setRegistrationValue("");
  };

  // const registration = UserTokenHelper.getLocalStorageRegistration();

  // const isLoginRoute = location.pathname
  //     .toLowerCase()
  //     .includes('/');

  // if (registration && isLoginRoute) {
  //     UserTokenHelper.removeLocalStorageRegistration();
  // }

  const onSubmit = async () => {
    try {
      console.log("matricula:", registrationValue);

      const response = await login(registrationValue);
      if (response.data.token !== 0) {
        const token = response.data.token;
        const [, payload] = token.split(".");
        const decodedPayload = JSON.parse(atob(payload));
        const username = decodedPayload.registration;

        console.log(username);

        LocalStorageToken.setLocalStorageToken(response.data.token);
        LocalStorageToken.setLocalStorageName(username);
        const registration: string = response.data.registration;
        navigate("/home", {
          state: { registration },
        });
      }
      // setAlert({
      //   open: true,
      //   message: "Falha ao realizar login.",
      //   type: "error",
      // });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
      //  const { message } = error.response.data;

        // setAlert({
        //   open: true,
        //   message: message || "Internal server error",
        //   type: "error",
        // });
        setShowSnackbar(true);
      }
    }
  };

  useEffect(() => {
    if (registrationValue.length === 0) {
      setSpanMessage(true);
    } else {
      setSpanMessage(false);
    }
  }, [registrationValue]);

  return (
    <Container>
      <Header company="Empresa" icon={<HelpOutlineIcon fontSize="large" />} />
      <Body>
        <ContentBody>
          <CustomizedSnackbars
            open={showSnackbar}
            onClose={() => setShowSnackbar(false)}
            message="Colaborador não encontrado!"
            bgColorsSnack="error"
          />
          {/* <AlertContainer setAlert={setAlert} alert={alert} /> */}
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
                    if (e.target.value.trim() === "") {
                      setSpanMessage(true);
                    } else {
                      setSpanMessage(false);
                    }
                  }}
                  error={spanMessage}
                  helperText={spanMessage ? "Campo obrigatório" : ""}
                  style={{ marginBottom: "0.5rem" }}
                  InputLabelProps={{ shrink: true }}
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
