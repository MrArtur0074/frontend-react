import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import {store} from './store/store'
import {MantineProvider} from '@mantine/core'
import {Provider} from 'react-redux'
import {ModalsProvider} from '@mantine/modals'
import {NotificationsProvider} from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <Provider store={store}>
      <ModalsProvider labels={{confirm: 'Submit', cancel: 'Cancel'}}>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </ModalsProvider>
    </Provider>
  </MantineProvider>
)
