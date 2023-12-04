import {PageTemplate} from '@/ui'
import {TextInput, PasswordInput, Paper, Title, Container, Button, Modal} from '@mantine/core'
import {useSelector} from 'react-redux'
import {useForm} from '@mantine/form'
import axios from 'axios'
import Endpoints from '../../api/endpoints.js'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export function RegistrationPage() {
  const language = useSelector(state => state.language.language.pages.registration)
  const [opened, setOpened] = useState({
    opened: false,
    title: language.modal.errorServer.title,
    content: language.modal.errorServer.content,
    error: false
  })

  const form = useForm({
    initialValues: {
      email: '',
      login: '',
      user: {
        firstName: '',
        lastName: ''
      },
      password: '',
      confirmPassword: '',
      termsOfService: false
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      login: value => (value.length > 2 && value.length < 15 ? null : 'Login must be between 3 and 15 characters'),
      user: {
        firstName: value => (value.length > 2 ? null : 'Name must have at least 2 letters')
      },
      password: value => (value.length > 5 ? null : 'Password must have at least 5 letters'),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null)
    }
  })

  const history = useNavigate()

  const registrationUser = async data => {
    try {
      const send = {
        username: data.login,
        email: data.email,
        password: data.password,
        firstName: data.user.firstName,
        lastName: data.user.lastName
      }
      let response = await axios.post(`${Endpoints.AUTH.REGISTER}`, send)

      if (response.status == 200 || response.status == 201) {
        setOpened({
          opened: true,
          title: language.modal.successReg.title,
          content: language.modal.successReg.content,
          error: false
        })
      } else {
        setOpened({
          opened: true,
          title: language.modal.errorData.title,
          content: language.modal.errorData.content,
          error: true
        })
      }
    } catch (e) {
      setOpened({
        opened: true,
        title: language.modal.errorServer.title,
        content: language.modal.errorServer.content
      })
    }
  }

  function closeRegistration() {
    if (!opened.error) history('/login')
    setOpened({opened: false, title: opened.title, content: opened.content, error: false})
  }

  return (
    <PageTemplate>
      <form onSubmit={form.onSubmit(values => registrationUser(values))}>
        <Container size={420} my={40}>
          <Title align="center" sx={theme => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}>
            {language.title}
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              {...form.getInputProps('login')}
              label={language.inputs.login}
              placeholder={language.inputs.loginPlaceholder}
              mt="md"
            />
            <br />
            <TextInput
              {...form.getInputProps('user.firstName')}
              label={language.inputs.firstName}
              placeholder={language.inputs.firstNamePlaceholder}
            />
            <br />
            <TextInput
              {...form.getInputProps('user.lastName')}
              label={language.inputs.lastName}
              placeholder={language.inputs.lastNamePlaceholder}
            />
            <br />
            <TextInput
              {...form.getInputProps('email')}
              label={language.inputs.email}
              placeholder={language.inputs.emailPlaceholder}
            />
            <PasswordInput
              {...form.getInputProps('password')}
              label={language.inputs.password}
              placeholder={language.inputs.passwordPlaceholder}
              mt="md"
            />
            <PasswordInput
              {...form.getInputProps('confirmPassword')}
              label={language.inputs.confirmPassword}
              placeholder={language.inputs.passwordPlaceholder}
              mt="md"
            />
            <Button type="submit" fullWidth mt="xl">
              {language.inputs.signUp}
            </Button>
          </Paper>
        </Container>
      </form>
      <Modal opened={opened.opened} onClose={closeRegistration} title={opened.title}>
        {opened.content}
      </Modal>
    </PageTemplate>
  )
}
