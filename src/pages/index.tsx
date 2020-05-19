import React from "react"
import { SEO } from "../components/SEO"
import { Link } from "../components/Link"
import { MAX_PAGE_WIDTH } from "../constants/sizes"
import { DARK, BLACK, WHITE } from "../constants/colors"
import { MEDIUM_UP } from "../constants/breakpoints"
import { DISPLAY_FONT, DISPLAY_SIZE } from "../constants/text"
import { HireMe } from "../components/HireMe"

const CONTENT_OFFSET = 32

export default function Home() {
  return (
    <>
      <SEO
        title="kylpo"
        description="kylpo's personal site"
      />

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

          <column
            tag="nav"
            center
          >
            <Link
              text="Blog"
              to="https://medium.com/@kylpo"
            />
            <Link
              text="Talks"
              to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
            />
            <Link
              text="Email"
              to="mailto:kyle@chronstruct.com"
            />
            <Link
              text="Github"
              to="https://github.com/kylpo"
            />
            <Link
              text="Twitter"
              to="https://twitter.com/kylpo"
            />
            <Link
              text="LinkedIn"
              to="https://www.linkedin.com/in/kylpo/"
            />
          </column>

          <space size={{ _: 48, [MEDIUM_UP]: 64 }} />

          <box paddingHorizontal={16}>
            <txt
              tag="p"
              center
              html
            >
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
