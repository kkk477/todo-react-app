import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright (c) "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;