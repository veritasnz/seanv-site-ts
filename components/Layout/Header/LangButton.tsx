import Link from "next/link";
import { useRouter } from "next/router";

import Icon from "../../UI/Icons/Icon";

interface Props {}

export const LangButton: React.FC<Props> = ({}) => {
  const router = useRouter();

  let oppositeLocale = "jp";
  let oppositeIconName = "nihongo";
  let title = "Switch to Japanese";

  if (router.locale == "jp") {
    oppositeLocale = "en";
    oppositeIconName = "english";
    title = "英語に切り替える";
  }

  return (
    <Link
      href={router.asPath}
      locale={oppositeLocale}
      className="lang-button o-drop-in"
      title={title}
    >
      <Icon name={oppositeIconName} />
    </Link>
  );
};
