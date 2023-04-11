import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);


export default function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
