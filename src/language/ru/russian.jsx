import {NavLink} from 'react-router-dom'

export const russian = {
  header: {
    links: ['Главная', 'Игры'],
    login: 'Войти',
    registration: 'Регистрация'
  },
  pages: {
    mainpage: {
      text: 'Приветствую!'
    },
    games: {
      list: [
        'Игра про камни',
        'Игра про квартиры',
        'Быки и коровы',
        'Числа Ним',
        'Игра про системы счисления',
        'Игра на программирование',
        'Торговец'
      ],
      title: 'Игры',
      tabs: ['Игры', 'Таблица лидеров'],
      leaderboard: {
        name: 'Имя',
        score: 'Количество очков',
        game1: 'Игра в камни',
        game2: 'Система счисления',
        game3: 'Подбор числа',
        game4: 'Построение пути'
      }
    },
    login: {
      title: 'Приветствуем!',
      description: 'У вас имеется аккаунт?',
      textRegistration: 'Создать аккаунт',
      inputs: {
        email: 'Email',
        password: 'Пароль',
        emailPlaceholder: 'you@mantine.dev',
        passwordPlaceholder: 'Ваш пароль',
        signIn: 'Войти',
        remember: 'Запомнить меня',
        forgot: 'Забыли пароль?',
        login: 'Логин',
        loginPlaceholder: 'Ваш логин'
      },
      auth: {
        title: 'Вы успешно авторизовались!'
      }
    },
    registration: {
      title: 'Регистрация',
      description: '',
      inputs: {
        email: 'Email',
        password: 'Пароль',
        emailPlaceholder: 'you@mantine.dev',
        passwordPlaceholder: 'Ваш пароль',
        signUp: 'Зарегистрироваться',
        login: 'Логин',
        loginPlaceholder: 'Ваш логин',
        firstName: 'Имя',
        firstNamePlaceholder: 'Ваше имя',
        lastName: 'Фамилия',
        lastNamePlaceholder: 'Ваша Фамилия',
        confirmPassword: 'Повторите пароль'
      },
      modal: {
        errorServer: {
          title: 'Произошла ошибка при подключении к серверу',
          content: <div>Мы делаем все что в наших силах чтобы устранить неисправность.</div>
        },
        errorData: {
          title: 'Произошла ошибка',
          content: <div>Попробуйте проверить заполненные данные на корректность.</div>
        },
        successReg: {
          title: 'Регистрация успешно завершена',
          content: (
            <div>
              Пользователь успешно зарегистрирован. Пожалуйста, войдите по <NavLink to="/login"> ссылке</NavLink> для
              входа.
            </div>
          )
        }
      }
    }
  }
}
