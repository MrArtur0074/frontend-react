import React from 'react'
import {Center, Tabs, createStyles} from '@mantine/core'
import {PageTemplate} from '../../ui'
import {ActionsGrid} from '@/ui/games/games.jsx'
import {LeaderBoard} from '@/ui/games/leaderboard.jsx'
import {useSelector} from 'react-redux'

const useStyles = createStyles(theme => ({
  tabs: {
    width: '100%',
    maxWidth: '1024px',

    [theme.fn.smallerThan('sm')]: {
      overflow: 'scroll'
    }
  }
}))

export const GamesPage = () => {
  const language = useSelector(state => state.language.language.pages.games)
  const {classes} = useStyles()

  return (
    <PageTemplate>
      <Center>
        <Tabs className={classes.tabs} color="teal" defaultValue="games">
          <Tabs.List position="center">
            <Tabs.Tab value="games">{language.tabs[0]}</Tabs.Tab>
            <Tabs.Tab value="leaderboard" color="blue">
              {language.tabs[1]}:
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="games" pt="xs">
            <ActionsGrid />
          </Tabs.Panel>

          <Tabs.Panel value="leaderboard" pt="xs">
            <LeaderBoard />
          </Tabs.Panel>
        </Tabs>
      </Center>
    </PageTemplate>
  )
}
