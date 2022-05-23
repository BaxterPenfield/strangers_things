export const BASE_URL = process.env.REACT_APP_BASE_URL;

const makeHeaders = (token) => {
  let headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }
  return headers;
};

export async function fetchPosts(token) {
  const url = `${BASE_URL}/posts`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: makeHeaders(token),
    });
    const data = await response.json();
    const posts = data.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  const url = `${BASE_URL}/users/register`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => response.json())
    .catch(console.error);
}

export async function loginUser(username, password) {
  const url = `${BASE_URL}/users/login`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {}
}

export async function getUserInfo(token) {
  const url = `${BASE_URL}/users/me`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: makeHeaders(token),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {}
}

export async function createPost(
  token,
  titleStr,
  descStr,
  priceStr,
  deliverBool
) {
  const url = `${BASE_URL}/posts`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({
        post: {
          title: titleStr,
          description: descStr,
          price: priceStr,
          willDeliver: deliverBool,
        },
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSinglePost(postID, token) {
  const url = `${BASE_URL}/posts/${postID}`
  try {
  const response = await fetch(url, {
    method: "GET",
    headers: makeHeaders(token)
  })
  const data = await response.json();
  return data;
} catch (error) {
  console.error(error);
}}