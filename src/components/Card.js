import React from "react";

function IosCard({ title, span = 1, children }) {
  return (
    <div
      className={`flex-0.8 bg-app-dark-grey col-span-${span} h-64 rounded-xl`}
    >
      <h3 className="text-app-text-green p-2 px-3 font-medium">{title}</h3>
      <hr className="text-app-grey" />
      {children}
    </div>
  );
}

export default IosCard;
