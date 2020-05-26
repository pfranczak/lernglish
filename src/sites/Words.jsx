import React, { useState } from 'react';
import { Row, Col, Input, Select } from 'antd';
import * as cheerio from 'cheerio';
import * as axios from 'axios';

const { Option } = Select;

const Words = () => {
    const [translations, setTranslations] = useState(null);
    const [selectedWords, setSelectedWords] = useState([]);

    const translateWord = ({ target: { value } }) => {
        axios.get(`https://pl.bab.la/slownik/angielski-polski/${value}`).then((response) => {
            const $ = cheerio.load(response.data);
            let translations = $($('.sense-group-results')[0]).text().replace(/\r?\n|\r|\s/g, ' ').trim()
                .replace(/\s/g, ',');
            translations = translations.split(',').filter(a => !!a);
            setTranslations(translations);
            setSelectedWords(translations)
        }).catch(e => console.log(e));
    };

    return (
        <Row style={{ flexWrap: 'nowrap' }}>
            <Col span={8}><Input placeholder="Enter a word" onBlur={translateWord}/></Col>
            <Col span={8} offset={2}>
                <Select mode="tags"
                        placeholder="Translations"
                        style={{ width: 250 }}
                        tokenSeparators={[',']}
                        value={selectedWords}
                        onChange={setSelectedWords}
                >
                    {translations && translations.map(option => <Option key={option} value={option}>{option}</Option>)}
                </Select></Col>
            <Col span={8} offset={2}>
                <Select mode="multiple"
                        style={{ width: 250 }}
                        value={selectedWords}
                        onChange={setSelectedWords}
                >
                    {translations && translations.map(option => <Option key={option} value={option}>{option}</Option>)}
                </Select>
            </Col>
        </Row>
    );
};

export default Words;
