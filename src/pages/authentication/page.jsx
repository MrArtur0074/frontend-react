import {PageTemplate} from '@/ui'
import {useSelector} from 'react-redux'
import UserAuth from '../../ui/auth/userAuth.jsx'
import FormLogin from '../../ui/form-login.jsx'

export function AuthenticationPage() {
  const language = useSelector(state => state.language.language.pages.login)
  const isLoggedIn = useSelector(state => !!state.auth.authData.accessToken)

  return (
    <PageTemplate>{isLoggedIn ? <UserAuth language={language} /> : <FormLogin language={language} />}</PageTemplate>
  )
}
