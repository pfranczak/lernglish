import React from 'react';
import { Input, Button } from 'antd';
import Card from "./Card";


export default ({ onSubmit }) => <Card title="Pies" actions={[]}>
    <Input placeholder="Answer..." />
    <Button
        type="primary"
        shape="round"
        size={32}
        style={{
            marginTop: 10
        }}
        onClick={onSubmit}
    >
        Submit
    </Button>
</Card>
