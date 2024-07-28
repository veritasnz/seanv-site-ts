import { Highlight, themes } from "prism-react-renderer";

interface Props {
  lang: "jsx" | "php";
  children: string;
}

export const Code: React.FC<Props> = ({ lang, children }) => {
  const exampleCode = children.trim();

  return (
    <Highlight code={exampleCode} language={lang} theme={themes.shadesOfPurple}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
