import { FC } from 'react'
import Image from 'next/image'
import s from './Website.module.scss'

type Props = {
  img: string
  name: string
  desc: string
}

const Website: FC<Props> = ({ img, name, desc }) => {
  return (
    <div className={s.container}>
      <Image src={img} alt={img} width={636} height={620} />
      <div className={s.containerInfo}>
        <p className={s.name}>{name}</p>
        <p className={s.description}>{desc}</p>
      </div>
    </div>
  )
}

export { Website }
