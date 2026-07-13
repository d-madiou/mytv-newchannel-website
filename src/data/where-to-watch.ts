import { WhereToWatchData } from "@/types";

export const whereToWatchData: WhereToWatchData = {
  satellite: [
    {
      provider: "Placeholder Satellite Co.",
      frequency: "11.595 GHz",
      transponder: "Transponder 12",
    },
  ],
  ottLinks: [
    {
      platform: "iOS App",
      url: "https://apps.apple.com/placeholder",
      iconUrl: "/images/where-to-watch/apple-placeholder.svg",
    },
    {
      platform: "Android App",
      url: "https://play.google.com/placeholder",
      iconUrl: "/images/where-to-watch/android-placeholder.svg",
    },
    {
      platform: "Web Player",
      url: "https://watch.rustv-placeholder.com",
      iconUrl: "/images/where-to-watch/web-placeholder.svg",
    },
  ],
  availableRegions: ["Europe", "North America", "Middle East"],
};