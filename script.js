const button = document.getElementById("shortenBtn");

button.addEventListener("click", async function() {
    const input = document.getElementById("urlInput").value;
    if (!input){
        alert("please add a link");
        return;
    }
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    const data = await res.json();
    console.log(data.result.full_short_link);
});
