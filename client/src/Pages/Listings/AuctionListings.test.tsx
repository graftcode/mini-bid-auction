import React from "react";
import { render, screen } from "@testing-library/react";
import AuctionListings from "./AuctionListings";

describe("<AuctionListings/>", () => {
  test("renders AuctionListings", () => {
    render(<AuctionListings />);
  });

  // test("renders AuctionListings", () => {});
});
