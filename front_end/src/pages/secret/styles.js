import styled from "styled-components";

export const Container = styled.section`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

export const WrapperContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
`;

export const Image = styled.img`
    width:80%;
    border-radius:0.3rem;
    box-shadow:5px 5px 15px black;
    margin:auto; 
`;

export const Text = styled.p`
    font-size: 1.5rem;
    margin:1rem;
`;

export const BtnBack = styled.input`
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