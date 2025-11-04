import { Streamer } from "@repo/common";

export class StreamerUtils {

  static getLogoSVG(streamer: Streamer): string {
    switch (streamer) {
      case 'appleTV+':
        return '/appleTVPlus.svg'
      case 'netflix':
        return '/netflix.svg'
      case 'primeVideo':
        return '/primeVideo.svg'
      default:
        throw Error(`Logo for ${streamer} not found`);
    }
  }

}