import React from 'react'
import {NimNumbersGame} from '@/features/nim-numbers-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const NimNumbersGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <NimNumbersGame />
      </Center>
    </PageTemplate>
  )
}
