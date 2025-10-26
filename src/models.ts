
export interface Project {
  name: string
  /**
   * Short project description id shown in project card
   */
  descriptionId: string
  icon?: string
  expandLinks?: boolean
  links: LinkConfig[]
}

export interface Birthday {
  day: number
  month: number
  year?: number
}

export interface LinkConfig {
  url: string;
  text: string;
  icons?: string[];
}

export interface Config {
  mainAvatar: string
  links: Record<string, LinkConfig>
  gameUids: Record<string, string>
  altNames: string[]
  projects: Project[]
  more_projects_treshold: number
  birthday: Birthday
  myTimezone: string,
  thisRepositoryLink: string
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
