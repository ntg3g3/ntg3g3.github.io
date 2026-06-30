import { projects } from "@/data/projects";
import { site } from "@/data/site";

const staticPages = ["/", "/archive/", "/about/"];

export function GET() {
  const projectPages = projects
    .filter((project) => !project.externalLinks?.[0])
    .map((project) => `/projects/${project.slug}/`);

  const urls = [...staticPages, ...projectPages].map((path) => {
    const loc = new URL(path, site.url).toString();
    return `<url><loc>${loc}</loc></url>`;
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
