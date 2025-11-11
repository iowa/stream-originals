import {Streamer} from '@repo/common';

export type Paging = {
  page?: number;
  pageSize?: number;
};

export type TitlesParams = {
  streamer?: Streamer;
} & Paging;
