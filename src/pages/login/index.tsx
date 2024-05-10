import { Box, Button, Card, CardContent, FormControlLabel, FormGroup, IconButton, Stack, TextField, Typography } from '@mui/material';
import { Header } from '../../components/header';
import { Body, Container, ContentBody } from './styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { COLORS } from '../../styles/theme/colors';
import { ButtonGroups } from '../../components/buttonGroups';
import SendIcon from '@mui/icons-material/Send';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { CleaningServicesOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { StaticEmployees } from '../../utils/staticEmployees';
import { CustomizedSnackbars } from '../../components/Alert';
import { UserTokenHelper } from '../../services/history/history';
import { ChipsArray } from '../../components/chip';


export function Login() {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [isSwitchChecked, setIsSwitchChecked] = useState(true);
    const [matriculaValue, setMatriculaValue] = useState('');
    const [spanMessage, setSpanMessage] = useState(false);
    const keyboardNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const navigate = useNavigate();

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSwitchChecked(event.target.checked);
    };

    const handleNumberClick = (number: number) => {
        setMatriculaValue(prevValue => prevValue + number.toString());
        setSpanMessage(false);
    };

    const handleClearTextField = () => {
        setMatriculaValue('');
    };


    const onSubmit = () => {
        if (matriculaValue.length === 0) {
            setSpanMessage(true);
        } else {
            const response = StaticEmployees.find(employee => employee.registration === Number(matriculaValue));
            if (response) {
                const itemId = response?.id;
                UserTokenHelper.setLocalStorageRegistration(String(response?.registration));
                navigate('/home', {
                    state: { itemId },
                });
            }
            else {
                navigate('/');
                setShowSnackbar(true);
            }
        }
    }

    return (
        <Container>
            <Header
                company="Empresa"
                icon={<HelpOutlineIcon fontSize='large' />}
            />
            <Body>
                <ContentBody >
                    <CustomizedSnackbars
                        open={showSnackbar}
                        onClose={() => setShowSnackbar(false)}
                        message='Colaborador não encontrado!'
                        bgColorsSnack='error'
                    />

                    <Typography
                        variant='h4'
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
                    <ChipsArray key={1}/>
                    <Box
                        component="form"
                        mt={2}
                        mb={2}
                        autoComplete="off"
                    >
                        <div>
                            <div style={{ position: 'relative' }}>
                                <TextField
                                    id="registration"
                                    label="Matrícula"
                                    placeholder="Digite sua matrícula..."
                                    fullWidth
                                    value={matriculaValue}
                                    disabled={isSwitchChecked}
                                    onChange={(e) => {
                                        setMatriculaValue(e.target.value);
                                        if (e.target.value.trim() === '') {
                                            setSpanMessage(true);
                                        } else {
                                            setSpanMessage(false);
                                        }
                                    }}
                                    error={spanMessage}
                                    helperText={spanMessage ? 'Campo obrigatório' : ''}
                                    style={{ marginBottom: '0.5rem' }}
                                    InputLabelProps={{ shrink: true }}
                                    variant="outlined"
                                />
                                {matriculaValue && (
                                    <IconButton
                                        style={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8
                                        }}
                                        onClick={handleClearTextField}
                                        size="small"
                                    >
                                        <CleaningServicesOutlined />
                                    </IconButton>
                                )}
                            </div>
                            {!isSwitchChecked ?
                                <Stack>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginTop: '1rem',
                                            padding: '0.6rem 0 0.5rem 0'
                                        }}
                                        onClick={onSubmit}
                                    >
                                        Acessar
                                        <SendIcon
                                            style={{
                                                marginLeft: '0.8rem'
                                            }}
                                        />
                                    </Button>
                                </Stack>
                                : null}
                        </div>
                    </Box>
                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: 16
                                }}
                            >
                            </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={isSwitchChecked}
                                            onChange={handleSwitchChange}
                                        />}
                                    label={isSwitchChecked ?
                                        'Ocultar teclado virtual'
                                        : 'Exibir teclado virtual'
                                    }
                                />
                            </FormGroup>
                        </Box>
                    </Typography>
                    {isSwitchChecked ?
                        <Card sx={{
                            minWidth: 275,
                            maxWidth: 355,
                            backgroundColor: `${COLORS.NEUTRAL_100}`,
                            borderRadius: 2
                        }}
                        >
                            <CardContent>
                                <ButtonGroups
                                    keyboardNumbers={keyboardNumbers}
                                    onAcessClick={onSubmit}
                                    buttonText={
                                        <Typography>
                                            Acessar
                                        </Typography>
                                    }
                                    onNumberClick={handleNumberClick}
                                />
                            </CardContent>
                        </Card>
                        : null}
                    <Box mb={20}></Box>
                </ContentBody>
            </Body>
        </Container>
    );
}
