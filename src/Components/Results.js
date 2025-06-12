

const Results = ({onRestart, appScore}) => {
    return (
        <div className="result">
            <p>퀴즈종료</p>
            <p>최종점수 : {appScore}점</p>
            <button onClick={onRestart}>다시시작</button>
        </div>
    );
};

export default Results;