import AvatarStyles from './Avatar.module.css';

export function Avatar({ src, hasBorder }) {

  return (
    <img className={hasBorder ? AvatarStyles.avatarHasBorder : AvatarStyles.avatar}
      src={src} />
  )
}