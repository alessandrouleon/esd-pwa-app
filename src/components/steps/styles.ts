
import { styled } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 17,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(33, 150, 243) 0%,rgb(33, 150, 243) 50%,rgb(33, 150, 243) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(33, 150, 243) 0%,rgb(33, 150, 243) 50%,rgb(33, 150, 243) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));



export const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 40,
    height: 38,
    marginTop: 15,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(33, 150, 243) 0%, rgb(33, 150, 243) 50%, rgb(33, 150, 243) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, rgb(33, 150, 243) 0%, rgb(33, 150, 243) 50%, rgb(33, 150, 243) 100%)',
    }),
}));
