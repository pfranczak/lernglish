import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Card from "./Card";


export default ({ onSubmit, question }) => {
    const [ answer, setAnswer ] = useState("");




    return <Card title={question.word}>
        <Input
            placeholder="Answer..."
            value={answer}
            onChange={(event) => {
                setAnswer(event.target.value);
            }}
        />
        <Button
            type="primary"
            shape="round"
            size={32}
            style={{
                marginTop: 10
            }}
            onClick={() => {
                setAnswer("");
                onSubmit(answer)
            }}
        >
            Submit
        </Button>
    </Card>
}
