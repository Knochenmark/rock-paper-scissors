import React from "react";

import { Choice } from "../components/Choice";
import RockIcon from "../svg/rock.svg";
import PaperIcon from "../svg/paper.svg";
import ScissorsIcon from "../svg/scissors.svg";

const choices = ["Rock", "Paper", "Scissors"];

export function Game() {
  return (
    <div>
      <h2>Feeling Lucky? Take Your Pick!</h2>
      <div className="choices">
        <Choice image={RockIcon} name="Rock" />
        <Choice image={PaperIcon} name="Paper" />
        <Choice image={ScissorsIcon} name="Scissors" />
      </div>
    </div>
  );
}
