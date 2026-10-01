export function createPage(name, config = {}) {
  return { name, ...config };
}

export function createModule({ name, pages = [] }) {
  return {
    name,
    pages: pages.map((page) => createPage(page)),
  };
}
