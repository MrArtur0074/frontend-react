import {Avatar, UnstyledButton, Group, Text, Menu, createStyles} from '@mantine/core'
import {IconLogout, IconSettings, IconChevronDown} from '@tabler/icons'
// import {MantineLogo} from '@mantine/ds'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logoutUser} from '../store/actions/actionCreators.js'

export function ProfileHeader(props) {
  const useStyles = createStyles(theme => ({
    user: {
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      transition: 'background-color 100ms ease',

      '&:hover': {
        backgroundColor: '#000000'
      },

      [theme.fn.smallerThan('xs')]: {
        display: props.modal ? 'block' : 'none'
      }
    },

    burger: {
      [theme.fn.largerThan('xs')]: {
        display: props.modal ? 'block' : 'none'
      }
    },

    userActive: {
      backgroundColor: '#000000'
    },

    tabs: {
      [theme.fn.smallerThan('sm')]: {
        display: props.modal ? 'block' : 'none'
      }
    },

    tabsList: {
      borderBottom: '0 !important'
    },

    tab: {
      fontWeight: 500,
      height: 38,
      color: theme.white,
      backgroundColor: 'transparent',
      borderColor: '#000000',

      '&:hover': {
        backgroundColor: '#000000'
      },

      '&[data-active]': {
        backgroundColor: '#000000',
        borderColor: '#000000'
      }
    }
  }))

  const dispatch = useDispatch()
  const {classes, theme, cx} = useStyles()
  // const [opened, {toggle}] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  let userData = useSelector(state => state.auth.profileData.profile) || {
    firstName: 'firstName',
    lastName: 'lastName'
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, {[classes.userActive]: userMenuOpened})}>
          <Group spacing={7}>
            <Avatar src="1" alt={userData.firstName + ' ' + userData.lastName} radius="xl" size={20} />
            <Text weight={500} size="sm" sx={{lineHeight: 1, color: theme.white}} mr={3}>
              {userData.firstName + ' ' + userData.lastName}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Настройки</Menu.Label>
        <NavLink to="/profile">
          <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Профиль</Menu.Item>
        </NavLink>
        <Menu.Item onClick={() => dispatch(logoutUser())} icon={<IconLogout size={14} stroke={1.5} />}>
          Выйти
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
