import UserContext from '@/context/user'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return (
     <UserContext>
        <Component.getLayout>
          <Component {...pageProps} />
        </Component.getLayout>
     </UserContext>
    )
  }
  return <UserContext><Component {...pageProps} /></UserContext>
}
