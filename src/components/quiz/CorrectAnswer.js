import React from 'react';
import { Result, Button } from 'antd';
import Card from "./Card";

export default ({ nextQuestion }) => <Card title="Pies" style={{ width: 500, height: 400 }}>
    <Result
        status="success"
        title="Correct answer !"
        subTitle="Way to go champ !"
        extra={[
            <Button type="primary" key="next" onClick={nextQuestion}>
                Next question
            </Button>,
        ]}
    >
    </Result>
</Card>
