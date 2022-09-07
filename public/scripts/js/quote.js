const contentHolder = document.querySelector(".quote__content");
const authorHolder = document.querySelector(".quote__author");

export const getQuote = async () => {
  try {
    const { content, author } = await (await fetch("/api/quote")).json();
    contentHolder.innerText = content;
    authorHolder.innerText = author;
  } catch (err) {
    console.log(err);
  }
};
