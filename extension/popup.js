document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("check-btn");

  checkBtn.addEventListener("click", async () => {
    const review = document.getElementById("review").value.trim();
    const resultDiv = document.getElementById("result");

    if (!review) {
      resultDiv.innerText = "Please enter a review.";
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review: review }),
      });

      const data = await response.json();

      resultDiv.innerText =
        data.prediction === 1 ? "⚠️ Fake Review" : "✅ Genuine Review";
    } catch (error) {
      resultDiv.innerText = "Error contacting backend.";
    }
  });
});
