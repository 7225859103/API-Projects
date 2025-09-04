let url = "http://universities.hipolabs.com/search?country=india&name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;
  console.log(state);

  let colArr = await getColleges(state);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArr) {
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.name;

    list.appendChild(li);
  }
}
// const country = "india";

async function getColleges(state) {
  try {
    let res = await axios.get(url + state);
    return res.data;
  } catch (err) {
    console.log("error - ", err);
    return [];
  }
}
