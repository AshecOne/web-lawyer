import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: "hdkg0t0kpv9y",
    environment: 'master',
    accessToken: "X9XSVjm98OCv-0YYgYK7zCScz4nToSxQ2hSSzAKL0ik",
  });
};

const client = createContentClient();

export const getEntriesByType = async (type: any) => {
  const response = await client.getEntries({
    content_type: type,
  });
  return response.items;
};

export const getBlogPosts = async () => {
  const results = await getEntriesByType('blogspot');
  const blogPosts = results.map((blog: any) => blog.fields);
  return blogPosts;
};