import { Container, Typography, Box } from '@mui/material';

import imageErrorUnauthorized from '../../assets/employees/unautorized.jpg';
import { COLORS } from '../../styles/theme/colors';

export function Unauthorized() {
  return (
    <Container
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
      maxWidth="lg"
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          fontWeight={700}
          color={COLORS.SECONDARY_400}
          fontSize={70}
        >
          ERROR 401
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight={400}
          color={COLORS.NEUTRAL_500}
          fontSize={32}
        >
          Você não tem permissão para acessar esta página
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <img src={imageErrorUnauthorized} alt="" style={{ width: '100%' }} />
      </Box>
    </Container>
  );
}