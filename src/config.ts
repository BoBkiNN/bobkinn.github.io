import type { Project } from "./models";

export interface LinkConfig {
  url: string;
  text: string;
  icons?: string[];
}

export class LinkItem {
  constructor(
    public url: string,
    public text: string,
    public icons: string[]
  ) {}

  static fromConfig(obj: LinkConfig): LinkItem {
    return new LinkItem(obj.url, obj.text, obj.icons || []);
  }
}

export interface Config {
  mainAvatar: string
  links: Record<string, LinkConfig>
  gameUids: Record<string, string>
  altNames: string[]
  projects: Project[]
}


export default {
  mainAvatar: "main",
  links: {
    github: {
      url: "https://github.com/BoBkiNN",
      icons: ["assets/icons/github.svg"],
      text: "GitHub"
    },
    youtube: {
      url: "https://www.youtube.com/@bobkinn",
      icons: ["assets/icons/youtube.png"],
      text: "YouTube"
    }
  },
  gameUids: {
    "34567890": "Some game"
  },
  altNames: [
    "BoBkiNN_",
    "bobkinn",
    "bobkinn_"
  ],
  projects: [
    {
      name: "OpenToPublic",
      icon: "https://github.com/BoBkiNN/OpenToPublic/blob/9151d43fe4437e2dbada6d0cda842c0b0b177abe/common/src/main/resources/assets/opentopublic/icon.png?raw=true",
      descriptionId: "Some descr usasdyasduyasguydfauysfduyasfduyfasdfuayfduasdfasoyfdoyasfdoyfasoydf fgdfg\nThis is some text with meaning that must be long enough to see bug. Oh i see it works. But is it? Yep its works",
      expandLinks: true,
      links: [
        {
          url: "https://github.com/BoBkiNN/OpenToPublic",
          text: "GitHub",
          icons: [
            "assets/icons/github.svg"
          ]
        },
        {
          url: "https://modrinth.com/mod/opentopublic",
          text: "Modrinth",
          icons: [
            "https://github.com/modrinth/code/blob/4a9f0b8a0ef189c15b411815f28e845109120316/apps/app/icons/Square30x30Logo.png?raw=true"
          ]
        }
      ]
    }
  ]
} as Config
