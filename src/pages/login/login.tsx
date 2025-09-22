import { Button, Stack, TextField } from "@mui/material"

export const Login = () => {
    return (
        <Stack sx={{
            borderRadius: 2,
            minWidth: 300,
            maxWidth: 400,
            boxShadow: 3,
            p: 3,
            gap: 3,
            bgcolor: 'background.paper'
        }}>
            <Stack gap={3}>

                <TextField label="Usuário" variant="outlined" fullWidth />
                <TextField label="Senha" variant="outlined" fullWidth type="password" />
            </Stack>

            <Button variant="text" color="primary" fullWidth>Entrar</Button>
        </Stack>
    )
}