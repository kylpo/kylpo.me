import React from "react"
import { css, cx } from "linaria"
import { IS_DEV } from "../util/environment"
import { MEDIUM, LARGE_UP } from "../util/breakpoints"

const SIZE_0 = css`
  flex-basis: 0px;
`
const SIZE_8 = css`
  flex-basis: 8px;
`
const SIZE_16 = css`
  flex-basis: 16px;
`
const SIZE_24 = css`
  flex-basis: 24px;
`
const SIZE_32 = css`
  flex-basis: 32px;
`
const SIZE_48 = css`
  flex-basis: 48px;
`
const SIZE_64 = css`
  flex-basis: 64px;
`
const SIZE_96 = css`
  flex-basis: 96px;
`
const sizes = {
  "0": SIZE_0,
  "8": SIZE_8,
  "16": SIZE_16,
  "24": SIZE_24,
  "32": SIZE_32,
  "48": SIZE_48,
  "64": SIZE_64,
  "96": SIZE_96,
}

//-- sizesMedium

const SIZE_0_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 0px;
  }
`
const SIZE_8_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 8px;
  }
`
const SIZE_16_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 16px;
  }
`
const SIZE_24_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 24px;
  }
`
const SIZE_32_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 32px;
  }
`
const SIZE_48_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 48px;
  }
`
const SIZE_64_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 64px;
  }
`
const SIZE_96_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 96px;
  }
`
const SIZE_128_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 128px;
  }
`
const SIZE_144_MEDIUM = css`
  @media ${MEDIUM} {
    flex-basis: 144px;
  }
`
const sizesMedium = {
  "0": SIZE_0_MEDIUM,
  "8": SIZE_8_MEDIUM,
  "16": SIZE_16_MEDIUM,
  "24": SIZE_24_MEDIUM,
  "32": SIZE_32_MEDIUM,
  "48": SIZE_48_MEDIUM,
  "64": SIZE_64_MEDIUM,
  "96": SIZE_96_MEDIUM,
  "128": SIZE_128_MEDIUM,
  "144": SIZE_144_MEDIUM,
}

//-- sizesLarge

const SIZE_0_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 0px;
  }
`
const SIZE_8_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 8px;
  }
`
const SIZE_16_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 16px;
  }
`
const SIZE_24_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 24px;
  }
`
const SIZE_32_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 32px;
  }
`
const SIZE_48_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 48px;
  }
`
const SIZE_64_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 64px;
  }
`
const SIZE_96_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 96px;
  }
`
const SIZE_128_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 128px;
  }
`
const SIZE_144_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 144px;
  }
`
const SIZE_172_LARGE = css`
  @media ${LARGE_UP} {
    flex-basis: 172px;
  }
`
const sizesLarge = {
  "0": SIZE_0_LARGE,
  "8": SIZE_8_LARGE,
  "16": SIZE_16_LARGE,
  "24": SIZE_24_LARGE,
  "32": SIZE_32_LARGE,
  "48": SIZE_48_LARGE,
  "64": SIZE_64_LARGE,
  "96": SIZE_96_LARGE,
  "128": SIZE_128_LARGE,
  "144": SIZE_144_LARGE,
  "172": SIZE_172_LARGE,
}

const GROW_1_CLASS = css`
  flex-grow: 1;
`
const GROW_0_CLASS = css`
  flex-grow: 0;
`
const SHRINK_1_CLASS = css`
  flex-shrink: 1;
`
const SHRINK_0_CLASS = css`
  flex-shrink: 0;
`

interface Props {
  size?: 0 | 8 | 16 | 24 | 32 | 48 | 64 | 96
  sizeMedium?: 0 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128 | 144
  sizeLarge?: 0 | 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128 | 144 | 172
  inlineSize?: number
  shrink?: boolean
  grow?: boolean
  className?: string
  // style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}

export const Space = ({ as: Comp = "div", ...props }: Props) => {
  return (
    <Comp
      className={cx(
        props.className,
        props.size && sizes[props.size],
        props.sizeMedium && sizesMedium[props.sizeMedium],
        props.sizeLarge && sizesLarge[props.sizeLarge],
        props.shrink != null &&
          (props.shrink ? SHRINK_1_CLASS : SHRINK_0_CLASS),
        props.grow != null && (props.grow ? GROW_1_CLASS : GROW_0_CLASS)
      )}
      style={props.inlineSize ? { flexBasis: props.inlineSize } : undefined}
      data-space={IS_DEV ? props.size : undefined} // Add data- props in development mode
    />
  )
}
