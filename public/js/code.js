function searchColors() {
  const search = document.getElementById("search").value;

  fetch("http://143.110.146.9/LAMPAPI/SearchColors.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: 1,
      search: search
    })
  })
  .then(response => response.json())
  .then(data => {
    const results = document.getElementById("results");
    results.innerHTML = "";

    if (data.results) {
      data.results.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.color;
        results.appendChild(li);
      });
    }
  })
  .catch(err => console.error(err));
}
