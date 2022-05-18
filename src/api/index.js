export const BASE_URL = process.env.REACT_APP_BASE_URL;

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

export async function getUserInfo() {
  const url = `${BASE_URL}/users/me`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("jwt"),
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {}
}
