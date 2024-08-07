import { FC } from 'react'

const MotionIcon: FC<{ color?: string }> = ({ color }) => {
  return (
    <svg color={color} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='16' cy='16' r='15' stroke='#5221E6' strokeWidth='2' strokeDasharray='10 10' />
      <path d='M21 16L13.5 20.3301L13.5 11.6699L21 16Z' fill='#5221E6' />
    </svg>
  )
}

export { MotionIcon }
