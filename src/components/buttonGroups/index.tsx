
import { ReactNode } from 'react';
import { Container, Numbers, StyledOutlinedButton } from './styles';
import { Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type Props = {
  keyboardNumbers: number[];
  buttonText: ReactNode;
  onNumberClick: (number: number) => void;
  onAcessClick: () => void;
}

export function ButtonGroups({ keyboardNumbers, buttonText, onNumberClick, onAcessClick}: Props) {

  return (
    <Container>
      {keyboardNumbers.map((index) => (
        <StyledOutlinedButton key={index} onClick={() => onNumberClick(index)} >
          <Numbers>{index}</Numbers>
        </StyledOutlinedButton>
      ))}
      <Stack direction="row-reverse" mt={-6.5} mr={1.5}>
        <Button
          variant="outlined"
          sx={{ borderRadius: 16, pt: 1.2, pr: 0, pb: 1, pl: 2.8}}
          endIcon={<SendIcon sx={{mr: 3, mb: 0.2}}/>}
          onClick={onAcessClick}
        >
          {buttonText}
        </Button>
      </Stack>
    </Container>
  );
}