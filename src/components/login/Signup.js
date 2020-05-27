import React, { useContext } from 'react';
import { Input, Typography } from "antd";
import Button from "antd/es/button/button";
import FirebaseContext from "../../firebase/context";

const { Title } = Typography;

const Signup = props => {
    const firebase = useContext(FirebaseContext);

    const signUp = React.useCallback(async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        await firebase.signUp(email.value, password.value);
    }, [firebase]);

    return (
        <div>
            <Title level={4}>Sign up</Title>
            <form onSubmit={signUp}>
                <Input placeholder="Email" htmlType="email" name="email"/>
                <Input placeholder="Password" htmlType="password" name="password" style={{margin: "7px 0"}}/>
                <Button htmlType="submit">Sign up</Button>
            </form>
        </div>
    );
};

export default Signup;
