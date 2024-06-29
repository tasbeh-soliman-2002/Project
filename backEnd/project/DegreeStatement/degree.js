var tds = document.querySelectorAll("td");
// console.log(tds);
var printBtn = document.querySelector(".printBtn");
// console.log(printBtn);
var EditeTable = document.querySelector(".Edite");
// console.log(EditeTable);
var inputTable = document.querySelectorAll(".edite");
// console.log(inputTable);
var saveEdite = document.querySelector(".save");
// console.log(saveEdite);
var cancelEdite = document.querySelector(".cancel");
// console.log(cancelEdite);
printBtn.addEventListener("click", function () {
  window.print();
});

////////////////////////
// if user is doctor (admin) please put the condation

if (true) {
}

///////////////////////////

EditeTable.addEventListener("click", function () {
  for (var i = 0; i < inputTable.length; i++) {
    inputTable[i].innerHTML = `<input type="text"/>`;
  }
  EditeTable.classList.add("hide");
  saveEdite.classList.remove("hide");
  cancelEdite.classList.remove("hide");
});

saveEdite.addEventListener("click", function () {
  var inputs = document.querySelectorAll("input");
  // console.log(inputs);
  // console.log(inputTable);
  for (var valus = 0; valus < inputs.length; valus++) {
    // console.log(inputs[valus], inputs[valus].value);
    inputTable[valus].innerHTML = `${inputs[valus].value}`;

    EditeTable.classList.remove("hide");
    saveEdite.classList.add("hide");
    cancelEdite.classList.add("hide");
  }
});
///////////////////////////
// when user click cancel
// Get data from API
//////////////////////////
cancelEdite.addEventListener("click", function () {
  EditeTable.classList.remove("hide");
  saveEdite.classList.add("hide");
  cancelEdite.classList.add("hide");
});
