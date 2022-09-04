import { useState } from "react";
import { BtnRegister, Container, Form, Label, SubmitInput, TextInput, Title } from "./styles";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage(){
    const [dataUser, setDataUser] = useState({});
    const navigate = useNavigate();

    function sendRegister(e){
        e.preventDefault();
        axios.post('http://localhost:3500/register', dataUser)
        .then(({data})=>{
            if(data.status)navigate('/');
        })
    }

    return(
        <Container>
            <Link to="/">
                <BtnRegister type="button" value="Já tem conta ?"/>
            </Link>
            <Form onSubmit={(e)=>sendRegister(e)}>
                <Title>Cadastro</Title>
                <Label htmlFor="email">Email</Label>
                <TextInput id="email" onChange={(e)=>setDataUser({...dataUser, email:e.target.value})}/>
                <Label htmlFor="password">Senha</Label>
                <TextInput id="password" onChange={(e)=>setDataUser({...dataUser, password:e.target.value})}/>
                <SubmitInput type="submit" />
            </Form>
        </Container>
    );
};