import {russian, english, kyrgyzstan} from '../../language/index'

// default language
const languageState = {
  language: russian,
  count: 0
}

export const languageReducer = (state = languageState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      switch (action.language) {
        case 'english':
          return {language: english, count: 1}
        case 'russian':
          return {language: russian, count: 0}
        case 'kyrgyzstan':
          return {language: kyrgyzstan, count: 2}
        default:
          return state
      }
    default:
      return state
  }
}
