import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return (
      <Component.getLayout>
        <Component {...pageProps} />
      </Component.getLayout>
    )
  }
  return <Component {...pageProps} />
}
