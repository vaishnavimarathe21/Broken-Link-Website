  // Following the same pattern as button styles but adapted for dividers
  import { theme,sizesArray } from "@/theme";
  export const dividerVariants = {
    primary: {
      backgroundColor: theme.colors.cyan[5],
      height: sizesArray[1],
      margin: theme.spacing.md,
    },
    secondary: {
      backgroundColor: theme.colors.success[5],
      height: sizesArray[1],
      margin:theme.spacing.md,
    },
    muted: {
      backgroundColor: theme.colors.primary[5],
      height: sizesArray[1],
      margin:theme.spacing.md,
    },
    border: {
      backgroundColor: theme.colors.purple[5],
      height: sizesArray[1],
      margin:theme.spacing.md,
    },
    accent: {
      backgroundColor: theme.colors.primary[5],
      height: sizesArray[1],
      margin:theme.spacing.md,
    },
    error: {
      backgroundColor: theme.colors.error[5],
      height: sizesArray[1],
      margin:theme.spacing.md,
    },
  }
