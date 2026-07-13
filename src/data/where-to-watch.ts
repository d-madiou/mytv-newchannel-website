// src/data/where-to-watch.ts
import { WhereToWatchData } from "@/types";

export const whereToWatchData: WhereToWatchData = {
  satellite: [
    {
      provider: "MYTV",
      frequency: "474 MHz",
      transponder: "Digital Terrestrial",
    },
  ],
  ottLinks: [
    {
      platform: "Google Play",
      url: "https://play.google.com/store/apps/details?id=com.arus.tv",
      iconUrl: "/images/where-to-watch/google.png",
    },
    {
      platform: "App Store",
      url: "https://apps.apple.com/app/arus-tv/id123456789",
      iconUrl: "/images/where-to-watch/apple.png",
    },
    {
      platform: "AppGallery",
      url: "https://appgallery.huawei.com/app/C123456789",
      iconUrl: "/images/where-to-watch/appGallery.png",
    },
    {
      platform: "Web Player",
      url: "https://watch.arus.tv",
      iconUrl: "/images/where-to-watch/web.png",
    },
  ],
  availableRegions: ["Malaysia"],
};