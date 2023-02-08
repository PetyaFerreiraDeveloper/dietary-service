import React from "react";
import { render, screen } from "@testing-library/react";
// import Home from '@/pages';

// import Home from '../pages/index';
import Home from "../pages/index";

describe("Home page", () => {
  it("render app heading", () => {
    // render(<Home />)
    render(<Home />);

    screen.getByRole("heading", {
      name: /This is brand new app using the FDC API/i,
    });
  });
});
