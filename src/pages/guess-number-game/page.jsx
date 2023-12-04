import React from 'react'
import {GuessNumberGame} from '@/features/guess-number-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const GuessNumberGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <GuessNumberGame />
      </Center>
    </PageTemplate>
  )
}
