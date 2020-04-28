import React from "react"
import { css } from "linaria"
import { SEO } from "../components/seo"
import { V } from "../components/box"
import { Text } from "../components/text"
import { Space } from "../components/space"
import { MAX_PAGE_WIDTH } from "../util/sizes"
import { DARK, GREY, BlACK, WHITE } from "../util/colors"

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

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <V
        center
        className={css`
          min-height: 100vh;
          max-width: ${MAX_PAGE_WIDTH};
          margin: 0 auto;
        `}
      >
        <Text
          style="logo"
          bold
          color="unset"
          className={css`
            position: relative;
            z-index: 100;
            animation: titleFadeIn 4s ease-out;
            @keyframes titleFadeIn {
              0% {
                color: ${BlACK};
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
        <Space size={64} />
        <V as="nav" center>
          <Link text="Blog" to="https://medium.com/@kylpo" />
          <Link
            text="Talks"
            to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
          />
          <Link text="Github" to="https://github.com/kylpo" />
          <Link text="Twitter" to="https://twitter.com/kylpo" />
          <Link text="LinkedIn" to="https://www.linkedin.com/in/kylpo/" />
        </V>
        <Space size={64} />
        <Text style="text" html>
          {"<b>Kyle Poole</b> is a full stack web and mobile developer"}
        </Text>
      </V>

      <div
        className={css`
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          visibility: hidden;
          pointer-events: none;

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
