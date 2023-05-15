import React from "react";
import { Button, TextField, Grid, Container, Typography } from "@mui/material";
import { signup } from "./service/ApiService";
import { Link } from "react-router-dom";

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌.
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');
        signup({email: email, username: email, password: password}).then((response) => {
            // 계정 생성 성공 시 login페이지로 리다이렉트
            window.location.href = "/login";
        }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="fname"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="이메일"
                        autoFocus
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="current-password"
                        name="password"
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="패스워드"
                        type="password"
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                            계정 생성
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/login" variant="body2" style={{textDecoration : "none"}}>
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignUp;