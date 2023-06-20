import { memo } from "react";

interface Props {
  data: {
    text: string;
    value: number;
  }[];
  maxFontSize?: number;
  minFontSize?: number;
}

function WordCloud({ data, maxFontSize = 60, minFontSize = 5 }: Props) {
  const getWordCloud = () =>
    addNormalizedFontSize().map((item) => (
      <li>
        <a
          style={{ fontSize: item.normalizedFontSize }}
          href={`/tag/${item.text}`}
          data-weight={item.value}
        >
          {item.text}
        </a>
      </li>
    ));

  const addNormalizedFontSize = () => {
    const max = Math.max(...data.map((item) => item.value));
    const min = Math.min(...data.map((item) => item.value));
    return data.map((item) => ({
      ...item,
      normalizedFontSize:
        ((item.value - min) / (max - min)) * (maxFontSize - minFontSize) +
        minFontSize,
    }));
  };

  return (
    <>
      <h1>WordCloud</h1>
      <ul className="cloud" role="navigation" aria-label="Webdev tag cloud">
        {getWordCloud()}
      </ul>
    </>
  );
}

export default memo(WordCloud);
