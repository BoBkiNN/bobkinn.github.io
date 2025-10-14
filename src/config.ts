
interface LinkConfig {
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


export default {
  mainAvatar: "main",
  links: {
    some: {
      url: "https://some.url",
      icons: [
        "assets/localsome.png",
        "https://some.url/favicon.ico"
      ],
      text: "Some service"
    },
    github: {
      url: "https://github.com/BoBkiNN",
      icons: ["assets/icons/github.svg"],
      text: "GitHub"
    }
  }
}
