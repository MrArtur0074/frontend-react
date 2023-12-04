import React from 'react'
import {TraiderGame} from '@/features/traider-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const TraiderGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <TraiderGame />
      </Center>
    </PageTemplate>
  )
}
