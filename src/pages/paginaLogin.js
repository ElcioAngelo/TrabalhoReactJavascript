import './paginaLoginStyle.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import * as z from 'zod';

const Login = () => {
    const loginScheme = z.object({
        email: z.string().min(8),
        password: z.string().min(8)
    })

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const arrumarInput = (e) => {
        const {name, value} = e.target 
        const newData = {
            ...formData,
            [name]: value
        }
        setFormData(newData);
        setLoginValido(newData.email.lenght >= 8 && newData.password.lenght >= 8)
    }
    const [loginValido, setLoginValido] = useState(false)
    const [acessoHome, setAcessoHome] = useState(false)
    
        const arrumarLogin = () => {
        try{
            const dataVerificada = loginScheme.parse(formData)
            console.log(`Credenciais Corretas: ${dataVerificada.email}`)
            setAcessoHome(true)
        }catch(error){
            console.error(`Erro na validação das credenciais: ${error}`)
        }
    }

    return (
        <div>
        <div className="login_container">
            <h2 className="loginTitle">Login</h2>
                <input  className="textBox" type="email" name="email" placeholder='Insira Seu Email!' value={formData.email} onChange={arrumarInput}/>
                <input className="textBox" type="password" name="password" placeholder='Insira Sua Senha!' value={formData.password} onChange={arrumarInput}/>
                <p className="register">Ainda não é um membro?<a href="https//:www.google.com">Inscreva-se</a></p>
                <button className="loginButton" onClick={arrumarLogin}>Login</button>
                <Link to="http://localhost:3000/home">
                <button className="homeButton" disabled={!acessoHome}>Acessar Home</button>
                </Link>
            </div>
        </div>
    )
}


export default Login 