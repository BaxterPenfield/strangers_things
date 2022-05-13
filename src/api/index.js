export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt";

export async function fetchPosts() {
  const url = `${BASE_URL}/posts`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const posts = data.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
}
