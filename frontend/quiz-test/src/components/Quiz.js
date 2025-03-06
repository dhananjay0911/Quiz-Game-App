import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        fetch("http://localhost:5000/api/quiz")
            .then(res => res.json())
            .then(data => setQuestions(data))
            .catch(error => console.error("Error:", error));
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            handleNextQuestion();
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswer = (selectedOption) => {
        if (!questions.length) return;

        const isCorrect = selectedOption === questions[currentQuestion].answer;

        // Show toast message
        toast(isCorrect ? `✔ Correct!` : `❌ Wrong!`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            style: {
                backgroundColor: isCorrect ? "#28a745" : "#dc3545",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
            },
        });

        if (isCorrect) setScore(score + 1);

        setTimeout(() => {
            handleNextQuestion();
        }, 1000);
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(30);
        } else {
            navigate("/result", { state: { score, total: questions.length } });
        }
    };

    if (questions.length === 0) return <p className="text-center mt-5">Loading...</p>;

    return (
        <Container className="mt-5 text-center">
            <ToastContainer />

            <Card className="shadow-lg p-4 rounded border-0" style={{ maxWidth: "500px", margin: "auto", background: "#f8f9fa" }}>
                {/* Show Question Number */}
                <h5 className="text-secondary">Question {currentQuestion + 1} of {questions.length}</h5>

                <h4 className="mb-3 text-dark">{questions[currentQuestion].question}</h4>

                {/* Timer Display */}
                <h5 className="mb-3 text-danger fw-bold">⏳ {timeLeft}s</h5>

                {questions[currentQuestion].options.map((option, index) => (
                    <Button
                        key={index}
                        variant="outline-primary"
                        className="m-2 w-100"
                        onClick={() => handleAnswer(option)}
                    >
                        {option}
                    </Button>
                ))}
            </Card>
        </Container>
    );
};

export default Quiz;
