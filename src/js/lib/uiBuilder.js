const txtNode = (text) => {
  return document.createTextNode(text);
};

export const wrapperEl = (
  elementType = "div",
  attributeArr = [],
  classNamesArr = [],
  text,
) => {
  let txtNode;
  if (text && text.length !== 0) {
    txtNode = txtNode(text);
  }
  const wrapperEl = document.createElement(elementType);
  attributeArr.forEach((attrObj) => {
    wrapperEl.setAttribute(attrObj.key, attrObj.value);
  });
  classNamesArr.forEach((className) => {
    wrapperEl.classList.add(className);
  });
};

