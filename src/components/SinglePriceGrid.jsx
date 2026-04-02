import React from "react";
import "./SinglePriceGrid.css";

const SinglePriceGrid = () => {
  return (
    <div className="single-price-grid">
      <section className="header section_container">
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
      <section className="sign-up section_container">
        <h2 className="sign-up__heading">Monthly Subscription</h2>
        <div className="sign-up__pricing">
          <h3>
            <span>&#36;29</span> per month
          </h3>
        </div>
        <p className="sign-up__description">
          Full access for less than &#36;1 a day
        </p>
        <button type="button" className="sign-up__button">
          Sign Up
        </button>
      </section>
      <section className="why-us section_container">
        <h2 className="why-us__heading">Why Us</h2>
        <ul className="why-us__description">
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </section>
    </div>
  );
};

export default SinglePriceGrid;
