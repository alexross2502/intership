export async function GetAll(url) {
  const response = await fetch(`http://localhost:8080/api/${url}`);
  let answer = await response.json();
  return answer;
}
