
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
  ]
} as Config
