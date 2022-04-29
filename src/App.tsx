import { Fragment, useState, useEffect } from "react";
import ArticleData from "./types/server/ArticleData";
import { getArticles } from "./data/api";
import Card from "./components/Card/Card";
import "./App.css";
import Panel from "./components/Panel/Panel";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
  const [articles, setArticles] = useState<ArticleData[] | null>();
  const isWindow1024 = useWindowSize(1024);
  const isWindow768 = useWindowSize(768);
  const subtitle = "Welcome to...";
  const title = "SpacedOut";

  const updateArticles = async () => {
    setArticles((await getArticles()) ?? null);
  };

  useEffect(() => {
    updateArticles();
  }, []);

  const articlesTsx = (
    articles: ArticleData[] | null,
    cols: number,
    col: number
  ) => {
    return articles && articles.length > 0 ? (
      articles
        .filter((_article, index) => index % cols === col)
        .map((article) => (
          <Fragment key={article.id}>
            <Card
              title={article.title}
              url={article.url}
              imageUrl={article.imageUrl}
              newsSite={article.newsSite}
              publishedAt={article.publishedAt}
            />
          </Fragment>
        ))
    ) : (
      <span>Sorry, no articles found</span>
    );
  };

  const getTSX = (): JSX.Element => {
    if (isWindow1024) {
      return (
        <>
          <div className="articles articles--column-1">
            {articles !== undefined ? (
              articlesTsx(articles, 3, 0)
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <div className="articles articles--column-2">
            <Panel subtitle={subtitle} title={title} />
            {articles !== undefined ? (
              articlesTsx(articles, 3, 1)
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <div className="articles articles--column-3">
            {articles !== undefined ? (
              articlesTsx(articles, 3, 2)
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </>
      );
    }
    if (isWindow768) {
      return (
        <>
          <div className="articles articles--column-1">
            {articles !== undefined ? (
              articlesTsx(articles, 2, 0)
            ) : (
              <span>Loading...</span>
            )}
          </div>
          <div className="articles articles--column-2">
            <Panel subtitle={subtitle} title={title} />
            {articles !== undefined ? (
              articlesTsx(articles, 2, 1)
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="articles articles--column-1">
          <Panel subtitle={subtitle} title={title} />
          {articles !== undefined ? (
            articlesTsx(articles, 1, 0)
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </>
    );
  };

  return <div className="App">{getTSX()}</div>;
};

export default App;
