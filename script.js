async function getDisplayedText(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return await response.text();
  } catch (error) {
    return "Error fetching data";
  }
}

// Example usage (assuming you want to use the text later)
const link = "https://example.com/data.txt"; // Replace with your actual URL

getDisplayedText(link)
  .then(text => {
    // Now you have the retrieved text in the 'text' variable
    // You can use it for further processing or display it on your page (consider security implications)
  });
