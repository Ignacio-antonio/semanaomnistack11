import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    return (
        <div className="div-register-container">
            <div className="divcontent">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className='back-link' to="/register">
                        <FiArrowLeft size ={16} color="#E02041"/>   
                        Não tenho cadastro
                    </ Link>
                </section>

                <form>
                    <input placeHolder="Nome Da ONG" />
                    <input type="email" placeHolder="E-mail" />
                    <input placeHolder="Whatsapp" />

                    <div className="input-group">
                        <input placeHolder="Cidade" />
                        <input placeHolder="UF" style={{ width: 80 }} />
                    </div>

                    <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}