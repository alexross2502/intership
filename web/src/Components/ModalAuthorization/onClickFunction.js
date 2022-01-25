export async function onClickFunction() {
  const email = document.getElementsByName("email")[0].value;
  const password = document.getElementsByName("pass")[0].value;
  const response = await fetch(
    `http://localhost:8080/api/admin/${email}/${password}`
  );
  let cont = await response.json();
  console.log(cont);
}
