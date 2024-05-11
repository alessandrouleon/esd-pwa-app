import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ContentImage from '@mui/material/CardContent';
import { Image, OccupationDescription, Occupation, StylesName, Registration, StyleRegistration, MediaQuery, StylesNameDescription } from './styles';
import { COLORS } from '../../styles/theme/colors';

interface EmployeeProps {
    imageSrc: string;
    name: string;
    occupation: string;
    registration: string;

}

export function EmployeeCard({ imageSrc, name, occupation, registration }: EmployeeProps) {
   
   const schreanCurrent = screen.width;
    return (
        <MediaQuery>
            <Box>
                <Card sx={{
                    minWidth: 150,
                    // maxHeight: 395,
                    backgroundColor: `${COLORS.NEUTRAL_200}`,
                    borderRadius: 2,
                    mr: 1.3,
                }}
                className="card"
                >
                    <ContentImage
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                         className="contentImage"
                    >
                        <Image
                            src={imageSrc}
                            alt='Employee image'
                            className="image"
                        />
                    </ContentImage>
                    <div className="contentLegend">
                        <StylesName className="stylesName">
                       {schreanCurrent <= 768 && (<div> Nome:</div>)}
                           <StylesNameDescription>{name}</StylesNameDescription> 
                            </StylesName>

                        <Occupation className="stylesName">
                            Ocupação:
                            <OccupationDescription>{occupation}</OccupationDescription>
                        </Occupation>

                        <Registration className="stylesName">
                            Matrícula:
                            <StyleRegistration>{registration}</StyleRegistration>
                        </Registration>
                    </div>
                </Card>
            </Box>
        </MediaQuery>
    );
}
