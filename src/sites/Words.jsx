import React, { useState } from 'react';
import { Row, Col, Input, Select } from 'antd';
import * as cheerio from 'cheerio';
import * as axios from 'axios';

const { Option } = Select;

const Words = props => {
    const [translations, setTranslations] = useState(null);
    const translateWord = ({target: {value}}) => {
        axios.get(`https://pl.bab.la/slownik/angielski-polski/${value}`).then((response) => {
            const $ = cheerio.load(response.data);
            const translations = $($('.sense-group-results')[0]).text().replace(/\r?\n|\r|\s/g, ' ').trim()
                .replace(/\s/g, ',');
            setTranslations(translations);
        }).catch(e => console.log(e));
    };

    return (
        <Row style={{ flexWrap: 'nowrap' }}>
            <Col span={8} ><Input placeholder="Enter a word"/></Col>
            <Col span={8} offset={2}><Input placeholder="Translation"/></Col>
            <Col span={8} offset={2}>
                <Select placeholder="Select a category"
                        style={{ width: 149 }}
                        onBlur={translateWord}
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
