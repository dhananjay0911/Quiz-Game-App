import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container className="text-center mt-5">
            <h1 className="mb-4">Welcome to the Quiz Game! 🧠</h1>
            <Button variant="primary" size="lg" onClick={() => navigate("/quiz")}>
                Start Quiz
            </Button>
        </Container>
    );
};

export default Home;
