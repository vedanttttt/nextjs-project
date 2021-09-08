// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetupPage;
