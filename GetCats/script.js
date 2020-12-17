const response = fetch("https://cat-fact.herokuapp.com/facts");

const createArticle = (data) => {
  const container = document.getElementById("container");

  data.forEach((review) => {
    const article = document.createElement("article");
    article.style.border = "1px solid black";
    article.style.marginBottom = "5px";

    const text = document.createElement("p");
    const date = document.createElement("span");

    text.innerHTML = review.text;
    const dateWithTime = review.createdAt;

    date.innerHTML = dateWithTime.slice(0, dateWithTime.indexOf("T"));

    article.appendChild(text);
    article.appendChild(date);
    container.appendChild(article);
  });
};
response.then((res) => res.json()).then((result) => createArticle(result));
