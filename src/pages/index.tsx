import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          {/* <Route index element={<Home />} /> */}

          {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
