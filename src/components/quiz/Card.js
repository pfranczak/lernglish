import React from 'react';
import { Card, Input, Button } from 'antd';


export default ({ title, children, actions }) => <Card title={title} style={{ width: 500, height: 400 }}>
    {children}
</Card>
