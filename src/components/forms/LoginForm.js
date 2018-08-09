import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginFormg extends Component {
	state = {
		data: {},
		loading: false,
		errors: {}
	}

    render() {
        return (
            <Form>
            	<Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginFormg;
