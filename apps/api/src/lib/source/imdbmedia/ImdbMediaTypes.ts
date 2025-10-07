export type ImdbMediaResponse = {
  d: ImdbMediaTitle[];
};

export type ImdbMediaTitle = {
  id: string;
  qid: string;
  l: string;
  q: string;
  y: number;
  i: ImdbMediaTitleImage;
};

export type ImdbMediaTitleImage = {
  imageUrl: string;
  height: number;
  width: number;
};
