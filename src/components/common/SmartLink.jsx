import { Link } from "react-router-dom";

/*
  One link component for the whole site:
    - "/path"        → client-side <Link> (pages not built yet fall back to ComingSoonPage)
    - "https://..."  → normal <a> in a new tab
*/
export default function SmartLink({ href, children, ...props }) {
  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
