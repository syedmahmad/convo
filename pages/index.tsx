import type { NextPage } from 'next'
import Layout from '../src/hoc/Layout';
import RootCompoennt from '../src/components/root'

const Home: NextPage = () => {
  const meta = {
    title: `Convo App`,
    description: `Description about convo app`,
    image_url: `https://d2m6u6shu0evoe.cloudfront.net/images/backgrounds/gametiks_facebook_image.jpg`,
    keywords: `deer, moose, bear, turkey, game, tally, harvest, hunter, hunt,
      hunting, profile, map, create, free, globe, track, browse, log, logger, logbook`,
    route: '/',
  };
  
  return (
   <Layout meta={meta}>
     <RootCompoennt/>
   </Layout>
  )
}

export default Home
