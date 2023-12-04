import React from 'react'
import {StonesGame} from '@/features/stones-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const StonesGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <StonesGame />
      </Center>
    </PageTemplate>
  )
}
