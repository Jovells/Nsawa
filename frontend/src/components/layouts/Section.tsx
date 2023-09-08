import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    // xl:mx-40 xl:my-10
    <div className="mx-4 my-3 md:mx-6 lg:mx-20 lg:my-4 ">{children}</div>
  );
};

export default Section;
