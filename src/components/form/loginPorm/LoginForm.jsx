import React from 'react';
import { Field } from 'redux-form'
import { Input } from '../../common/FormValidationControl/FormControl';
import { required, maxLengthCreator } from '../../../utils/validators/validator';



const maxLength20 = maxLengthCreator(20);
const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength20]}
                    placeholder={"email"}
                    component={Input}
                    name={"email"} />
            </div>
            <div>
                <Field
                    validate={[required, maxLength20]}
                    placeholder={"password"}
                    component={Input}
                    type = "password"
                    name={"password"} />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    component={Input}
                    name={"rememberMe"} />remember me
            </div>
            <button>login</button>
        </form>
    </div>

};

export default LoginForm;