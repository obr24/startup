export default function getQuote() {
  return fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error getting quote: ", error);
      return { quote: "bad quote", author: "bad author return" };
    });
}
