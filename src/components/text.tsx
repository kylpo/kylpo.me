import React from "react"
import { css, cx } from "linaria"
import { MEDIUM, LARGE_UP } from "../util/breakpoints"
import {
  BlACK,
  WHITE,
  SILVER,
  GREY,
  PRIMARY,
  SECONDARY,
  SECONDARY_ACCENT,
  DARK,
} from "../util/colors"
import { IS_DEV } from "../util/environment"

/* Prop -> property maps */

const LOGO_FONT = "'Unica One', sans-serif"
const TEXT_FONT = "'Inter', sans-serif"
// const HEADING_FONT = "Arial Black, sans-serif"
const HEADING_FONT = "Arial, Helvetica, sans-serif"

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
    /* line-height: 22px; */
  `,
  t1: css`
    font-family: ${TEXT_FONT};
    font-size: 20px;
    line-height: 24px;

    @media ${MEDIUM} {
      font-size: 24px;
      line-height: 32px;
    }

    @media ${LARGE_UP} {
      font-size: 26px;
      line-height: 34px;
    }
  `,
  t2: css`
    font-family: ${TEXT_FONT};
    font-size: 18px;
    line-height: 28px;

    @media ${MEDIUM} {
      font-size: 20px;
      line-height: 24px;
    }

    @media ${LARGE_UP} {
      font-size: 24px;
      line-height: 32px;
    }
  `,
  t3: css`
    font-family: ${TEXT_FONT};
    font-size: 16px;
    /* line-height: 18px; */
    line-height: 20px;
    letter-spacing: 0.3px;

    @media ${MEDIUM} {
      font-size: 18px;
      line-height: 28px;
    }

    @media ${LARGE_UP} {
      font-size: 20px;
      /* line-height: 28px; */
      line-height: 30px;
    }
  `,
  t4: css`
    font-family: ${TEXT_FONT};
    font-size: 16px;
    line-height: 24px;

    @media ${LARGE_UP} {
      font-size: 18px;
      line-height: 28px;
    }
  `,
  t5: css`
    font-family: ${TEXT_FONT};
    font-size: 14px;
    line-height: 20px;

    @media ${LARGE_UP} {
      font-size: 16px;
      line-height: 24px;
    }
  `,
  t6: css`
    font-family: ${TEXT_FONT};
    font-size: 13px;
    line-height: 20px;
  `,
  h1: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;
    font-size: 44px;
    line-height: 52px;

    @media ${MEDIUM} {
      font-size: 60px;
      line-height: 68px;
    }

    @media ${LARGE_UP} {
      font-size: 84px;
      line-height: 96px;
    }
  `,
  h2: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;

    font-size: 32px;
    line-height: 36px;

    @media ${MEDIUM} {
      font-size: 44px;
      line-height: 52px;
    }

    @media ${LARGE_UP} {
      font-size: 64px;
      line-height: 72px;
    }
  `,
  h3: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;

    font-size: 32px;
    line-height: 34px;

    @media ${MEDIUM} {
      font-size: 36px;
      line-height: 44px;
    }

    @media ${LARGE_UP} {
      font-size: 50px;
      line-height: 52px;
    }
  `,
  h4: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;

    font-size: 26px;
    line-height: 34px;

    @media ${MEDIUM} {
      font-size: 32px;
      line-height: 40px;
    }

    @media ${LARGE_UP} {
      font-size: 40px;
      line-height: 48px;
    }
  `,
  h5: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;

    font-size: 24px;
    line-height: 32px;

    @media ${MEDIUM} {
      font-size: 26px;
      line-height: 34px;
    }

    @media ${LARGE_UP} {
      font-size: 32px;
      line-height: 40px;
    }
  `,
  h6: css`
    font-family: ${HEADING_FONT};
    font-weight: bold;

    font-size: 20px;
    line-height: 28px;

    @media ${LARGE_UP} {
      font-size: 26px;
      line-height: 34px;
    }
  `,
}

const colors = {
  white: css`
    color: ${WHITE};
  `,
  black: css`
    color: ${BlACK};
  `,
  dark: css`
    color: ${DARK};
  `,
  silver: css`
    color: ${SILVER};
  `,
  grey: css`
    color: ${GREY};
  `,
  primary: css`
    color: ${PRIMARY};
  `,
  secondary: css`
    color: ${SECONDARY};
  `,
  secondaryAccent: css`
    color: ${SECONDARY_ACCENT};
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
