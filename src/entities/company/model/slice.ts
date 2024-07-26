import { createSlice } from '@reduxjs/toolkit'
import { Company } from '../types'

const initialState: { value: Company[] } = {
  value: [
    {
      color: '#3CC74E',
      workNumber: '01',
      name: 'Google',
      position: 'Interaction Designer',
      description: 'I currently am the lead designer on the interaction design team for Google Play.'
    },
    {
      color: '#609BFF',
      workNumber: '02',
      name: 'Facebook',
      position: 'Product Designer',
      description: "I've worked on a wide variety of internal tools for facebook over the past 6 years."
    },
    {
      color: '#E95D90',
      workNumber: '03',
      name: 'Dribbble',
      position: 'Graphic Designer',
      description:
        'I started my design career with Dribbble. I was in charge of creating illustrations for the platform.'
    }
  ]
}

const companySlice = createSlice({
  name: 'companySlice',
  initialState: initialState,
  reducers: {}
})

export { companySlice }
