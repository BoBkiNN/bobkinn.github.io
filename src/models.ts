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
