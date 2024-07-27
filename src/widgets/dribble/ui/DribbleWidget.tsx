import { FC } from 'react'
import Image from 'next/image'
import s from './DribbleWidget.module.scss'

const DribbleWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.containerInfo}>
        <p className={s.name}>Dribble</p>
        <p className={s.desc}>
          Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are
          appreciated.
        </p>
        <p className={s.follow}>Follow me on Dribbble</p>
      </div>
      <div className={s.imageContainer}>
        <Image src='/dribble.png' fill objectFit='cover' alt='dribble' />
      </div>
    </div>
  )
}

export { DribbleWidget }
