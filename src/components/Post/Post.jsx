import { Avatar } from '../Avatar/Avatar';
import { Comments } from '../Comments/Comments';
import postStyles from './Post.module.css';

export function Post() {
  return (
    <article className={postStyles.post}>
      <header>
        <div className={postStyles.author}>
          <Avatar src='https://xesque.rocketseat.dev/users/avatar/profile-85559fce-1ed4-43c0-a678-c2365a338b87-1636412686401.jpg' hasBorder={true} />
          <div className={postStyles.authorInfo}>
            <strong>Bruno Mateus</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="21 de Maio as 08:13h" dateTime="2022-05-21 08:13:44">Públicado há 1h</time>
      </header>
      <div className={postStyles.content}>
        <p> Fala galeraa 👋</p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#"> jane.design/doctorcare</a></p>

        <p>
          <a href="#"> #novoprojeto</a>{' '}
          <a href="#">#nlw</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
      <form className={postStyles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={postStyles.commentList}>
        <Comments />
        <Comments />
        <Comments />
      </div>
    </article>
  )
}