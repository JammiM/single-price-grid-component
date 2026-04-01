import React from "react";
import "./SinglePriceGrid.css";

const SinglePriceGrid = () => {
  return (
    <div className="single-price-grid">
      <section className="header">
        <h1 className="header__title">Join our community</h1>
        <h2 className="header__sub_title">
          30-day, hassle-free money back guarantee
        </h2>
        <p className="header__paragraph">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>
      <section className="sign-up">
        <h2 className="sign-up__heading">Monthly Subscription</h2>
        <div class="sign-up__pricing">
          <p className="sign-up__pricing-cost">&#36;29</p>
          <span class="sign-up__pricing-month">per month</span>
        </div>
        <p className="sign-up__description">
          Full access for less than &#36;1 a day
        </p>
        <button type="button" className="sign-up__button">
          Sign Up
        </button>
      </section>
      <section className="why-us">
        <h2 className="why-us__heading">Why Us</h2>
        <p className="why-us__description">
          Tutorials by industry experts Peer &amp; expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </section>
    </div>
  );
};

export default SinglePriceGrid;
