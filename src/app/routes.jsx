import {createBrowserRouter} from 'react-router-dom'
import {
  HomePage,
  AuthenticationPage,
  StonesGamePage,
  GamesPage,
  ApartmentsGamePage,
  GuessNumberGamePage,
  NimNumbersGamePage,
  NumberSystemsGamePage,
  ProgrammingGamePage,
  TraiderGamePage,
  RegistrationPage,
  ProfilePage
} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <AuthenticationPage />
  },
  {
    path: '/games',
    element: <GamesPage />
  },
  {
    path: '/stones-game',
    element: <StonesGamePage />
  },
  {
    path: '/apartments-game',
    element: <ApartmentsGamePage />
  },
  {
    path: '/guess-number-game',
    element: <GuessNumberGamePage />
  },
  {
    path: '/nim-numbers-game',
    element: <NimNumbersGamePage />
  },
  {
    path: '/number-systems-game',
    element: <NumberSystemsGamePage />
  },
  {
    path: '/programming-game',
    element: <ProgrammingGamePage />
  },
  {
    path: '/traider-game',
    element: <TraiderGamePage />
  },
  {
    path: '/registration',
    element: <RegistrationPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])
