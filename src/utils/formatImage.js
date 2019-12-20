const formatImage = path => {
  let image = require("../images/not_found.png");
  if (path) {
    image = require(`../images/${path}`);
  }
  return image;
};

export default formatImage;
