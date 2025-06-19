import quizData from "../data/quizData";
import { useState } from "react";

const QuizPage = ({ quiz, onFinished }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState("");
    const [answered, setAnswered] = useState(false);

    const currentQuiz = quiz[currentIdx];

    const handleClick = (item) => {
        if (answered) return;
        //정답인지 아닌지 체크
        // if(item === currentQuiz.correct){
        //     setScore(prev => prev+10);
        // }
        // const result = (item === currentQuiz.correct) ? score+25:score;
        const result = item === currentQuiz.correct;
        setFeedback(result ? "⭕맞았습니다" : "❌틀렸습니다");
        setComment(currentQuiz.comment);
        if (result) {
            setScore((prev) => prev + 25);
        }
        setShowComment(true);
        setAnswered(true);
    };
    const handleNext = () => {
        setFeedback("");
        setComment(""); // 해설 초기화도 추가하면 좋아요
        setShowComment(false); // 해설 보여주기 상태 초기화
        setAnswered(false);
        // setAnswered(false);
        if (currentIdx + 1 < quiz.length) {
            // 계속 실행이 되어야 하고
            setCurrentIdx(currentIdx + 1);
        } else {
            //문제 끝
            // console.log("문제내는거 끝");
            onFinished(score);
        }
    };
    return (
        <div className="quiz-page">
            <h2>
                퀴즈({currentIdx + 1}/{quiz.length})
            </h2>
            <p>{currentQuiz.question}</p>
            <div className="choices">
                {currentQuiz.choices.map((item, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => {
                                handleClick(item);
                            }}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <p className="quiz-feedback">{feedback}</p>
            <p className="quiz-comment">👉해설: {comment}</p>
            <button onClick={handleNext}>다음</button>
            <p>점수:{score}점</p>
        </div>
    );
};

export default QuizPage;
