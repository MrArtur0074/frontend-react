import {createStyles, Card, Text, SimpleGrid, UnstyledButton, Group} from '@mantine/core'
import {IconCreditCard, IconReceipt, IconReceiptTax} from '@tabler/icons'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    position: 'static'
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)'
    }
  }
}))

export function ActionsGrid() {
  const language = useSelector(state => state.language.language.pages.games)

  const mockdata = [
    {title: language.list[0], icon: IconCreditCard, color: 'violet', link: '/stones-game'},
    // {title: language.list[1], icon: IconBuildingBank, color: 'indigo', link: '/apartments-game'},
    // {title: language.list[2], icon: IconRepeat, color: 'blue', link: '/guess-number-game'},
    // {title: language.list[3], icon: IconReceiptRefund, color: 'green', link: '/nim-numbers-game'},
    {title: language.list[4], icon: IconReceipt, color: 'teal', link: '/number-systems-game'},
    {title: language.list[5], icon: IconReceiptTax, color: 'cyan', link: '/programming-game'}
    // {title: language.list[6], icon: IconReport, color: 'pink', link: '/traider-game'}
  ]
  const {classes, theme} = useStyles()

  const items = mockdata.map(item => (
    <UnstyledButton key={item.title} className={classes.item}>
      <NavLink to={item.link}>
        <item.icon color={theme.colors[item.color][6]} size={32} />
        <Text size="xs" mt={7}>
          {item.title}
        </Text>
      </NavLink>
    </UnstyledButton>
  ))

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>{language.title}</Text>
      </Group>
      <SimpleGrid
        breakpoints={[
          {maxWidth: 980, cols: 3, spacing: 'md'},
          {maxWidth: 755, cols: 2, spacing: 'sm'},
          {maxWidth: 600, cols: 1, spacing: 'sm'}
        ]}
        cols={3}
        mt="md"
      >
        {items}
      </SimpleGrid>
    </Card>
  )
}
