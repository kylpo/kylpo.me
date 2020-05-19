import React from "react"
import { DARK, BLACK, WHITE } from "../constants/colors"
import { TEXT_FONT, TEXT_SIZE } from "../constants/text"

export const HireMe = () => {
  const [isHovering, setIsHovering] = React.useState(false)

  return (
    <box
      tag="a"
      tag-href="mailto:kyle@chronstruct.com"
      paddingVertical={16}
      paddingHorizontal={32}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      _style={{
        border: `2px solid ${BLACK}`,
        borderRadius: 8,
        transition: "background-color 400ms ease",
        backgroundColor: isHovering ? WHITE : BLACK,
      }}
      _animate={{
        delay: "3s",
        duration: "300ms",
        easing: "ease",
        persist: "both",
        keyframes: {
          from: {
            opacity: 0,
            visibility: "hidden",
            transform: "scale(0.8)",
          },
          to: {
            opacity: 1,
            visibility: "visible",
            transform: "scale(1)",
          },
        },
      }}
    >
      <txt
        selectable={false}
        font={TEXT_FONT}
        size={TEXT_SIZE}
        color={isHovering ? DARK : WHITE}
        _style={{
          transition: "color 400ms ease",
        }}
      >
        Now available for hire!
      </txt>
    </box>
  )
}
