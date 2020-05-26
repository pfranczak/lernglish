import React, { useRef, useState } from 'react';
import {Carousel} from "antd";
import QuizQuestion from "./QuizQuestion";
import WrongAnswer from "./WrongAnswer";
import CorrectAnswer from "./CorrectAnswer";
import QuizResults from "./QuizResults";
import WordPicker from "../WordPicker/WordPicker";



export default () => {
    const quizCarousel = useRef(null);
    const [ questions, setQuestions ] = useState([]);
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    const [ correctAnswers, setCorrectAnswers ] = useState([]);


    function handleAnswer(answer) {
        if(questions[currentQuestionIndex].translations.includes(answer)) {
            const newCorrect = [...correctAnswers];
            newCorrect[currentQuestionIndex] = true
            setCorrectAnswers(newCorrect);
            quizCarousel.current.goTo(2, false)
        } else {
            quizCarousel.current.goTo(3, false)
        }
    }

    function nextQuestion() {
        if(currentQuestionIndex === questions.length - 1) {
            quizCarousel.current.goTo(4, false);
            return
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        quizCarousel.current.goTo(1, false)
    }


    function startQuiz(questions) {
        setQuestions(questions);
        setCorrectAnswers(questions.map(() => false));
        quizCarousel.current.goTo(1, false)
    }

    function tryAgain() {
        setCurrentQuestionIndex(0)
        setCorrectAnswers(questions.map(() => false));
        quizCarousel.current.goTo(1, false)
    }

    return (
        <Carousel effect="fade" ref={quizCarousel}>
            <WordPicker onStart={startQuiz} />
            <QuizQuestion onSubmit={handleAnswer} question={questions[currentQuestionIndex] || { word: 'placeholder' }}/>
            <CorrectAnswer nextQuestion={nextQuestion}/>
            <WrongAnswer nextQuestion={nextQuestion}/>
            <QuizResults correctAnswers={correctAnswers} tryAgain={tryAgain}/>
        </Carousel>
    )
}
