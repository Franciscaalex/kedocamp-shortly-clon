const input = document.getElementById("urlinput");
const errorMsg = document.getElementById("errorMsg");
const container = document.getElementById("linksContainer");

// Function called when button is clicked
async function shortenURL() {
  const url = input.value.trim();

  if (!url) {
    errorMsg.textContent = "Please add a link";
    input.style.border = "2px solid red";
    return;
  }

  // Clear error
  errorMsg.textContent = "";
  input.style.border = "none";

  try {
    // API call 
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    if (!data.ok) {
      throw new Error("Invalid URL");
    }

    const shortLink = data.result.full_short_link;

    // Create result box
    const div = document.createElement("div");
    div.classList.add("link-item");

    div.innerHTML = `
      <p>${url}</p>
      <div class="right">
        <a href="${shortLink}" target="_blank">${shortLink}</a>
        <button class="copy-btn">Copy</button>
      </div>
    `;

    // Add to page
    container.appendChild(div);

    // Copy button
    const copyBtn = div.querySelector(".copy-btn");

    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(shortLink);

      // Reset all buttons
      document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.textContent = "Copy";
        btn.style.background = "#2acfcf";
      });

      // Change clicked one
      copyBtn.textContent = "Copied!";
      copyBtn.style.background = "#3b3054";
    });

    // Clear input
    input.value = "";

  } catch (error) {
    errorMsg.textContent = "Something went wrong";
  }
}