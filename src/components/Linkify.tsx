import Link from "next/link";
import { LinkIt, LinkItUrl } from "react-linkify-it";
import UserLinkTooltip from "./UserLinkTooltip.";
interface LinkifyProps {
  children: React.ReactNode;
}

const Linkify = ({ children }: LinkifyProps) => {
  return (
    <LinkifyUsername>
      <LinkifyHashtag>
        <LinkifyUrl>
          {children}
        </LinkifyUrl>
      </LinkifyHashtag>
    </LinkifyUsername>
  );
};
export default Linkify;

// This function is for url links and redirect to the following page
const LinkifyUrl = ({ children }: LinkifyProps) => {
  return (
    <LinkItUrl className="text-primary hover:underline">{children}</LinkItUrl>
  );
};

// This function is for username links and redirect to the following page
const LinkifyUsername = ({ children }: LinkifyProps) => {
  return (
    <LinkIt
      regex={/(@[a-zA-Z0-9_-]+)/}
      component={(match, key) => {
        return (
          <UserLinkTooltip
            key={key}
            username={match.slice(1)}
          >
            {match}
          </UserLinkTooltip>
        );
      }}
    >
      {children}
    </LinkIt>
  );
};

// This function is for hashtag links and redirect to the following page
const LinkifyHashtag = ({ children }: LinkifyProps) => {
  return (
    <LinkIt
      regex={/(#[a-zA-Z0-9_-]+)/}
      component={(match, key) => {
        return (
          <Link
            key={key}
            href={`/hashtag/${match.slice(1)}`}
            className="text-primary hover:underline"
          >
            {match}
          </Link>
        );
      }}
    >
      {children}
    </LinkIt>
  );
};
