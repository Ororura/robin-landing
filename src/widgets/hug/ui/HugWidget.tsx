import { FC } from 'react'
import s from './HugWidget.module.scss'
import { CBREIcon, EpiqIcon, FIcon, LeafIcon } from './assets'

const HugWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.containerItem}>
        <CBREIcon />
      </div>
      <div className={s.containerItem}>
        <EpiqIcon />
      </div>
      <div className={s.containerItem}>
        <FIcon />
      </div>
      <div className={s.containerItem}>
        <LeafIcon />
      </div>
    </div>
  )
}

export { HugWidget }
