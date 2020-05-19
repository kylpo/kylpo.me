import React from "react"
import { DARK, GREY } from "../constants/colors"
import { DISPLAY_FONT, LINK_SIZE } from "../constants/text"

interface LinkProps {
  text: string
  to: string
}

export const Link = ({ text, to }: LinkProps) => {
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <box
      tag="a"
      tag-href={to}
      paddingVertical={4}
      paddingHorizontal={8}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <txt
        uppercase
        font={DISPLAY_FONT}
        size={LINK_SIZE}
        color={isHovering ? DARK : GREY}
        _style={{
          transition: isHovering ? "none" : "color 400ms ease",
        }}
      >
        {text}
      </txt>
    </box>
  )
}
