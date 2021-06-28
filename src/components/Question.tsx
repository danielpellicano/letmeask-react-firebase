import { ReactNode } from 'react'
import '../styles/question.scss'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
}

export function Question({content, author, children}: QuestionProps) {
    return (
        <div className="question">
            <p>{content}</p>
            <div className="user-info">
                <div>
                <img src={author.avatar} alt={author.name} />
                <span>{author.name}</span>
                </div>
                <div className="btns-children">
                    {children}
                </div>
            </div>

        </div>
    )
}