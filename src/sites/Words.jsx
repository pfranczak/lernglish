import React, { useContext, useState, useEffect } from 'react';
import { Row, Col, Input, Select } from 'antd';
import * as cheerio from 'cheerio';
import * as axios from 'axios';
import FirebaseContext from "../firebase/context";

const { Option } = Select;

const Words = () => {
    const [translations, setTranslations] = useState(null);
    const [selectedWords, setSelectedWords] = useState([]);
    const [categories, setCategories] = useState(null);
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        firebase.getCategories().then((categories) => {
            setCategories(categories);
        });
    }, [firebase]);

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
            <Col><Input placeholder="Enter a word" onBlur={translateWord}/></Col>
            <Col offset={2}>
                <Select mode="tags"
                        placeholder="Translations"
                        style={{ width: 250 }}
                        tokenSeparators={[',']}
                        value={selectedWords}
                        onChange={setSelectedWords}
                >
                    {translations && translations.map(option => <Option key={option} value={option}>{option}</Option>)}
                </Select></Col>
            <Col offset={2}>
                <Select
                        style={{ width: 250 }}
                        placeholder="Category"
                >
                    {categories && categories.map(({id, name}) => <Option key={id} value={name}>{name}</Option>)}
                </Select>
            </Col>
        </Row>
    );
};

export default Words;
