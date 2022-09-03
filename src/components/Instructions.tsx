import {ReactNode, useState} from "react";
import {IconButton} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

import "./Instruction.css";

type InstructionProps = {
  title: string,
  children?: ReactNode
}

function Instructions({title, children}: InstructionProps){
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div className={"instructions-container"}>
      <div className={"instructions-header"}>
        <IconButton
          onClick={() => setShowInstructions(!showInstructions)}
          style={{
            transform: `rotate(${showInstructions ? 90 : 0}deg)`
          }}
        >
          <ChevronRight/>
        </IconButton>
        <h3>{title}</h3>
      </div>
      <div
        className={`instructions-body`}
        style={{
          maxHeight: showInstructions ? "30vh" : 0
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Instructions;