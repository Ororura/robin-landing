import { FC } from 'react'
import { PeopleSay } from 'entities/peopleSay/ui'
import s from './PeopleSayWidget.module.scss'

const PeopleSayWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.gridContainer}>
        <div>
          <p className={s.peopleSatText}>This is what people say about me</p>
          <p className={s.descPeopleSay}>
            Here are a few lines from people who I have worked with over the past 8+ years in my design career.
          </p>
          <p className={s.seeAll}>See all testimonials</p>
        </div>
        <div>
          <PeopleSay
            img='/people1.png'
            text='‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’'
            name='Richard Owens'
            position='CEO, Company 1'
          />
          <PeopleSay
            img='/people2.png'
            text='‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this caliber.’’'
            name='Emily Parker'
            position='CEO, Company 2'
          />
          <PeopleSay
            img='/people3.png'
            text='‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astounding. I love the focus, passion and attention to detail in the design.’’'
            name='Vincent  Rudd'
            position='CEO, Company 3'
          />
        </div>
      </div>
    </div>
  )
}

export { PeopleSayWidget }
