import type { Config } from "./models";

export default {
  mainAvatar: "main",
  links: {
    github: {
      url: "https://github.com/BoBkiNN",
      icon: "assets/icons/github.svg",
      text: "GitHub"
    },
    youtube: {
      url: "https://www.youtube.com/@bobkinn",
      icon: "assets/icons/youtube.png",
      text: "YouTube"
    },
    modrinth: {
      url: "https://modrinth.com/user/BoBkiNN",
      icon: "assets/icons/modrinth.png",
      text: "Modrinth"
    },
    mal: {
      url: "https://myanimelist.net/profile/BoBkiNN_",
      text: "MyAnimeList",
      icon: "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
    },
    reddit: {
      url: "https://www.reddit.com/user/BoBkiNN_/",
      text: "Reddit",
      icon: "assets/icons/reddit.svg"
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
      links: [
        {
          url: "https://github.com/BoBkiNN/OpenToPublic",
          text: "GitHub",
          icon: "assets/icons/github.svg"
        },
        {
          url: "https://modrinth.com/mod/opentopublic",
          text: "Modrinth",
          icon: "assets/icons/modrinth.png"
        },
        {
          url: "https://www.curseforge.com/minecraft/mc-mods/opentopublic",
          text: "CurseForge",
          icon: "https://www.curseforge.com/favicon.ico"
        }
      ]
    },
    {
      name: "$project.this.title",
      descriptionId: "project.this",
      icon: "web-app-manifest-192x192.png",
      links: [
        {
          url: "https://github.com/BoBkiNN/bobkinn.github.io/",
          text: "GitHub",
          icon: "assets/icons/github.svg"
        }
      ]
    },
    {
      name: "ClickHarvest",
      descriptionId: "project.clickharvest",
      icon: "https://cdn.modrinth.com/data/csrLULrs/2b2b0fd256cc20c51d16c8982ca1c4307471fbd2_96.webp",
      links: [
        {
          url: "https://github.com/BoBkiNN/ClickHarvest",
          text: "GitHub",
          icon: "assets/icons/github.svg"
        },
        {
          url: "https://modrinth.com/mod/clickharvest",
          text: "Modrinth",
          icon: "assets/icons/modrinth.png"
        }
      ]
    },
    {
      name: "CustomDiscs",
      descriptionId: "project.customdiscs",
      icon: "https://cdn.modrinth.com/data/jaSiMenJ/633a66f405d803bf3c1469d06d70e7412e0785c8.png",
      links: [
        {
          url: "https://github.com/BoBkiNN/CustomDiscs",
          text: "GitHub",
          icon: "assets/icons/github.svg"
        },
        {
          url: "https://modrinth.com/mod/customdiscs",
          text: "Modrinth",
          icon: "assets/icons/modrinth.png"
        }
      ]
    }
  ],
  more_projects_treshold: 5,
  birthday: {
    day: 24,
    month: 11
  },
  myTimezone: "UTC+5",
  thisRepositoryLink: "https://github.com/BoBkiNN/bobkinn.github.io/"
} as Config
