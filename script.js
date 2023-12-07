const fetchButton = document.getElementById("blagues");
var categories = document.querySelector('select');
categories.addEventListener('change', function(){
});
const api = `https://api.blablagues.net/?rub=blagues&cat=${categories.value}`;
fetchButton.addEventListener("click", async () => {
  await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const text = data.data.content.text;
      const text_head = data.data.content.text_head;
      const text_hidden = data.data.content.text_hidden;

      const textElement = document.getElementById("text");
      const textHeadElement = document.getElementById("text_head");
      const textHiddenElement = document.getElementById("text_hidden");

      textElement.textContent = `${text}`;
      textHeadElement.textContent = `${text_head}`;
      textHiddenElement.textContent = `${text_hidden}`;
    });
});