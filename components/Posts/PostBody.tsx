import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { LocaleUnion } from "src/models/Translation.model";
import { H2, H3 } from "../MDX/Headings";
import { ATag } from "../MDX/Links";

interface Props {
  lang: LocaleUnion;
  content: string;
}

export const PostBody: React.FC<Props> = ({ content, lang = "en" }) => {
  const BodyComponent = useMemo(() => getMDXComponent(content), [content]);

  return (
    <div className="o-prose" data-lang={lang}>
      <BodyComponent
        components={
          {
            h2: H2,
            h3: H3,
            a: ATag,
          } as any
        }
      />
    </div>
  );
};
