import React, { useRef, useContext, useEffect } from 'react';
import {Carousel} from "antd";
import QuizQuestion from "./QuizQuestion";
import WrongAnswer from "./WrongAnswer";
import CorrectAnswer from "./CorrectAnswer";
import QuizResults from "./QuizResults";
import FirebaseContext from "../../firebase/context";



export default () => {
    const quizCarousel = useRef(null);
    const firebase = useContext(FirebaseContext);


    useEffect(() => {
        firebase.getQuestions().then(console.log)
        firebase.getCategories().then(console.log)
        firebase.getQuestionsByCategory("JUqT2jbdls5vYSBgyIJB").then(console.log)
        firebase.getQuestionsByCategory("NUVrYiDhMMQosEIwaQGv").then(console.log)
    }, [firebase]);

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
