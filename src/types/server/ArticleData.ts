type ArrayData = {
  readonly id: string | number;
  readonly provider: string;
};

type ArticleData = {
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly imageUrl: string;
  readonly newsSite: string;
  readonly summary: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly featured: boolean;
  readonly launches: ArrayData[];
};

export default ArticleData;
