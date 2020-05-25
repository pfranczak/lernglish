import React from 'react';
import {Statistic, Card as AntCard, Row, Col, Button} from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import Card from "./Card";

export default () => <Card title="Pies" style={{ width: 500, height: 400 }}>
    <div className="site-statistic-demo-card">
        <Row gutter={16}>
            <Col span={12}>
                <AntCard>
                    <Statistic
                        title="Correct"
                        value={93}
                        suffix="/ 100"
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<CheckCircleOutlined />}
                    />
                </AntCard>
            </Col>
            <Col span={12}>
                <AntCard>
                    <Statistic
                        title="Wrong"
                        value={7}
                        suffix="/ 100"
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<CloseCircleOutlined />}
                    />
                </AntCard>
            </Col>
        </Row>
        <Button
            type="primary"
            shape="round"
            size={32}
            style={{
                marginTop: 10
            }}
            onClick={() => {}}
        >
            Try Again
        </Button>
    </div>
</Card>
