import * as React from 'react';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import { StepIconProps } from '@mui/material/StepIcon';
import { ColorlibConnector, ColorlibStepIconRoot } from './styles';

interface Props {
    children: number;
}
export function CustomizedSteppers({ children }: Props) {

    const steps = ['Colaborador', 'Bota', 'Pulseira'];

    function ColorlibStepIcon(props: StepIconProps) {
        const { active, completed, className } = props;

        const icons: { [index: string]: React.ReactElement } = {
            1: <PersonAddAltIcon fontSize='small' />,
            2: <DoNotStepIcon fontSize='small' />,
            3: <InsightsOutlinedIcon fontSize='small' />,
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    return (
        <Stack sx={{ width: '100%' }} spacing={1}>
            <Stepper alternativeLabel activeStep={children} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel sx={{
                            mb: 2,
                            mt: -2
                        }} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
