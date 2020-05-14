import React from "react"
import { SEO } from "../components/seo"
import { MAX_PAGE_WIDTH } from "../constants/sizes"
import { DARK, GREY, BLACK, WHITE } from "../constants/colors"
import { MEDIUM_UP } from "../constants/breakpoints"
import {
  DISPLAY_FONT,
  LINK_SIZE,
  DISPLAY_SIZE,
  TEXT_FONT,
  TEXT_SIZE,
} from "../constants/text"

const CONTENT_OFFSET = 32

interface LinkProps {
  text: string
  to: string
}

const Link = ({ text, to }: LinkProps) => {
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

const HireMe = () => {
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

export default function Home() {
  return (
    <>
      <SEO title="kylpo" description="kylpo's personal site" />
      <column
        tag="main"
        center
        margin="0 auto"
        maxWidth={`${MAX_PAGE_WIDTH}px`}
        minHeight={{
          _: `100vh`,
          [MEDIUM_UP]: `calc(100vh - ${CONTENT_OFFSET}px)`,
        }}
      >
        <txt
          tag="h1"
          bold
          font={DISPLAY_FONT}
          size={DISPLAY_SIZE}
          _style={{
            transform: { [MEDIUM_UP]: `translateY(${CONTENT_OFFSET}px)` },
            zIndex: 100,
          }}
          _animate={{
            duration: "4s",
            easing: "ease-out",
            keyframes: {
              "0%": {
                color: BLACK,
              },
              "20%": {
                color: WHITE,
              },
              "30%": {
                color: WHITE,
              },
              "70%": {
                color: DARK,
              },
              "100%": {
                color: DARK,
              },
            },
          }}
        >
          KYLPO
        </txt>

        <column
          center
          _style={{
            transform: { [MEDIUM_UP]: `translateY(${CONTENT_OFFSET}px)` },
          }}
        >
          <space size={{ _: 48, [MEDIUM_UP]: 64 }} />

          <column tag="nav" center>
            <Link text="Blog" to="https://medium.com/@kylpo" />
            <Link
              text="Talks"
              to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
            />
            <Link text="Email" to="mailto:kyle@chronstruct.com" />
            <Link text="Github" to="https://github.com/kylpo" />
            <Link text="Twitter" to="https://twitter.com/kylpo" />
            <Link text="LinkedIn" to="https://www.linkedin.com/in/kylpo/" />
          </column>

          <space size={{ _: 48, [MEDIUM_UP]: 64 }} />

          <box paddingHorizontal={16}>
            <txt tag="p" center html>
              {"<b>Kyle Poole</b> is a full stack web and mobile developer"}
            </txt>
          </box>

          <space size={{ _: 48, [MEDIUM_UP]: 64 }} />

          <HireMe />
        </column>
      </column>

      {/* Black overlay on page load that fades out */}
      <box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        pointerEvents="none"
        _animate={{
          duration: "4000ms",
          easing: "ease-out",
          persist: "both",
          keyframes: {
            "0%": {
              opacity: 1,
              backgroundColor: BLACK,
              visibility: "visible",
            },
            "40%": {
              opacity: 1,
              backgroundColor: BLACK,
              visibility: "visible",
            },
            "100%": {
              opacity: 0,
              visibility: "hidden",
            },
          },
        }}
      />
    </>
  )
}
