"use client";

import React from "react";
import Link from "next/link";

const Partner = () => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Ready to talk?</h3>
          <p>Our team is here to answer your question about Evolution IT Group</p>

          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>

        </div>
      </div>
    </>
  );
};

export default Partner;
