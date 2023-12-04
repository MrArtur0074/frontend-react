import React from 'react'
import {ApartmentsGame} from '@/features/apartments-game'
import {PageTemplate} from '@/ui'
import {Center} from '@mantine/core'

export const ApartmentsGamePage = () => {
  return (
    <PageTemplate>
      <Center>
        <ApartmentsGame />
      </Center>
    </PageTemplate>
  )
}
