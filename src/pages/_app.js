import '@/styles/globals.css'

import('../mocks').then(({setupMocks}) => {
  setupMocks();
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
