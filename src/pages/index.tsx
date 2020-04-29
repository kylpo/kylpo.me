import React from "react"
import { css } from "linaria"
import { SEO } from "../components/seo"
import { V } from "../components/box"
import { Text } from "../components/text"
import { Space } from "../components/space"
import { MAX_PAGE_WIDTH } from "../util/sizes"
import { DARK, GREY, BLACK, WHITE } from "../util/colors"
import { MEDIUM_UP } from "../util/breakpoints"

const CONTENT_OFFSET = 32

const Link = ({ text, to }) => (
  <a
    href={to}
    className={css`
      padding: 4px 8px;
      color: ${GREY};

      &:hover {
        color: ${DARK};

        & > * {
          transition: none;
        }
      }
    `}
  >
    <Text
      allCaps
      style="link"
      color="current"
      className={css`
        transition: color 400ms ease;
      `}
    >
      {text}
    </Text>
  </a>
)

const HireMe = () => (
  <a
    href="mailto:kyle@chronstruct.com"
    className={css`
      padding: 16px 32px;
      color: ${WHITE};
      background-color: ${BLACK};
      border: 2px solid ${BLACK};
      border-radius: 8px;
      opacity: 0;
      visibility: hidden;
      transform: scale(0.8);
      transition: background-color 400ms ease;

      &:hover {
        background-color: ${WHITE};
        color: ${DARK};
      }

      animation: in 300ms ease 3s forwards;
      @keyframes in {
        to {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }
      }
    `}
  >
    <Text
      style="text"
      color="current"
      className={css`
        transition: color 400ms ease;
      `}
    >
      Now available for hire!
    </Text>
  </a>
)

export default function IndexPage() {
  return (
    <>
      <SEO title="kylpo" />
      <V
        as="main"
        center
        className={css`
          min-height: 100vh;
          max-width: ${MAX_PAGE_WIDTH}px;
          margin: 0 auto;

          ${MEDIUM_UP} {
            min-height: calc(100vh - ${CONTENT_OFFSET}px);
          }
        `}
      >
        <Text
          as="h1"
          style="logo"
          bold
          color="unset"
          className={css`
            position: relative;
            z-index: 100;

            ${MEDIUM_UP} {
              transform: translateY(${CONTENT_OFFSET}px);
            }

            animation: titleFadeIn 4s ease-out;
            @keyframes titleFadeIn {
              0% {
                color: ${BLACK};
              }
              20% {
                color: ${WHITE};
              }
              30% {
                color: ${WHITE};
              }
              70% {
                color: ${DARK};
              }
              100% {
                color: ${DARK};
              }
            }
          `}
        >
          KYLPO
        </Text>
        <V
          center
          className={css`
            ${MEDIUM_UP} {
              transform: translateY(${CONTENT_OFFSET}px);
            }
          `}
        >
          <Space size={48} sizeMedium={64} sizeLarge={64} />

          <V as="nav" center>
            <Link text="Blog" to="https://medium.com/@kylpo" />
            <Link
              text="Talks"
              to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
            />
            <Link text="email" to="mailto:kyle@chronstruct.com" />
            <Link text="Github" to="https://github.com/kylpo" />
            <Link text="Twitter" to="https://twitter.com/kylpo" />
            <Link text="LinkedIn" to="https://www.linkedin.com/in/kylpo/" />
          </V>

          <Space size={48} sizeMedium={64} sizeLarge={64} />

          <Text
            center
            as="p"
            style="text"
            html
            className={css`
              padding: 0 16px;
            `}
          >
            {"<b>Kyle Poole</b> is a full stack web and mobile developer"}
          </Text>

          <Space size={48} sizeMedium={64} sizeLarge={64} />

          <HireMe />
        </V>
      </V>

      {/* Foreground black overlay on page load that fades out */}
      <div
        className={css`
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          visibility: hidden;
          pointer-events: none;

          background-color: black;

          animation: fadeIn 4s ease-out;
          @keyframes fadeIn {
            0% {
              opacity: 1;
              background-color: black;
              visibility: visible;
            }
            40% {
              opacity: 1;
              background-color: black;
              visibility: visible;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      />
    </>
  )
}
