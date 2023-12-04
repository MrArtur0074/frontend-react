import React, {useState} from 'react'
import {HeaderMenu} from './header.jsx'
import {russian} from '../language/index.js'

export const PageTemplate = ({children}) => {
  const [language, changeLanguage] = useState(russian)

  return (
    <div>
      <HeaderMenu language={language} changeLanguage={changeLanguage} />
      {children}
    </div>
  )
}
