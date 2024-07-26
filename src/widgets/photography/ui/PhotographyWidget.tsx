import { FC } from 'react'
import Image from 'next/image'
import s from './PhotographyWidget.module.scss'

const PhotographyWidget: FC = () => {
  return (
    <div className={s.container}>
      <div>
        <p className={s.photography}>Photography</p>
        <p className={s.desc}>
          Here is a collection of my best travel pictures that I took while traveling places all around the world.
        </p>
        <ul className={s.countries}>
          <li id={s.chosen}>
            <p>ITALY</p>
          </li>
          <li>
            <p>AUSTRALIA</p>
          </li>
          <li>
            <p>INDIA</p>
          </li>
          <li>
            <p>BRAZIL</p>
          </li>
        </ul>
        <div className={s.photoContainer}>
          <Image src='/Rectangle 47.png' alt='Rectangle 47.png' width={306} height={420} />
          <Image src='/Rectangle 48.png' alt='Rectangle 47.png' width={306} height={420} />
          <Image src='/Rectangle 49.png' alt='Rectangle 47.png' width={306} height={420} />
          <Image src='/Rectangle 50.png' alt='Rectangle 47.png' width={306} height={420} />
        </div>
      </div>
    </div>
  )
}

export { PhotographyWidget }
