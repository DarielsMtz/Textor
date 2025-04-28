const input = document.getElementById("inputText");

input.addEventListener("input", updateCounts);

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight, 400) + "px";
}

function updateCounts() {
  const text = input.value;
  document.getElementById("charCount").textContent = text.length;
  document.getElementById("letterCount").textContent = (
    text.match(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g) || []
  ).length;
  document.getElementById("wordCount").textContent =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  document.getElementById("paragraphCount").textContent = text
    .split(/\n+/)
    .filter((p) => p.trim() !== "").length;
}

function transformToLower() {
  input.value = input.value.toLowerCase();
  updateCounts();
  autoResize(input);
}

function transformToUpper() {
  input.value = input.value.toUpperCase();
  updateCounts();
  autoResize(input);
}

function capitalizeText() {
  input.value = input.value
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
  updateCounts();
  autoResize(input);
}

function removeNumbers() {
  input.value = input.value.replace(/[0-9]/g, "");
  updateCounts();
  autoResize(input);
}

function removeLetters() {
  input.value = input.value.replace(/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, "");
  updateCounts();
  autoResize(input);
}

function removeLineBreaks() {
  input.value = input.value.replace(/\n/g, "");
  updateCounts();
  autoResize(input);
}

function removeSpaces() {
  input.value = input.value.replace(/ /g, "");
  updateCounts();
  autoResize(input);
}

function removeEmptyLines() {
  input.value = input.value
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
  updateCounts();
  autoResize(input);
}

function removeCustomChars() {
  const chars = document.getElementById("customChar").value;
  if (chars) {
    const pattern = new RegExp(
      "[" + chars.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&") + "]",
      "g"
    );
    input.value = input.value.replace(pattern, "");
    updateCounts();
    autoResize(input);
  }
}

function addLorem() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  input.value += (input.value.trim() ? "\n\n" : "") + lorem;
  updateCounts();
  autoResize(input);
}

function resetText() {
  input.value = "";
  updateCounts();
  autoResize(input);
}

updateCounts();
