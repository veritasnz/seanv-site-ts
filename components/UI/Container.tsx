import { ReactNode } from "react";
import { Clouds } from "./Animations/Clouds";

interface Props {
  type: "second" | "first";
  children: ReactNode;
  isShortTitle?: boolean;
  title?: string;
  width?: "thin" | null;
}

export const Container: React.FC<Props> = ({
  title,
  type = "second",
  isShortTitle = false,
  width = null,
  children,
}) => {
  return (
    <section className={`o-container o-container--${type}`}>
      {type === "first" && <Clouds count={2} />}

      <div className={`o-wrapper ${width && `o-wrapper--${width}`}`}>
        {title && (
          <h2 className={`o-title ${isShortTitle && "o-title--short"}`}>
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  );
};
