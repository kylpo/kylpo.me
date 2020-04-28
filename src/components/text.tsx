import React from "react"
import { css, cx } from "linaria"
import { BLACK, WHITE, GREY, DARK } from "../util/colors"
import { IS_DEV } from "../util/environment"

/* Prop -> property maps */

const LOGO_FONT = "'Unica One', sans-serif"
const TEXT_FONT = "'Inter', sans-serif"

const BOLD_CLASS = css`
  font-weight: bold;
`
const CENTER_CLASS = css`
  text-align: center;
`
const ALL_CAPS_CLASS = css`
  text-transform: uppercase;
`

const styles = {
  logo: css`
    font-family: ${LOGO_FONT};
    font-size: 40px;
  `,
  text: css`
    font-family: ${TEXT_FONT};
    font-size: 18px;
  `,
  link: css`
    font-family: ${LOGO_FONT};
    font-size: 16px;
    letter-spacing: 0.6px;
  `,
}

const colors = {
  white: css`
    color: ${WHITE};
  `,
  black: css`
    color: ${BLACK};
  `,
  dark: css`
    color: ${DARK};
  `,
  grey: css`
    color: ${GREY};
  `,
  current: css`
    color: currentColor;
  `,
  unset: undefined,
}

interface Props {
  style: keyof typeof styles
  children: React.ReactNode
  color?: keyof typeof colors
  className?: string
  bold?: boolean
  center?: boolean
  allCaps?: boolean
  html?: boolean
  inlineStyle?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}

export const Text = ({
  as: Comp = "span",
  color = "dark",
  ...props
}: Props) => (
  <Comp
    className={cx(
      styles[props.style],
      colors[color],
      props.bold && BOLD_CLASS,
      props.center && CENTER_CLASS,
      props.allCaps && ALL_CAPS_CLASS,
      props.className
    )}
    style={props.inlineStyle}
    data-text-style={IS_DEV ? props.style : undefined}
  >
    {props.html ? (
      <span
        dangerouslySetInnerHTML={{
          __html: `${props.children}`,
        }}
      />
    ) : (
      props.children
    )}
  </Comp>
)
