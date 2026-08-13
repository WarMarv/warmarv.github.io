import { describe, it, expect } from "vitest"
import { calculateDurationLabel, formatPeriodRange, parseMonthYear } from "./duration"

describe("parseMonthYear", () => {
  it("parses MM/YYYY into the first day of that month", () => {
    const date = parseMonthYear("03/2025")
    expect(date.getFullYear()).toBe(2025)
    expect(date.getMonth()).toBe(2)
    expect(date.getDate()).toBe(1)
  })
})

describe("calculateDurationLabel", () => {
  it("formats a closed range of 2 years and 3 months", () => {
    expect(calculateDurationLabel("01/2022", "04/2024")).toBe("2 Jahre 3 Monate")
  })

  it("uses the singular Jahr and omits a zero-month suffix", () => {
    expect(calculateDurationLabel("01/2024", "01/2025")).toBe("1 Jahr")
  })

  it("uses the singular Monat", () => {
    expect(calculateDurationLabel("01/2025", "02/2025")).toBe("1 Monat")
  })

  it("returns '< 1 Monat' when start and end fall in the same month", () => {
    expect(calculateDurationLabel("06/2025", "06/2025")).toBe("< 1 Monat")
  })

  it("counts calendar months across a year boundary", () => {
    expect(calculateDurationLabel("11/2023", "02/2024")).toBe("3 Monate")
  })

  it("computes an ongoing range against today without throwing", () => {
    const label = calculateDurationLabel("01/2020")
    expect(label).not.toBe("")
    expect(label).toMatch(/Jahr|Monat/)
  })
})

describe("formatPeriodRange", () => {
  it("falls back to 'heute' when no end date is given", () => {
    expect(formatPeriodRange("03/2025")).toBe("03/2025 – heute")
  })

  it("renders both dates for a closed range", () => {
    expect(formatPeriodRange("01/2025", "06/2025")).toBe("01/2025 – 06/2025")
  })
})
