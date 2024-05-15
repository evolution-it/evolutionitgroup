"use client";

import React from "react";
import Link from "next/link";

const Partner = () => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Ready to talk?</h3>
          <p>Our team is here to answer your question about StartP</p>

          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>

          <span>
            <Link href="#">Or, get started now with a free trial</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Partner;
