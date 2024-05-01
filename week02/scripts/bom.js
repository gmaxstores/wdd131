const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const listEntry = document.createElement("li");
const deleteButton = document.createElement("button");

listEntry.textContent = input.value;
deleteButton.textContent = "&#10060;";

listEntry.append(deleteButton);
list.append(listEntry);