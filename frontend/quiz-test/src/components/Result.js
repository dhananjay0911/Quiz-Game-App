import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score || 0;
    const total = location.state?.total || 10;
    const passingScore = 6;

    // Redirect to home if page is refreshed (no state available)
    useEffect(() => {
        if (!location.state) {
            navigate("/");
        }
    }, [location, navigate]);

    return (
        <Container className="mt-5 text-center">
            <Card className="shadow-lg p-4 border-0" style={{ maxWidth: "500px", margin: "auto", background: "#f8f9fa" }}>
                <h2 className="mb-3 text-primary fw-bold">🎉 Quiz Complete! 🎉</h2>
                
                <h4 className="mb-3">
                    Your Score: <span className="fw-bold text-dark">{score} / {total}</span>
                </h4>

                {score >= passingScore ? (
                    <h3 className="text-success fw-bold">✅ Congratulations! You Passed!</h3>
                ) : (
                    <h3 className="text-danger fw-bold">❌ Sorry! You Failed.</h3>
                )}

                <Button variant="primary" className="mt-3" onClick={() => navigate("/")}>
                    🔄 Try Again
                </Button>
            </Card>
        </Container>
    );
};

export default Result;
