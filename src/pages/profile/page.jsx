import {PageTemplate} from '@/ui'
import {Container, Grid, SimpleGrid, Skeleton, Avatar, Text, Paper} from '@mantine/core'
import {useSelector} from 'react-redux'

const PRIMARY_COL_HEIGHT = 300

export function ProfilePage() {
  const userData = useSelector(state => state.auth.profileData.profile) || {
    firstName: 'login',
    email: 'email@gmail.com'
  }

  return (
    <PageTemplate>
      <Container my="md">
        <SimpleGrid cols={2} spacing="md" breakpoints={[{maxWidth: 'sm', cols: 1}]}>
          <Paper
            radius="md"
            withBorder
            p="lg"
            sx={theme => ({
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
            })}
          >
            <Avatar src="1" size={120} radius={120} mx="auto" />
            <Text align="center" size="lg" weight={500} mt="md">
              {userData.firstName ? userData.firstName : ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
              {userData.email ? userData.email : ''}
            </Text>
          </Paper>
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </PageTemplate>
  )
}
