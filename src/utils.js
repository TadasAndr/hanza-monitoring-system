function normalizeUrlToTitle(inputStr) {
  return inputStr
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function normalizeTitleToUrl(inputStr) {
  return inputStr.toLowerCase().replace(" ", "-");
}

export default {
  normalizeUrlToTitle,
  normalizeTitleToUrl,
};
