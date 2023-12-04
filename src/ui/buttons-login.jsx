import {Button, Group, createStyles} from '@mantine/core'
import {NavLink} from 'react-router-dom'

export function LoginButtons(props) {
  const useStyles = createStyles(theme => ({
    button: {
      display: 'block',

      [theme.fn.smallerThan('sm')]: {
        display: props.modal ? 'block' : 'none',
        justifyContent: 'center'
      }
    },
    group: {
      [theme.fn.smallerThan('sm')]: {
        justifyContent: 'center',
        marginTop: '15px',
        marginBottom: '15px'
      }
    }
  }))

  const {classes} = useStyles()
  return (
    <Group className={classes.group}>
      <NavLink className={classes.button} to="/login">
        <Button variant="default">{props.language.header.login}</Button>
      </NavLink>
      <NavLink className={classes.button} to="/registration">
        <Button>{props.language.header.registration}</Button>
      </NavLink>
    </Group>
  )
}
