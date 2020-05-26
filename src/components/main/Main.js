import React from 'react';
import PropTypes from 'prop-types';
import PlusCircleFilled from "@ant-design/icons/es/icons/PlusCircleFilled";
import PlayCircleFilled from "@ant-design/icons/es/icons/PlayCircleFilled";
import SettingFilled from "@ant-design/icons/es/icons/SettingFilled";
import PieChartFilled from "@ant-design/icons/es/icons/PieChartFilled";
import { ROUTES } from "../../consts";

const Card = ({ children, site, onSelect }) => {
    const style = {
        width: 130,
        height: 175,
        border: '1px solid rgba(0, 0, 0, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    };

    return (
        <div style={style} className="card" onClick={() => onSelect(site)}>
            {children}
        </div>
    )
};

const Main = ({onSelect}) => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '135px 135px', gridTemplateRows: '180px 180px', margin: '0 auto'}}>
            <Card site={ROUTES.WORDS} onSelect={onSelect}><PlusCircleFilled/><div>ADD WORD</div></Card>
            <Card site={ROUTES.QUIZ} onSelect={onSelect}><PlayCircleFilled/><div>QUIZ</div></Card>
            <Card site={ROUTES.WORDS} onSelect={onSelect}><SettingFilled/><div>SETTINGS</div></Card>
            <Card site={ROUTES.WORDS} onSelect={onSelect}><PieChartFilled/><div>STATS</div></Card>
        </div>
    );
};

export default Main;
