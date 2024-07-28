import Link from "next/link";

export default function LinkButton(props) {
  const { color = "orange", href, children } = props;

  return (
    <Link href={href} className={`o-bttn o-bttn--${color}`}>
      {children}
    </Link>
  );
}
