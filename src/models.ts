import {type LinkConfig} from "./config"

export interface Project {
  name: string
  /**
   * Short project description id shown in project card
   */
  descriptionId: string
  icon?: string
  expandLinks: boolean
  links: LinkConfig[]
}

export interface Birthday {
  day: number
  month: number
  year?: number
}

/** Formats the birthday as `dd.mm` or `dd.mm.yyyy` */
export function formatBirthday(b: Birthday): string {
  const dd = String(b.day).padStart(2, '0')
  const mm = String(b.month).padStart(2, '0')
  return b.year ? `${dd}.${mm}.${b.year}` : `${dd}.${mm}`
}

/** Returns true if the birthday matches today's date (local browser time) */
export function isTodayBirthday(b: Birthday): boolean {
  const today = new Date()
  return (
    b.day === today.getDate() &&
    b.month === today.getMonth() + 1 // JS months are 0-based
  )
}
