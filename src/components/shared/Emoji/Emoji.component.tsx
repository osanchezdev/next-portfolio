import React from "react"

interface EmojiProps {
  symbol: string
  label?: string
}

const Emoji = (props: EmojiProps) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )
}

export default Emoji
