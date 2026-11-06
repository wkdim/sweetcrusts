import { useEffect } from "react";

const SITE_NAME = "Sweet Crusts Bakery";

/**
 * Sets the document title and meta description for the current page.
 * Restores the previous values on unmount so navigating between routes
 * never leaves a stale title/description behind.
 */
function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

    let meta = document.querySelector('meta[name="description"]');
    let createdMeta = false;
    const previousDescription = meta ? meta.getAttribute("content") : null;

    if (description) {
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
        createdMeta = true;
      }
      meta.setAttribute("content", description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}${window.location.pathname}`);
    }

    return () => {
      document.title = previousTitle;
      if (meta && !createdMeta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}

export default usePageMeta;
