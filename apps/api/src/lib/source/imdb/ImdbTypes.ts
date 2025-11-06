export type ImdbResponse = {
  d: ImdbTitle[];
};

export type ImdbTitle = {
  id: string;
  qid?: string;
  l: string;
  q: string;
  y: number;
  yr: string;
  i?: ImdbTitleImage;
};

export type ImdbTitleImage = {
  imageUrl: string;
  height: number;
  width: number;
};
