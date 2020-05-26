import React, { useContext, useEffect, useState } from 'react';
import {Button, Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import FirebaseContext from "../../firebase/context";


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default ({ onStart }) => {
    const firebase = useContext(FirebaseContext);
    const [ words, setwWords ] = useState(null);



    useEffect(() => {
        firebase.getQuestions().then(setwWords)
        // firebase.getCategories().then(console.log)
        // firebase.getQuestionsByCategory("JUqT2jbdls5vYSBgyIJB").then(console.log)
        // firebase.getQuestionsByCategory("NUVrYiDhMMQosEIwaQGv").then(console.log)
    }, [firebase]);

    if(!words) return <Spin indicator={antIcon} />;

    return (
        <Button type="primary" key="next" onClick={() => onStart(words)}>
            Start
        </Button>
    )
}
