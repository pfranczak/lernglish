import React, { useContext } from 'react';
import { Input, Typography } from "antd";
import Button from "antd/es/button/button";
import FirebaseContext from "../../firebase/context";
const { Title } = Typography;

const Login = props => {
    const firebase = useContext(FirebaseContext);

    const logIn = React.useCallback(async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        await firebase.logIn(email.value, password.value);
    }, [firebase]);

    return (
        <div>
            <Title level={4}>Log in</Title>
            <form onSubmit={logIn}>
                <Input placeholder="Email" htmlType="email" name="email"/>
                <Input placeholder="Password" htmlType="password" name="password" style={{margin: "7px 0"}}/>
                <Button htmlType="submit">Log in</Button>
            </form>
        </div>
    );
};

export default Login;
