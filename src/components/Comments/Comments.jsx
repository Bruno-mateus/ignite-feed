import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import commentStyle from './Comments.module.css'


export function Comments({ content }) {
  return (
    <div className={commentStyle.comment}>
      <Avatar src="https://avatars.githubusercontent.com/u/2254731?v=4" />

      <div className={commentStyle.commentBox}>
        <div className={commentStyle.commentContent}>
          <header>
            <div className={commentStyle.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}