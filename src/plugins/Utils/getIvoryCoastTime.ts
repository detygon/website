/**
 * Workaround to avoid removing references to this helper across the codebase
 */
export default function getIvoryCoastTime(): Date {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone: "Africa/Abidjan",
    })
  )
}
