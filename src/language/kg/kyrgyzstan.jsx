import {NavLink} from 'react-router-dom'

export const kyrgyzstan = {
  header: {
    links: ['Home', 'Games'],
    login: 'Log in',
    registration: 'Sign up'
  },
  pages: {
    mainpage: {
      text: 'Welcome!'
    },
    games: {
      list: [
        'Stone game',
        'Room game',
        'Cows and bulls',
        'Nim numbers',
        'Number systems',
        'Programming game',
        'Trade game'
      ],
      title: 'games',
      tabs: ['Games', 'Leaderboard'],
      leaderboard: {
        name: 'name',
        score: 'score',
        game1: 'Game of stones',
        game2: 'Number system',
        game3: 'Number match',
        game4: 'Build Path'
      }
    },
    login: {
      title: 'Welcome back!',
      description: 'Do not have an account yet?',
      textRegistration: 'Create account',
      inputs: {
        email: 'Email',
        password: 'Password',
        emailPlaceholder: 'you@mantine.dev',
        passwordPlaceholder: 'Your password',
        signIn: 'Sign in',
        remember: 'Remember Me',
        forgot: 'Forgot password?'
      }
    },
    registration: {
      title: 'Registration',
      description: '',
      inputs: {
        email: 'Email',
        password: 'password',
        emailPlaceholder: 'you@mantine.dev',
        passwordPlaceholder: 'Your password',
        signUp: 'Register',
        login: 'Login',
        loginPlaceholder: 'Your login',
        firstName: 'firstName',
        firstNamePlaceholder: 'Your firstName',
        lastName: 'lastName',
        lastNamePlaceholder: 'your lastName',
        confirmPassword: 'confirm password'
      },
      modal: {
        errorServer: {
          title: 'An error occurred while connecting to the server',
          content: <div>We are doing everything in our power to fix the problem.</div>
        },
        errorData: {
          title: 'An error has occurred',
          content: <div>Try to check the filled data for correctness.</div>
        },
        successReg: {
          title: 'Registration successfully completed',
          content: (
            <div>
              User successfully registered. Please login with <NavLink to="/login"> link</NavLink> to entrance.
            </div>
          )
        }
      }
    }
  }
}
