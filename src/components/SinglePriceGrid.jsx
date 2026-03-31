import React from "react";
import "./SinglePriceGrid.css";

const SinglePriceGrid = () => {
  return (
    <div className="SinglePriceGrid">
      <div className="header">
        <p className="header__title">Join our community</p>
        <p className="header__sub_title">
          30-day, hassle-free money back guarantee
        </p>
        <p className="header__paragraph">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div className="sign_up">
        <p className="sign_up_heading">Monthly Subscription</p>
        <div class="sign-up-pricing">
          <p className="sign-up-pricing-cost">&#36;29</p>
          <span class="sign-up-pricing-month">per month</span>
        </div>
        <p className="sign_up__description">
          Full access for less than &#36;1 a day{" "}
        </p>
        <button type="button" className="sign_up__button">
          Sign Up
        </button>
      </div>
      <div className="why-us">
        <p className="why-us__heading">Why Us</p>
        <p className="why-us__description">
          Tutorials by industry experts Peer &amp; expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
    </div>
  );
};

export default SinglePriceGrid;
