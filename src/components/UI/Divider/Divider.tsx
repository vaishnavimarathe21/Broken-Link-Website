import type React from "react"
import type { CSSProperties } from "react"
import { dividerVariants } from "./styles"
import { Divider as MantineDivider } from "@mantine/core"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties
  variant?: keyof typeof dividerVariants
  orientation?: "horizontal" | "vertical"
}

export const Divider = ({
  style,
  variant = "secondary",
  orientation = "horizontal",
  ...props
}: DividerProps) => {
  const variantStyle = dividerVariants[variant]

  const defaultStyle =
    orientation === "horizontal"
      ? { height: "1px" }
      : { width: "1px" }

  return (
    <MantineDivider
      orientation={orientation}
      style={{ ...variantStyle, ...defaultStyle, ...style }}
      {...props}
    />
  )
}
