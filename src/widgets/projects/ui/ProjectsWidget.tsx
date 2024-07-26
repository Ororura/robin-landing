import { FC } from 'react'
import { Website } from 'entities/website/ui'
import s from './ProjectWidget.module.scss'

const ProjectWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.itemColumn}>
        <p className={s.projectsText}>MY PROJECTS</p>
        <p className={s.workText}>Work that I’ve done for the past 8 years</p>
        <Website
          img='/restaurant.png'
          name='Restaurant Website Design'
          desc='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
        />
        <Website
          img='/photo.png'
          name='Restaurant Website Design'
          desc='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
        />
      </div>
      <div>
        <Website
          img='/phone2.png'
          name='Restaurant Website Design'
          desc='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
        />
        <Website
          img='/mockup.png'
          name='Restaurant Website Design'
          desc='I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.'
        />
        <div className={s.viewContainer}>
          <p className={s.viewProjects}>VIEW ALL PROJECTS</p>
        </div>
      </div>
    </div>
  )
}

export { ProjectWidget }
