import {TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button} from '@mantine/core'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {loginUser} from '../store/actions/actionCreators.js'

export default function FormLogin(props) {
  const dispatch = useDispatch()
  const [identifier, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const authData = useSelector(state => state.auth.authData.error)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(loginUser({identifier, password}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container size={420} my={40}>
        <Title align="center" sx={theme => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}>
          {props.language.title}
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          {props.language.description}{' '}
          <Anchor href="#" size="sm" onClick={event => event.preventDefault()}>
            {props.language.textRegistration}
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label={props.language.inputs.login}
            placeholder={props.language.inputs.loginPlaceholder}
            required
            onChange={e => setLogin(e.target.value)}
            error={authData ? 'Неправильный логин или пароль' : ''}
          />
          <PasswordInput
            label={props.language.inputs.password}
            placeholder={props.language.inputs.passwordPlaceholder}
            required
            mt="md"
            onChange={e => setPassword(e.target.value)}
            error={authData ? 'Неправильный логин или пароль' : ''}
          />
          <Group position="apart" mt="lg">
            <Checkbox label={props.language.inputs.remember} sx={{lineHeight: 1}} />
            <Anchor onClick={event => event.preventDefault()} href="#" size="sm">
              {props.language.inputs.forgot}
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            {props.language.inputs.signIn}
          </Button>
        </Paper>
      </Container>
    </form>
  )
}
