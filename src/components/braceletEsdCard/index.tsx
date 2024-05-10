import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ContainerButton, Image,  MoldImage,  StyledButton } from './styles';

import { COLORS } from '../../styles/theme/colors';
import { Typography } from '@mui/material';


interface Props {
    imageSrc: string;
    titleButton: string[];
    buttonDisabled: boolean[];
    onStepperClick: (number: number) => void;
}

export function BraceletEsdCard({ imageSrc, titleButton, buttonDisabled, onStepperClick }: Props) {

    const getButtonColor = (buttonTitle: string) => {
        switch (buttonTitle) {
            case "OK":
                return COLORS.PRIMARY_800;
            case "NOK":
                return COLORS.SECONDARY_800;
            case "N/A":
                return COLORS.NEUTRAL_800;
            default:
                return COLORS.BACKGROUND_BASE;
        }
    }
    return (
        <Box>
            <Card sx={{
                minWidth: 240,
                // maxWidth: 383,
                backgroundColor: COLORS.NEUTRAL_200,
                borderRadius: 2,
                mr: 0,
            }}>
                <CardContent sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <MoldImage>
                    <Image src={imageSrc} alt='Boot image' />
                    </MoldImage>
                   
                </CardContent>

                <ContainerButton>
                    {titleButton.map((title, index) => (
                        <StyledButton
                        variant="contained" 
                        sx={{
                            borderRadius: 10,
                             m: 1
                            }}
                            key={index}
                            style={{ backgroundColor: getButtonColor(title)}}
                         onClick={() => onStepperClick(index)}
                         disabled={buttonDisabled[index]}
                        >

                            <Typography style={{ color: COLORS.BACKGROUND_BASE }}>{title}</Typography>
                
                        </StyledButton>
                    ))}
                </ContainerButton>
            </Card>
        </Box>
    );
}
