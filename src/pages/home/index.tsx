import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Body,
  CardWrapper,
  Container,
  ContentBody,
  ContentBodyGrid,
  MediaQuery,
  TwoColumnSpan,
} from "./styles";
import { Header } from "../../components/header";
import { Box, Button } from "@mui/material";
import { EmployeeCard } from "../../components/employeeCard";
import { BootEsdCard } from "../../components/bootEsdCard";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CustomizedSteppers } from "../../components/steps";
import { useEffect, useState } from "react";
import { BraceletEsdCard } from "../../components/braceletEsdCard";
import bootModel from "../../assets/boot-model.png";
import BootOK from "../../assets/bootOK.png";
import BootNOK from "../../assets/bootNOK.png";
import BootNA from "../../assets/bootNA.png";
import BraceletModel from "../../assets/braceletModel.png";
import BraceletOK from "../../assets/braceletOK.png";
import BraceletNOK from "../../assets/braceletNOK.png";
import BraceletNA from "../../assets/braceletNA.png";
import UserDefault from "../../assets/employees/userDefault.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../../styles/theme/colors";
import { CustomizedSnackbars } from "../../components/Alert";
import { LocalStorageToken } from "../../services/Storage/token";
import { getSingleRegistration } from "../../services/employee";
import { TesteEsdProps, createTesteEsd } from "../../services/testeEsd";
import { EmployeeProps } from "./interfaces";

