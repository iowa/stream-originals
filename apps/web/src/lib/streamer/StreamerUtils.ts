import {Streamer} from '@repo/common';

export class StreamerUtils {
  static getLogoSVG(streamer: Streamer): string {
    switch (streamer) {
      case 'appleTV+':
        return '/appleTVPlus.svg';
      case 'disney+':
        return '/disneyPlus.svg';
      case 'hboMax': {
        return '/hboMax.svg';
      }
      case 'primeVideo':
        return '/primeVideo.svg';
      case 'netflix':
        return '/netflix.svg';
      default:
        throw Error(`Logo for ${streamer} not found`);
    }
  }
}
