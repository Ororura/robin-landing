import { FC } from 'react'
import s from './Footer.module.scss'
import { MediumLogo } from '../icons/mediumLogo'
import { TwitterLogo } from '../icons/twitter'
import { DribbleLogo } from '../icons/dribble'
import { LinkedinLogo } from '../icons/linkedin'

const Footer: FC = () => {
  return (
    <footer className={s.container}>
      <div>
        <MediumLogo />
        <div className={s.socialLinks}>
          <TwitterLogo />
          <DribbleLogo />
          <LinkedinLogo />
        </div>
        <p className={s.copyright}>Not Copyright 2024 • Robin Williams. Webflow cloneable</p>
      </div>
      <div className={s.links}>
        <div className={s.column}>
          <p>Home</p>
          <p>About</p>
          <p>Work</p>
          <p>Process</p>
        </div>
        <div className={s.column}>
          <p>Store</p>
          <p>Blog</p>
          <p>Reading List</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
