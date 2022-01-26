export async function onClickFunction() {
  let data = {};
  data.login = document.getElementsByName("email")[0].value;
  data.password = document.getElementsByName("pass")[0].value;
  const response = await fetch("http://localhost:8080/api/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
