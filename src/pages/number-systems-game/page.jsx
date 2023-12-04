import React from 'react'
import {NumberSystemsGame} from '@/features/number-systems-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const NumberSystemsGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <NumberSystemsGame />
      </Center>
    </PageTemplate>
  )
}
