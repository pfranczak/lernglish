import React, {useRef} from 'react';
import {Carousel} from "antd";
import QuizQuestion from "./QuizQuestion";
import WrongAnswer from "./WrongAnswer";
import CorrectAnswer from "./CorrectAnswer";
import QuizResults from "./QuizResults";



export default () => {

    const quizCarousel = useRef(null);

    function handleAnswer() {
        quizCarousel.current.goTo(3, false)
    }

    function nextQuestion() {
        quizCarousel.current.goTo(0, false)
    }

    return (
        <Carousel effect="fade" ref={quizCarousel}>
            <QuizQuestion onSubmit={handleAnswer}/>
            <CorrectAnswer nextQuestion={nextQuestion}/>
            <WrongAnswer nextQuestion={nextQuestion}/>
            <QuizResults />
        </Carousel>
    )
}
