import { useEffect } from "react";

export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && description) desc.setAttribute("content", description);
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", title);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://brandrootsalon.com${window.location.pathname}`;
  }, [title, description]);
};
