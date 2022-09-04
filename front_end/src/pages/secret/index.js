import { BtnBack, Container, Image, Text, WrapperContent } from "./styles";
import { useSelector } from 'react-redux';
import PicapauNoiado from '../../assets/picapauNoia.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function SecretPage(){
    const [permission,setPermission] = useState(false);
    const states = useSelector(state=>state);
    
    useEffect(()=>verifyToken(),[]);
    
    function verifyToken(){
        const token = {"x-access-token":states.Token.value};
        axios.get('http://localhost:3500/testjwt',{headers:token})
        .then(({data})=>setPermission(data.auth));
    }
    
    return(
        <Container>
            <WrapperContent>
                {permission ?
                secretContent()
                :
                blockedContent()}
            </WrapperContent>
            <Link to="/">
                <BtnBack type="button" value="Voltar ao login"/>
            </Link>
        </Container>
    );
}

function secretContent(){
    return(
        <>
            <Text>
                Psicólogo: Kaike Nóia não existe!<br/>
                Kaike Nóia:
            </Text>
            <Image src={PicapauNoiado} alt="noia"/>
        </>
    );
};

function blockedContent(){
    return(
        <>
            <Text status={false}>Você não tem direito a ver este conteúdo</Text>
        </>
    );
};