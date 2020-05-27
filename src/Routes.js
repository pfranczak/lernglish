import React, { useContext, useState } from 'react';
import HomeFilled from "@ant-design/icons/es/icons/HomeFilled";
import { ROUTES } from "./consts";
import Main from "./components/main/Main";
import Words from "./components/words/Words";
import Quiz from "./components/quiz/Quiz";
import { AuthContext } from "./firebase/auth";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
import Divider from "antd/es/divider";
import { Spin } from "antd";

const Routes = () => {
    const [site, setSite] = useState(ROUTES.MAIN);
    const { user } = useContext(AuthContext);

    const handleChange = (site) => {
        setSite(site)
    };

    const renderSite = () => {
        switch (site) {
            case ROUTES.MAIN:
                return <Main onSelect={handleChange}/>;
            case ROUTES.WORDS:
                return <Words/>;
            case ROUTES.QUIZ:
                return <Quiz/>;
        }
    };

    const renderComponents = () => {
        if (user === 'loading') {
            return <Spin size="large"/>;
        } else if (user === null) {
            return <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Signup/>
                <Divider type="vertical"/>
                <Login/>
            </div>
        } else {
            return <>
                <HomeFilled className="home" onClick={() => setSite(ROUTES.MAIN)}/>
                {renderSite()}
            </>
        }
    };

    return (
        <>
            {renderComponents()}
        </>
    );
};

export default Routes;
