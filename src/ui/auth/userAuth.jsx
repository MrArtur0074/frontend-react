import {Title, Container} from '@mantine/core'

export default function UserAuth(props) {
  return (
    <Container size={420} my={40}>
      <Title align="center" sx={theme => ({fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900})}>
        {props.language.auth.title}
      </Title>
    </Container>
  )
}
