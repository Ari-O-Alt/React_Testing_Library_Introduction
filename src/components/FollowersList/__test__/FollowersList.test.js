import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers list", () => {
  // passes
  test("renders the followers list", () => {
    render(<MockFollowersList />);
  });
  // passes
  test("renders the first follower", async () => {
    render(<MockFollowersList />);
    // we must await this since it takes a while to retrieve the followers
    // we must use findBy since getBy is not async
    const followerCard = await screen.findByTestId("follower-item-0");
    expect(followerCard).toBeInTheDocument();
  });
  // passes
  test("renders all 5 followers", async () => {
    render(<MockFollowersList />);
    const followerCards = await screen.findAllByTestId(/follower-item-/i);
    expect(followerCards.length).toBe(5);
  });
});

// testing the React part and the backend (APIs) at the same time might not be a good idea
// API requests are expensive;
// API requests make your test dependent on something from the outisde so if something is wrong with the API, your tests will fail
// a better approach would be to tests API calls in isolation
