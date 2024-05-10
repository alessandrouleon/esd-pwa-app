
import { AppBar, Toolbar, Typography } from "@mui/material";
import { ButtonArrowBack, Container, HeaderProps, MediaQuery } from "./styles";
import { useLocation } from "react-router-dom";

export function Header({ arrowIcon, company, systemName, icon }: HeaderProps) {

  const location = useLocation();

  const isDashboardRoute = location.pathname
    .toLowerCase()
    .includes('/home');

  const widthScreen = screen.width;

  return (
    <MediaQuery>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              display="flex"
              alignItems="center"
              className="classSystemName"
            >
              {isDashboardRoute &&
                <ButtonArrowBack>{arrowIcon}</ButtonArrowBack>
              }
              {widthScreen > 768 && <span>{company}</span> }
             
            </Typography>
            <Typography
              variant="h4"
              component="div"
              className="classSystemName"
              mt={1}
              sx={{
                flexGrow: 1,
                textAlign: "center"
              }}
            >
              {systemName}
            </Typography>

            {icon && (
              <Typography
                sx={{
                  marginRight: "0.8rem",
                  paddingTop: "0.8rem"
                }}
              >
                {icon}
              </Typography>
            )}
          </Toolbar>

        </AppBar>
      </Container>
    </MediaQuery>
  );
}
