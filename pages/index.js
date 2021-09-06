import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
    address: "Some address",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg",
    address: "Some address",
    description: "This is second meetup",
  },
];

function HomePage() {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
}

export default HomePage;
