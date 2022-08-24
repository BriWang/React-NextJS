import MeetupDetail from "../components/meetups/MeetupDetail";

function Detail(props) {
    return <MeetupDetail selected={props.meetupData} />
}


export async function getStaticPaths() {
    return {
        paths: [
            { params: { meetupId: 'm1' } },
            { params: { meetupId: 'm2' } },
        ],
        fallback: true,  // can also be false or "blocking"  
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    //console.log(meetupId);

    // ... fetch data using meetupId from database
    // ... store the result to an obj: selectedMeetup

    const selectedMeetup = {
        id: 'm1',
        title: 'First Meet Up',
        image: 'https://maxmyprofit.com.au/blog/wp-content/uploads/2015/01/adolescent-adult-blur-933964-e1606098865525.jpg',
        address: 'Test address 5',
        description: 'This is the first meet up.'
    }

    return {
        props: {
            meetupData: {
                id: selectedMeetup.id,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }, // will be passed to the page component as props
    }
}

export default Detail;