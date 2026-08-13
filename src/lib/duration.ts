import { differenceInCalendarMonths } from "date-fns"

export function parseMonthYear(value: string): Date {
  const [month, year] = value.split("/").map(Number)
  return new Date(year, month - 1, 1)
}

export function calculateDurationLabel(startDate: string, endDate?: string): string {
  const start = parseMonthYear(startDate)
  const end = endDate ? parseMonthYear(endDate) : new Date()
  const totalMonths = differenceInCalendarMonths(end, start)

  if (totalMonths <= 0) return "< 1 Monat"

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []

  if (years > 0) parts.push(`${years} ${years === 1 ? "Jahr" : "Jahre"}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? "Monat" : "Monate"}`)

  return parts.join(" ")
}

export function formatPeriodRange(startDate: string, endDate?: string): string {
  return `${startDate} – ${endDate ?? "heute"}`
}
