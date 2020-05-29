import React from 'react';
import "./Login.scss";
import Button from "../../molecules/Button/Button";
import Row from "../../atoms/Row/Row";
import FormGroup from "../../molecules/FormGroup/FormGroup";
import Input from "../../molecules/Input/Input";
import {ReactComponent as Logo} from "../../../assets/svg/logo.svg";
import { useReactiveForm } from "use-reactive-form";
import { object, string } from "yup";

const Login = () => {

  console.log('login')
  const fields = {
    login: '',
    password: ''
  };

  const schema = object().shape({
    login: string().min(4, 'Вас не могут звать меньше 4 букв').required('Обязательное поле'),
    password: string().required('Обязательное поле')
  });
  const config = {fields, schema, validateOnChange: true}
  const {values, validate, getErrors, ref} = useReactiveForm(config);

  const onSubmit = () => {
    if (validate()) {
      console.log(values())
    } else {
      console.log(getErrors())
    }
  };



  return (
    <div className="page-login">
      <Logo/>

      <form className="login-form" ref={ref}>
        <h1 className="login-form__title">Войдите</h1>
        <Row>
          <FormGroup>
            <Input placeholder="Логин" name='login' type="text" defaultValue={values().login}/>
            <p>{getErrors().login && getErrors().login.error}</p>
          </FormGroup>
        </Row>

        <Row>
          <FormGroup>
            <Input placeholder="Пароль" name='password' type="password"/>
          </FormGroup>
        </Row>

        <Button label="Войти" handler={onSubmit}/>
      </form>

    </div>
  );
};

export default Login;