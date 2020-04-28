import React from "react"
import { css, cx } from "linaria"
import {
  GROW_CLASS,
  align,
  justify,
  direction,
  cellLeft,
  cellLeftMedium,
  cellLeftLarge,
  cellWidth,
  cellWidthMedium,
  cellWidthLarge,
  cellTop,
  cellTopMedium,
  cellTopLarge,
} from "./styles"

function buildSharedClassNames(props: Props) {
  // cellWidth of "all" negates all other grid props
  const gridColumnNames =
    props.cellWidth === "all"
      ? [cellWidth[props.cellWidth]]
      : [
          props.cellWidth && cellWidth[props.cellWidth],
          props.cellWidthMedium && cellWidthMedium[props.cellWidthMedium],
          props.cellWidthLarge && cellWidthLarge[props.cellWidthLarge],
          props.cellLeft && cellLeft[props.cellLeft],
          props.cellLeftMedium && cellLeftMedium[props.cellLeftMedium],
          props.cellLeftLarge && cellLeftLarge[props.cellLeftLarge],
        ]

  const alignmentClassNames = props.center
    ? [justify.center, align.center]
    : [
        props.justify && justify[props.justify],
        props.align && align[props.align],
      ]

  return [
    props.grow && GROW_CLASS,
    ...alignmentClassNames,
    ...gridColumnNames,
    props.cellTop && cellTop[props.cellTop],
    props.cellTopMedium && cellTopMedium[props.cellTopMedium],
    props.cellTopLarge && cellTopLarge[props.cellTopLarge],
    props.className,
  ]
}

type SmallCol = 1 | 2 | 3 | 4
type MediumCol = SmallCol | 5 | 6 | 7 | 8
type LargeCol = MediumCol | 9 | 10 | 11 | 12
type Row = 1 | 2 | 3 | 4

interface Props {
  className?: string
  children?: React.ReactNode
  align?: keyof typeof align
  justify?: keyof typeof justify
  grow?: boolean
  center?: boolean
  cellWidth?: SmallCol | "all" // "all" negates all other grid props
  cellWidthMedium?: MediumCol
  cellWidthLarge?: LargeCol
  cellLeft?: SmallCol
  cellLeftMedium?: MediumCol
  cellLeftLarge?: LargeCol
  cellTop?: Row
  cellTopMedium?: Row
  cellTopLarge?: Row
  style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}

interface BoxProps extends Props {
  direction?: keyof typeof direction
}

export const Box = ({ as: Comp = "div", ...props }: BoxProps) => (
  <Comp
    className={cx(
      css`
        display: flex;
      `,
      ...buildSharedClassNames(props),
      props.direction && direction[props.direction]
    )}
    style={props.style}
  >
    {props.children}
  </Comp>
)

export const H = ({ as: Comp = "div", ...props }: Props) => (
  <Comp
    className={cx(
      css`
        display: flex;
        flex-direction: row;
      `,
      ...buildSharedClassNames(props)
    )}
    style={props.style}
  >
    {props.children}
  </Comp>
)

export const V = ({ as: Comp = "div", ...props }: Props) => (
  <Comp
    className={cx(
      css`
        display: flex;
        flex-direction: column;
      `,
      ...buildSharedClassNames(props)
    )}
    style={props.style}
  >
    {props.children}
  </Comp>
)

// export { Box as Stack, Row as H, Col as V }
