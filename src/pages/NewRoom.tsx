import { Fragment } from "react";
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import  '../styles/auth.scss';
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
export function NewRoom() {
    return (
        <Fragment>
            <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Perguntas e Respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                        <h2>Criar uma nova sala</h2>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Novo da Sala" />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente ? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
            </div>
        </Fragment>
    )
}