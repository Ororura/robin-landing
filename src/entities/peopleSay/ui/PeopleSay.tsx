import { FC } from 'react'
import Image from 'next/image'
import s from './PeopleSay.module.scss'

type Props = {
  img: string
  text: string
  name: string
  position: string
}

const PeopleSay: FC<Props> = ({ img, name, text, position }) => {
  return (
    <div className={s.container}>
      <div className={s.image}>
        <Image src={img} fill objectFit='cover' alt={img} />
      </div>
      <div className={s.infoContainer}>
        <p className={s.text}>{text}</p>
        <p className={s.name}>{name}</p>
        <p className={s.position}>{position}</p>
      </div>
    </div>
  )
}

export { PeopleSay }
