import { UseBreakpointOptions, useBreakpointValue } from "@chakra-ui/react";

const defaultValues = {
  base: "60",
  sm: "60",
  md: "72",
  lg: "80",
  xl: "96",
};
const defaultOptions = {
  fallback: "md",
  ssr: false,
};

/**
 * It uses the `useBreakpointValue` hook from ChakraUI to create
 * customize widths based on current screen resolution.
 */
export const useVariantSize = (
  values?: typeof defaultValues,
  options?: UseBreakpointOptions
) => useBreakpointValue(values ?? defaultValues, options ?? defaultOptions);
