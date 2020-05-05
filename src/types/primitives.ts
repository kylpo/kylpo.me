type BooleanOnly = boolean | { [key: string]: boolean }
type StringOnly = string | { [key: string]: string }
type NumberOrString = number | string | { [key: string]: number | string }
type NumberOrBoolean = number | boolean | { [key: string]: number | boolean }

interface PrimitiveProps {
  tag?: string
  hidden?: BooleanOnly
  children?: React.ReactNode
  key?: React.Key
  className?: string
}

interface BoxProps extends PrimitiveProps {
  top?: NumberOrString
  right?: NumberOrString
  bottom?: NumberOrString
  left?: NumberOrString
  width?: NumberOrString
  maxWidth?: NumberOrString
  minWidth?: NumberOrString
  height?: NumberOrString
  maxHeight?: NumberOrString
  minHeight?: NumberOrString

  padding?: NumberOrString
  paddingTop?: NumberOrString
  paddingRight?: NumberOrString
  paddingBottom?: NumberOrString
  paddingLeft?: NumberOrString
  paddingVertical?: NumberOrString
  paddingHorizontal?: NumberOrString
  margin?: NumberOrString
  marginTop?: NumberOrString
  marginRight?: NumberOrString
  marginBottom?: NumberOrString
  marginLeft?: NumberOrString

  position?: "relative" | "fixed" | "static"
  // overflow: "overflow",
  // overflowX: "overflowX",
  // overflowY: "overflowY",
  // zIndex: "zIndex",

  grow?: NumberOrBoolean
  shrink?: NumberOrBoolean
  basis?: NumberOrString

  fit?: BooleanOnly
  absoluteFill?: BooleanOnly

  onMouseEnter?: Function
  onMouseLeave?: Function

  style?:
    | React.CSSProperties
    | { [key: string]: any }
    | { [key: string]: { [key: string]: any } }
}

interface StackBaseProps extends BoxProps {
  // wrap: "flexWrap",
  // grow?: NumberOrBoolean
  // shrink?: NumberOrBoolean
  // basis?: NumberOrString
  // order: "order",
  // alignContent: "alignContent",
  // alignSelf: "alignSelf",
  // align: "alignItems",
  // justify: "justifyContent",

  center?: BooleanOnly
  inline?: BooleanOnly
}

interface StackProps extends StackBaseProps {
  direction: "row" | "column" //today convert to v|h|z
}

interface SpaceProps extends Omit<PrimitiveProps, "children"> {
  size?: NumberOrString
  grow?: NumberOrBoolean
  shrink?: NumberOrBoolean
}

interface TextProps extends PrimitiveProps {
  size?: NumberOrString
  align?: StringOnly //TODO: 'center' | 'justify'
  color?: StringOnly
  decoration?: StringOnly //TODO
  decorationColor?: StringOnly
  font?: StringOnly
  height?: NumberOrString
  spacing?: NumberOrString
  transform?: "uppercase" | "capitalize" | "lowercase"
  weight?:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "normal"
    | "bolder"
  bold?: BooleanOnly
  center?: BooleanOnly
  antialiased?: BooleanOnly
  italic?: BooleanOnly
  uppercase?: BooleanOnly
  html?: BooleanOnly

  selectable?: boolean | "all" | "auto" | "text" | "none"

  style?:
    | React.CSSProperties
    | { [key: string]: any }
    | { [key: string]: { [key: string]: any } }
}

// declare function SPACE(props: SpaceProps): void

// declare var SPACE: SpaceProps

// from https://github.com/microsoft/TypeScript/issues/15449#issuecomment-385959396
declare global {
  var SPACE: React.FC<SpaceProps>
  var TEXT: React.FC<TextProps>
  var BOX: React.FC<BoxProps>

  namespace JSX {
    // interface Element {
    //   SPACE: SpaceProps
    // }

    interface IntrinsicElements {
      space: SpaceProps

      // SPACE: SpaceProps

      v: StackBaseProps

      // V: {
      //   as?: string
      // }

      h: StackBaseProps

      z: StackBaseProps

      stack: StackProps

      box: BoxProps

      txt: TextProps
    }
  }
}

// fixes "All files must be modules when the '--isolatedModules' flag is provided.ts(1208)"
export {}
