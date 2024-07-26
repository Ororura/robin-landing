'use client'
import { FC } from 'react'
import { Company } from 'entities/company/ui'
import { useAppSelector } from 'app/providers/store'
import s from './Companies.module.scss'

const CompaniesWidget: FC = () => {
  const companiesSlice = useAppSelector(state => state.company.value)
  return (
    <div className={s.container}>
      <p className={s.work}>work experience</p>
      <p className={s.companiesText}>Companies I have worked for in the past</p>
      <div className={s.companyEntityContainer}>
        {companiesSlice &&
          companiesSlice.length !== 0 &&
          companiesSlice.map((value, index) => (
            <Company
              key={index}
              color={value.color}
              workNumber={value.workNumber}
              name={value.name}
              position={value.position}
              description={value.description}
            />
          ))}
      </div>
    </div>
  )
}

export { CompaniesWidget }