export function Home() {
  const titleButton = ["OK", "NOK", "N/A"];
  const [isSteppers, setIsSteppers] = useState(0);
  const [buttonBootDisabled, setButtonBootDisabled] = useState(
    Array(titleButton.length).fill(false)
  );
  const [buttonBraceletDisabled, setButtonBraceletDisabled] = useState(
    Array(titleButton.length).fill(false)
  );
  const [isStatusBoot, setIsStatusBoot] = useState(0);
  const [isStatusBracelet, setIsStatusBracelet] = useState(0);
  const [foundUser, setFoundUser] = useState<EmployeeProps | undefined>(
    undefined
  );
  const [showSnackbar, setShowSnackbar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const employeeId: string = location.state?.employeeId;

  const handleStepperBootClick = (index: number) => {
    setButtonBootDisabled((prevState) => {
      let updatedState = [...prevState];

      if (index === 0) {
        const shouldDisableAll = updatedState[1] && updatedState[2];

        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBoot((preventValue) => preventValue - 1);
        } else {
          updatedState.fill(true, 1, 3);
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBoot((preventValue) => preventValue + 1);
        }
      }

      if (index === 1) {
        const shouldDisableAll = updatedState[0] && updatedState[2];

        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBoot((preventValue) => preventValue - 2);
        } else {
          const activeTrue = [0, 2];
          activeTrue.forEach((item) => (updatedState[item] = true));
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBoot((preventValue) => preventValue + 2);
        }
      }

      if (index === 2) {
        const shouldDisableAll = updatedState[0] && updatedState[1];
        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBoot((preventValue) => preventValue - 3);
        } else {
          const activeTrue = [0, 1];
          activeTrue.forEach((item) => (updatedState[item] = true));
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBoot((preventValue) => preventValue + 3);
        }
      }

      return updatedState;
    });
  };

  const handleStepperBraceletClick = (index: number) => {
    setButtonBraceletDisabled((prevState) => {
      let updatedState = [...prevState];

      if (index === 0) {
        const shouldDisableAll = updatedState[1] && updatedState[2];
        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBracelet((preventValue) => preventValue - 1);
        } else {
          updatedState.fill(true, 1, 3);
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBracelet((preventValue) => preventValue + 1);
        }
      }
      if (index === 1) {
        const shouldDisableAll = updatedState[0] && updatedState[2];

        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBracelet((preventValue) => preventValue - 2);
        } else {
          const activeTrue = [0, 2];
          activeTrue.forEach((item) => (updatedState[item] = true));
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBracelet((preventValue) => preventValue + 2);
        }
      }
      if (index === 2) {
        const shouldDisableAll = updatedState[0] && updatedState[1];
        if (shouldDisableAll) {
          updatedState = Array(3).fill(false);
          setIsSteppers((preventValue) => preventValue - 1);
          setIsStatusBracelet((preventValue) => preventValue - 3);
        } else {
          const activeTrue = [0, 1];
          activeTrue.forEach((item) => (updatedState[item] = true));
          setIsSteppers((preventValue) => preventValue + 1);
          setIsStatusBracelet((preventValue) => preventValue + 3);
        }
      }
      return updatedState;
    });
  };

  const handleFindUser = async () => {
    const employee = await getSingleRegistration(employeeId);
    return employee.data;
  };

  useEffect(() => {
    const fetchUser = async () => {
      const employee = await handleFindUser();
      setFoundUser(employee);
    };

    fetchUser();
  }, []);

  const onSubmit = async () => {
    const getValue = (disabledArray: boolean[]): string | undefined => {
      if (!disabledArray[0]) return "OK";
      if (!disabledArray[1]) return "NOK";
      if (!disabledArray[2]) return "NA";
      return undefined;
    };

    const boot = getValue(buttonBootDisabled);
    const bracelete = getValue(buttonBraceletDisabled);

    if (employeeId && boot && bracelete) {
      const saveUser: TesteEsdProps = {
        employeeId,
        boot,
        bracelete,
      };
      try {
        await createTesteEsd(saveUser);
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setShowSnackbar(true);
      } catch (error) {
        console.error("Erro ao realizar teste:", error);
        setShowSnackbar(false);
      }
    }
  };

  const goBack = () => {
    LocalStorageToken.removeLocalStorageRegistration();
  };

  return (
    <MediaQuery>
      <Container>
        <Header
          arrowIcon={
            <Box mt={0.5}>
              <NavLink
                to="/"
                style={{
                  color: `${COLORS.BACKGROUND_BASE}`,
                  textDecoration: "none",
                }}
                onClick={goBack}
              >
                <ArrowBackIosIcon fontSize="small" />
              </NavLink>
            </Box>
          }
          company={"Empresa"}
          systemName="Teste de EPIs ESD"
          icon={<HelpOutlineIcon fontSize="large" />}
        />
        <Body className="bodyStyles">
          <ContentBody className="contentBody">
            <CustomizedSnackbars
              open={showSnackbar}
              onClose={() => setShowSnackbar(false)}
              message="Teste realizado com sucesso!"
              bgColorsSnack="success"
            />
            <CustomizedSteppers children={isSteppers} />
            <ContentBodyGrid className="contentBodyGrid">
              <div>
                <EmployeeCard
                  imageSrc={`${
                    foundUser?.imageId === "" ||
                    foundUser?.imageId === undefined
                      ? UserDefault
                      : foundUser?.imageId
                  } `}
                  name={`${foundUser?.name}`}
                  occupation={`${foundUser?.occupation}`}
                  registration={`${foundUser?.registration}`}
                />
              </div>
              <div>
                <TwoColumnSpan className="card">
                  <BootEsdCard
                    imageSrc={
                      isStatusBoot === 0
                        ? `${bootModel}`
                        : isStatusBoot === 1
                        ? `${BootOK}`
                        : isStatusBoot === 2
                        ? `${BootNOK}`
                        : `${BootNA}`
                    }
                    titleButton={titleButton}
                    onStepperClick={handleStepperBootClick}
                    buttonDisabled={buttonBootDisabled}
                  />
                  <BraceletEsdCard
                    imageSrc={
                      isStatusBracelet === 0
                        ? `${BraceletModel}`
                        : isStatusBracelet === 1
                        ? `${BraceletOK}`
                        : isStatusBracelet === 2
                        ? `${BraceletNOK}`
                        : `${BraceletNA}`
                    }
                    titleButton={titleButton}
                    onStepperClick={handleStepperBraceletClick}
                    buttonDisabled={buttonBraceletDisabled}
                  />
                </TwoColumnSpan>
                <CardWrapper className="cardWrapper">
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={isSteppers !== 2}
                    sx={{
                      borderRadius: 3,
                      p: 1,
                      fontSize: 18,
                    }}
                    endIcon={<SendIcon sx={{ ml: 1 }} />}
                    onClick={onSubmit}
                  >
                    Enviar Teste
                  </Button>
                </CardWrapper>
              </div>
            </ContentBodyGrid>
          </ContentBody>
        </Body>
      </Container>
    </MediaQuery>
  );
}
