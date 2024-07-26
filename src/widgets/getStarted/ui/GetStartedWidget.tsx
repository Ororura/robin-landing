'use client'
import { FC, FormEventHandler, useCallback } from 'react'
import s from './GetStartedWidget.module.scss'

const GetStartedWidget: FC = () => {
  const handler = useCallback<FormEventHandler>(e => {
    e.preventDefault()
  }, [])

  return (
    <div className={s.container}>
      <div>
        <p className={s.getStartText}>Let’s get started</p>
        <p className={s.desc}>Now that you know a lot about me, let me know if you are interested to work with me.</p>
      </div>
      <form onSubmit={handler} className={s.formInput}>
        <p>Name</p>
        <input type='text' />
        <p>Email</p>
        <input type='text' />
        <p>Message</p>
        <textarea id={s.messageInput} />
        <button type='submit'>Let’s get started</button>
      </form>
    </div>
  )
}

export { GetStartedWidget }
