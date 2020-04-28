import { css } from "linaria"
import { MEDIUM, LARGE_UP } from "../../util/breakpoints"

export const GROW_CLASS = css`
  flex-grow: 1;
`

//-- align
const ALIGN_START = css`
  align-items: flex-start;
`
const ALIGN_END = css`
  align-items: flex-end;
`
const ALIGN_CENTER = css`
  align-items: center;
`
const ALIGN_BETWEEN = css`
  align-items: space-between;
`
export const align = {
  start: ALIGN_START,
  end: ALIGN_END,
  center: ALIGN_CENTER,
  between: ALIGN_BETWEEN,
}

//-- justify
const JUSTIFY_START = css`
  justify-content: flex-start;
`
const JUSTIFY_END = css`
  justify-content: flex-end;
`
const JUSTIFY_CENTER = css`
  justify-content: center;
`
const JUSTIFY_BETWEEN = css`
  justify-content: space-between;
`
const JUSTIFY_AROUND = css`
  justify-content: space-around;
`
export const justify = {
  start: JUSTIFY_START,
  end: JUSTIFY_END,
  center: JUSTIFY_CENTER,
  between: JUSTIFY_BETWEEN,
  around: JUSTIFY_AROUND,
}

//-- direction
const DIRECTION_ROW = css`
  flex-direction: row;
`
const DIRECTION_COLUMN = css`
  flex-direction: column;
`
export const direction = {
  row: DIRECTION_ROW,
  column: DIRECTION_COLUMN,
}

//-- cellTop
const CELL_TOP_1 = css`
  grid-row-start: 1;
`
const CELL_TOP_2 = css`
  grid-row-start: 2;
`
const CELL_TOP_3 = css`
  grid-row-start: 3;
`
const CELL_TOP_4 = css`
  grid-row-start: 4;
`

export const cellTop = {
  "1": CELL_TOP_1,
  "2": CELL_TOP_2,
  "3": CELL_TOP_3,
  "4": CELL_TOP_4,
}

//-- cellTopMedium
const CELL_TOP_MEDIUM_1 = css`
  @media ${MEDIUM} {
    grid-row-start: 1;
  }
`
const CELL_TOP_MEDIUM_2 = css`
  @media ${MEDIUM} {
    grid-row-start: 2;
  }
`
const CELL_TOP_MEDIUM_3 = css`
  @media ${MEDIUM} {
    grid-row-start: 3;
  }
`
const CELL_TOP_MEDIUM_4 = css`
  @media ${MEDIUM} {
    grid-row-start: 4;
  }
`

export const cellTopMedium = {
  "1": CELL_TOP_MEDIUM_1,
  "2": CELL_TOP_MEDIUM_2,
  "3": CELL_TOP_MEDIUM_3,
  "4": CELL_TOP_MEDIUM_4,
}

//-- cellTopLarge
const CELL_TOP_LARGE_1 = css`
  @media ${LARGE_UP} {
    grid-row-start: 1;
  }
`
const CELL_TOP_LARGE_2 = css`
  @media ${LARGE_UP} {
    grid-row-start: 2;
  }
`
const CELL_TOP_LARGE_3 = css`
  @media ${LARGE_UP} {
    grid-row-start: 3;
  }
`
const CELL_TOP_LARGE_4 = css`
  @media ${LARGE_UP} {
    grid-row-start: 4;
  }
`
export const cellTopLarge = {
  "1": CELL_TOP_LARGE_1,
  "2": CELL_TOP_LARGE_2,
  "3": CELL_TOP_LARGE_3,
  "4": CELL_TOP_LARGE_4,
}

//-- cellLeft
const CELL_LEFT_1 = css`
  grid-column-start: 1;
`
const CELL_LEFT_2 = css`
  grid-column-start: 2;
`
const CELL_LEFT_3 = css`
  grid-column-start: 3;
`
const CELL_LEFT_4 = css`
  grid-column-start: 4;
`

