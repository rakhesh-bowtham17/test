
export async function getUsers() {
  const response = await fetch('https://example.com/api/users');
  if (!response.ok) {
    throw new Error('Error fetching users');
  }
  const data = await response.json();
  return data;
}

export async function createUser(user) {
  const response = await fetch('https://example.com/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Error creating user');
  }
}
