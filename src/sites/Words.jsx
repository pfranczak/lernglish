import React from 'react';
import { Row, Col, Input, Select } from 'antd';

const { Option } = Select;

const Words = props => {
    const handleChange = (e) => {
        console.log(e);
    };

    return (
        <Row style={{ flexWrap: 'nowrap' }}>
            <Col span={8} ><Input placeholder="Enter a word"/></Col>
            <Col span={8} offset={2}><Input placeholder="Translation"/></Col>
            <Col span={8} offset={2}>
                <Select placeholder="Select a category"
                        style={{ width: 149 }}
                        onChange={handleChange}
                        showSearch
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Col>
        </Row>
    );
};

export default Words;
