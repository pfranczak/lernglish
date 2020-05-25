import React from 'react';
import { Result, Button } from 'antd';
import Card from "./Card";

export default ({ nextQuestion }) => <Card title="Pies" style={{ width: 500, height: 400 }}>
    <Result
        status="error"
        title="Wrong answer"
        subTitle="You'll get it right next time !"
        extra={[
            <Button type="primary" key="next" onClick={nextQuestion}>
                Next question
            </Button>,
        ]}
    >
    </Result>
</Card>
