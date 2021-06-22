import { Fragment } from "react";
import { auth, firebase } from "../services/firebase";
import { useHistory } from "react-router";
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg'
import  '../styles/auth.scss';
import { Button } from "../components/Button";
export function Home() {
    const history = useHistory();
        function handleCreateRoom() {
            const provider = new firebase.auth.GoogleAuthProvider();

            auth.signInWithPopup(provider).then(result => {
                console.log(result);
            })
        

           // history.push('/rooms/new')
}
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcon} alt="logo do google" />Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Salvar sala</Button>
                    </form>
                </div>
            </main>
            </div>
        </Fragment>
    )
}