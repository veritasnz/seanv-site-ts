import { Email } from "react-obfuscate-email";
import Icon from "../UI/Icons/Icon";

interface Props {
  color: "inherit" | "currentColor";
  hasTooltip: boolean;
  className: string;
}

export const SocialLinks: React.FC<Props> = ({
  color,
  hasTooltip = true,
  className,
}) => {
  return (
    <ul className={className}>
      {/* <li>
        <a
          href="https://www.linkedin.com/in/seanveritas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linked In"
        >
          <Icon
            name="linkedin"
            tooltip={hasTooltip ? "LinkedIn" : false}
            color={color}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/veritas_nz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Icon
            name="twitter"
            tooltip={hasTooltip ? "Twitter" : false}
            color={color}
          />
        </a>
      </li> */}
      <li>
        <a
          href="https://github.com/veritasnz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <Icon
            name="github"
            tooltip={hasTooltip ? "Github" : false}
            color={color}
          />
        </a>
      </li>
      <li>
        {process.env.NEXT_PUBLIC_EMAIL && (
          <Email
            email={process.env.NEXT_PUBLIC_EMAIL}
            subject="Hi there!"
            aria-label="Email"
          >
            <Icon
              name="contact"
              tooltip={hasTooltip ? "Email" : false}
              color={color}
            />
          </Email>
        )}
      </li>
    </ul>
  );
};
