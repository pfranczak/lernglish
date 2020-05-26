import React, {useState} from 'react';
import './App.css';
import Words from "./sites/Words";
import Quiz from "./components/quiz/Quiz";
import Main from "./components/main/Main";
import { ROUTES } from "./consts";
import HomeFilled from "@ant-design/icons/es/icons/HomeFilled";

function App() {
    const [site, setSite] = useState(ROUTES.MAIN);

    const handleChange = (site) => {
        setSite(site)
    };

    const renderSite = () => {
        switch(site) {
            case ROUTES.MAIN: return <Main onSelect={handleChange}/>;
            case ROUTES.WORDS: return <Words/>;
            case ROUTES.QUIZ: return <Quiz/>;
        }
    };

    return (
        <div className="App">
            <HomeFilled className="home" onClick={() => setSite(ROUTES.MAIN)}/>
            {renderSite()}
        </div>
    );
}

export default App;
