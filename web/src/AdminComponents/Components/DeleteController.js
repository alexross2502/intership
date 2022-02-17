export async function DeleteController(url, id) {
  const response = await fetch(`http://localhost:8080/api/${url}/${id}`, {
    method: "DELETE",
  });
  return await response.json().then((answer) => {
    return answer;
  });
}
