import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/newMeetupForm'

export default function NewMeetupPage() {
  const history = useHistory()
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-e7503-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}