export const cellLeft = {
  "1": CELL_LEFT_1,
  "2": CELL_LEFT_2,
  "3": CELL_LEFT_3,
  "4": CELL_LEFT_4,
}

//-- cellLeftMedium
const CELL_LEFT_MEDIUM_1 = css`
  @media ${MEDIUM} {
    grid-column-start: 1;
  }
`
const CELL_LEFT_MEDIUM_2 = css`
  @media ${MEDIUM} {
    grid-column-start: 2;
  }
`
const CELL_LEFT_MEDIUM_3 = css`
  @media ${MEDIUM} {
    grid-column-start: 3;
  }
`
const CELL_LEFT_MEDIUM_4 = css`
  @media ${MEDIUM} {
    grid-column-start: 4;
  }
`
const CELL_LEFT_MEDIUM_5 = css`
  @media ${MEDIUM} {
    grid-column-start: 5;
  }
`
const CELL_LEFT_MEDIUM_6 = css`
  @media ${MEDIUM} {
    grid-column-start: 6;
  }
`
const CELL_LEFT_MEDIUM_7 = css`
  @media ${MEDIUM} {
    grid-column-start: 7;
  }
`
const CELL_LEFT_MEDIUM_8 = css`
  @media ${MEDIUM} {
    grid-column-start: 8;
  }
`

export const cellLeftMedium = {
  "1": CELL_LEFT_MEDIUM_1,
  "2": CELL_LEFT_MEDIUM_2,
  "3": CELL_LEFT_MEDIUM_3,
  "4": CELL_LEFT_MEDIUM_4,
  "5": CELL_LEFT_MEDIUM_5,
  "6": CELL_LEFT_MEDIUM_6,
  "7": CELL_LEFT_MEDIUM_7,
  "8": CELL_LEFT_MEDIUM_8,
}

//-- cellLeftLarge
const CELL_LEFT_LARGE_1 = css`
  @media ${LARGE_UP} {
    grid-column-start: 1;
  }
`
const CELL_LEFT_LARGE_2 = css`
  @media ${LARGE_UP} {
    grid-column-start: 2;
  }
`
const CELL_LEFT_LARGE_3 = css`
  @media ${LARGE_UP} {
    grid-column-start: 3;
  }
`
const CELL_LEFT_LARGE_4 = css`
  @media ${LARGE_UP} {
    grid-column-start: 4;
  }
`
const CELL_LEFT_LARGE_5 = css`
  @media ${LARGE_UP} {
    grid-column-start: 5;
  }
`
const CELL_LEFT_LARGE_6 = css`
  @media ${LARGE_UP} {
    grid-column-start: 6;
  }
`
const CELL_LEFT_LARGE_7 = css`
  @media ${LARGE_UP} {
    grid-column-start: 7;
  }
`
const CELL_LEFT_LARGE_8 = css`
  @media ${LARGE_UP} {
    grid-column-start: 8;
  }
`
const CELL_LEFT_LARGE_9 = css`
  @media ${LARGE_UP} {
    grid-column-start: 9;
  }
`
const CELL_LEFT_LARGE_10 = css`
  @media ${LARGE_UP} {
    grid-column-start: 10;
  }
`
const CELL_LEFT_LARGE_11 = css`
  @media ${LARGE_UP} {
    grid-column-start: 11;
  }
`
const CELL_LEFT_LARGE_12 = css`
  @media ${LARGE_UP} {
    grid-column-start: 12;
  }
`
export const cellLeftLarge = {
  "1": CELL_LEFT_LARGE_1,
  "2": CELL_LEFT_LARGE_2,
  "3": CELL_LEFT_LARGE_3,
  "4": CELL_LEFT_LARGE_4,
  "5": CELL_LEFT_LARGE_5,
  "6": CELL_LEFT_LARGE_6,
  "7": CELL_LEFT_LARGE_7,
  "8": CELL_LEFT_LARGE_8,
  "9": CELL_LEFT_LARGE_9,
  "10": CELL_LEFT_LARGE_10,
  "11": CELL_LEFT_LARGE_11,
  "12": CELL_LEFT_LARGE_12,
}

