import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import '../styles/room.scss';


type RoomParams = {
    id: string;
}

export function AdminRoom() {
const params = useParams<RoomParams>();
const roomId = params.id;
const { title, questions } = useRoom(roomId);
const history = useHistory();

async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
    })

    history.push('/')
}

async function handleDeleteQuestion(questionID: string) {
    if (window.confirm('Você tem certeza que deseja excluir esta pergunta ?')) {
        await database.ref(`rooms/${roomId}/questions/${questionID}`).remove();
    }
}


async function handleCheckQuestionAnswered(questionID: string) {
    if (window.confirm('Você tem certeza que deseja excluir esta pergunta ?')) {
        await database.ref(`rooms/${roomId}/questions/${questionID}`).update({
            isAnswered: true,
        });
    }
}

async function handleHighlightQuestion(questionID: string) {
    if (window.confirm('Você tem certeza que deseja excluir esta pergunta ?')) {
        await database.ref(`rooms/${roomId}/questions/${questionID}`).update({
            isHighLighted: true,
        });
    }
}

 
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}  />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>{title}</h1>
                    { questions.length > 0 && <span>{questions.length} perguntas</span>}
                </div>


                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question key={question.id} content={question.content} author={question.author}>
                                 <button type="button" onClick={() => handleCheckQuestionAnswered(question.id) }>
                                    <img src={checkImg} alt="Marcar como respondida" />
                                </button>
                                <button type="button" onClick={() => handleHighlightQuestion(question.id) }>
                                    <img src={answerImg} alt="Dar destaque a pergunta" />
                                </button>
                                <button type="button" onClick={() => handleDeleteQuestion(question.id) }>
                                    <img src={deleteImg} alt="Deletar pergunta" />
                                </button>
                            </Question>
                            );
                    })}
                </div>

              
            </main>
        </div>
    )
}