
import { Helmet } from 'react-helmet-async'
import Banner from '../Banner'
import Category from '../Category/Category,'
import Featured from '../Featured/Featured'
import PopularMenu from '../PopularMenu/PopularMenu'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
       <Helmet>
                <title>foodparadise | HOME</title>
            </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>

      <Featured></Featured>

      <Testimonials></Testimonials>
      
    </div>
  )
}

export default Home
