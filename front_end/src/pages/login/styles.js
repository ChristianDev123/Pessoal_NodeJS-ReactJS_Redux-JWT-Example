import styled from "styled-components";

export const Container = styled.section`
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color:var(--main-color);
    font-size: 4rem;
    margin:1rem;
`;

export const TextInput = styled.input`
    background:"#fcfcfc";
    border:1px solid var(--main-color);
    margin:0.3rem;
    height:1.5rem;
    width:50%;
`;

export const SubmitInput = styled.input`
    background: #fcfcfc;
    padding:0.5rem;
    border:2px solid var(--main-color);
    border-radius:0.3rem;
    margin:1rem;
    font-size: 1.2rem;
    font-weight:bold;
    color:var(--main-color);
    transition:.5s;
    &:hover{
        background: var(--main-color);
        color:#fff;
    }
`;

export const Label = styled.label`
    font-size:1.4rem;
    text-align:left;
    width:50%;
`;

export const BtnRegister = styled.input`
    background: #fcfcfc;
    padding:0.5rem;
    border:2px solid var(--main-color);
    border-radius:0.3rem;
    margin:1rem;
    font-size: 1.2rem;
    font-weight:bold;
    color:var(--main-color);
    transition:.5s;
    &:hover{
        background: var(--main-color);
        color:#fff;
    }
`;

export const Form = styled.form`
    border:0.4rem solid var(--main-color);
    width:70%;
    height:40%;
    display:flex;
    border-radius:1rem;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;