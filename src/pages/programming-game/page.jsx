import React from 'react'
import {ProgrammingGame} from '@/features/programming-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const ProgrammingGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <ProgrammingGame />
      </Center>
    </PageTemplate>
  )
}
