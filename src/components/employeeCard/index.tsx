import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Image, OccupationDescription, Occupation, StylesName, Registration, StyleRegistration, MediaQuery } from './styles';
import { COLORS } from '../../styles/theme/colors';

interface EmployeeProps {
    imageSrc: string;
    name: string;
    occupation: string;
    registration: string;

}

export function EmployeeCard({imageSrc, name, occupation, registration }: EmployeeProps) {
    return (
        <MediaQuery>
        <Box>
            <Card sx={{
                minWidth: 150,
                minHeight: 395,
                backgroundColor: `${COLORS.NEUTRAL_200}`,
                borderRadius: 2,
                mr: 1.3,
            }}
            >
                <CardContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt='Employee image'
                    />
                </CardContent>

                <StylesName>{name}</StylesName>

                <Occupation>
                    Ocupação:
                    <OccupationDescription>{occupation}</OccupationDescription>
                </Occupation>

                <Registration>
                    Matrícula:
                    <StyleRegistration>{registration}</StyleRegistration>
                </Registration>

            </Card>
        </Box>
        </MediaQuery>
    );
}
