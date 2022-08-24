// http://localhost:3000/

import MainNavigation from '../components/layout/MainNavigation';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';


const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'First Meet Up',
    image: 'https://maxmyprofit.com.au/blog/wp-content/uploads/2015/01/adolescent-adult-blur-933964-e1606098865525.jpg',
    address: 'Test address 5',
    description: 'This is the first meet up.'
  },
  {
    id: 'm2',
    title: 'Second Meet Up',
    image: 'https://maxmyprofit.com.au/blog/wp-content/uploads/2015/01/adolescent-adult-blur-933964-e1606098865525.jpg',
    address: 'Test address 15',
    description: 'This is the second meet up.'
  }
]

function Home(props) {
  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export default Home;


export async function getStaticProps() {
  /*
  fetch data from API
    ...
    ...

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  }
  */

  return {
    props: {
      meetups: DUMMY_DATA
    }
  }
}