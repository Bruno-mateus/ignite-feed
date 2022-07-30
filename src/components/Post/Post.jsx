import { Avatar } from '../Avatar/Avatar';
import { Comments } from '../Comments/Comments';
import postStyles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';





export function Post({ Author, PublishedAt, Content }) {
  const publishedDateFormatted = format(PublishedAt, "dd 'de' LLLL 'ás' hh':'mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(PublishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }
  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeleteOne)
  }

  return (
    <article className={postStyles.post}>
      <header>
        <div className={postStyles.author}>
          <Avatar src={Author.avatarUrl} hasBorder={true} />
          <div className={postStyles.authorInfo}>
            <strong>{Author.name}</strong>
            <span>{Author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={PublishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={postStyles.content}>
        {
          Content.map(post => {
            if (post.type === "paragraph") {
              return <p key={post.content}>{post.content}</p>
            } else if (post.type === "link") {
              return <p key={post.content} ><a href="#">{post.content}</a></p>
            }
          })
        }


      </div>
      <form onSubmit={handleCreateNewComment} className={postStyles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          placeholder="Escreva um comentário..."
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={postStyles.commentList}>
        {
          comments.map(comment => {

            return (
              <Comments
                key={comment}
                onDeleteComment={deleteComment}
                content={comment} />)
          }
          )

        }

      </div>
    </article >
  )
}