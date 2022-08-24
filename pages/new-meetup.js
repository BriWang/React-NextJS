import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeet() {

    const router = useRouter();

    async function addHandler(data) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const result = await response.json();

        console.log(result);

        router.push('/');
    }

    return <NewMeetupForm onAddMeetup={addHandler} />
}

export default NewMeet;