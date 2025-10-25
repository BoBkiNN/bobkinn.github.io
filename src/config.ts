import type { Config } from "./models";

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
    },
    modrinth: {
      url: "https://modrinth.com/user/BoBkiNN",
      icons: ["https://github.com/modrinth/code/blob/4a9f0b8a0ef189c15b411815f28e845109120316/apps/app/icons/Square30x30Logo.png?raw=true"],
      text: "Modrinth"
    },
    mal: {
      url: "https://myanimelist.net/profile/BoBkiNN_",
      text: "MyAnimeList",
      icons: ["https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"]
    },
    reddit: {
      url: "https://www.reddit.com/user/BoBkiNN_/",
      text: "Reddit",
      icons: ["assets/icons/reddit.svg"]
    }
  },
  gameUids: {
    "736950455": "Genshin Impact",
    "1500835421": "ZenlessZoneZero"
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
      descriptionId: "project.opentopublic",
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
  ],
  birthday: {
    day: 24,
    month: 11
  },
  myTimezone: "UTC+5",
  thisRepositoryLink: "https://github.com/BoBkiNN/bobkinn.github.io/"
} as Config
