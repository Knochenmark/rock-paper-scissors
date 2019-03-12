import React from "react";

interface ChoiceProps {
  image: string;
  name: string;
}

export function Choice(props: ChoiceProps) {
  return (
    <div className="choice">
      <img src={props.image} />
      <span>{props.name}</span>
    </div>
  );
}
