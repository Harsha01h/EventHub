function addImage() {
  const url = document.getElementById("imageUrl").value.trim();
  if (url === "") {
    alert("Please enter a valid image URL.");
    return;
  }

  const gallery = document.getElementById("gallery");

  // Create image card
  const imgCard = document.createElement("div");
  imgCard.className = "gallery-item";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "User Image";

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => gallery.removeChild(imgCard);

  imgCard.appendChild(img);
  imgCard.appendChild(delBtn);
  gallery.appendChild(imgCard);

  // Clear input field
  document.getElementById("imageUrl").value = "";
}