//-- cellWidth
const CELL_WIDTH_ALL = css`
  grid-column: 1/-1;
`
const CELL_WIDTH_1 = css`
  grid-column-end: span 1;
`
const CELL_WIDTH_2 = css`
  grid-column-end: span 2;
`
const CELL_WIDTH_3 = css`
  grid-column-end: span 3;
`
const CELL_WIDTH_4 = css`
  grid-column-end: span 4;
`

export const cellWidth = {
  all: CELL_WIDTH_ALL,
  "1": CELL_WIDTH_1,
  "2": CELL_WIDTH_2,
  "3": CELL_WIDTH_3,
  "4": CELL_WIDTH_4,
}

//-- cellWidthMedium
const CELL_WIDTH_MEDIUM_1 = css`
  @media ${MEDIUM} {
    grid-column-end: span 1;
  }
`
const CELL_WIDTH_MEDIUM_2 = css`
  @media ${MEDIUM} {
    grid-column-end: span 2;
  }
`
const CELL_WIDTH_MEDIUM_3 = css`
  @media ${MEDIUM} {
    grid-column-end: span 3;
  }
`
const CELL_WIDTH_MEDIUM_4 = css`
  @media ${MEDIUM} {
    grid-column-end: span 4;
  }
`
const CELL_WIDTH_MEDIUM_5 = css`
  @media ${MEDIUM} {
    grid-column-end: span 5;
  }
`
const CELL_WIDTH_MEDIUM_6 = css`
  @media ${MEDIUM} {
    grid-column-end: span 6;
  }
`
const CELL_WIDTH_MEDIUM_7 = css`
  @media ${MEDIUM} {
    grid-column-end: span 7;
  }
`
const CELL_WIDTH_MEDIUM_8 = css`
  @media ${MEDIUM} {
    grid-column-end: span 8;
  }
`

export const cellWidthMedium = {
  "1": CELL_WIDTH_MEDIUM_1,
  "2": CELL_WIDTH_MEDIUM_2,
  "3": CELL_WIDTH_MEDIUM_3,
  "4": CELL_WIDTH_MEDIUM_4,
  "5": CELL_WIDTH_MEDIUM_5,
  "6": CELL_WIDTH_MEDIUM_6,
  "7": CELL_WIDTH_MEDIUM_7,
  "8": CELL_WIDTH_MEDIUM_8,
}

//-- cellWidthLarge
const CELL_WIDTH_LARGE_1 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 1;
  }
`
const CELL_WIDTH_LARGE_2 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 2;
  }
`
const CELL_WIDTH_LARGE_3 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 3;
  }
`
const CELL_WIDTH_LARGE_4 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 4;
  }
`
const CELL_WIDTH_LARGE_5 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 5;
  }
`
const CELL_WIDTH_LARGE_6 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 6;
  }
`
const CELL_WIDTH_LARGE_7 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 7;
  }
`
const CELL_WIDTH_LARGE_8 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 8;
  }
`
const CELL_WIDTH_LARGE_9 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 9;
  }
`
const CELL_WIDTH_LARGE_10 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 10;
  }
`
const CELL_WIDTH_LARGE_11 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 11;
  }
`
const CELL_WIDTH_LARGE_12 = css`
  @media ${LARGE_UP} {
    grid-column-end: span 12;
  }
`
export const cellWidthLarge = {
  "1": CELL_WIDTH_LARGE_1,
  "2": CELL_WIDTH_LARGE_2,
  "3": CELL_WIDTH_LARGE_3,
  "4": CELL_WIDTH_LARGE_4,
  "5": CELL_WIDTH_LARGE_5,
  "6": CELL_WIDTH_LARGE_6,
  "7": CELL_WIDTH_LARGE_7,
  "8": CELL_WIDTH_LARGE_8,
  "9": CELL_WIDTH_LARGE_9,
  "10": CELL_WIDTH_LARGE_10,
  "11": CELL_WIDTH_LARGE_11,
  "12": CELL_WIDTH_LARGE_12,
}
