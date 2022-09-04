import { useState } from "react";
import { BtnRegister, Container, Form, Label, SubmitInput, TextInput, Title } from "./styles";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage(){
    const [dataUser, setDataUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function sendLogin(e){
        e.preventDefault();
        axios.post('http://localhost:3500/login', dataUser)
        .then(({data})=>{
            dispatch({type:'ADD_TOKEN',data:data.token})
            navigate('/secret');
        })
    }

    return(
        <Container>
            <Form onSubmit={(e)=>sendLogin(e)}>
                <Title>Login</Title>
                <Label htmlFor="email">Email</Label>
                <TextInput id="email" onChange={(e)=>setDataUser({...dataUser, email:e.target.value})}/>
                <Label htmlFor="password">Senha</Label>
                <TextInput id="password" onChange={(e)=>setDataUser({...dataUser, password:e.target.value})}/>
                <SubmitInput type="submit" />
            </Form>
            <Link to="/register">
                <BtnRegister type="button" value="Cadastrar-se"/>
            </Link>
        </Container>
    );
};