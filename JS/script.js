let data = []

let myHttp = new XMLHttpRequest();
myHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
myHttp.send();
myHttp.addEventListener("readystatechange", function () {
  if (this.readyState == 4) {
    data = JSON.parse(this.response)
    displayData()
  }
})

function displayData() {
  let cartona = "";
  for (let i = 0; i < data.length; i++) {
    cartona += `<div class="col-md-4">
  <div class="card rounded-5 bg-primary-subtle p-2">
    <h2 class="py-2">" ${data[i].id} "</h2>
    <h5 class="text-bg-success p-2 rounded-3">Status <span>${data[i].completed}</span></h5>
    <p class="py-1 h5">${data[i].title}</p>
  </div>
</div>`
  }
  document.getElementById("Dataa").innerHTML = cartona;
}