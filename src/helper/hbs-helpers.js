const moment = require("moment");

module.exports = {
  index: function (conditional, options) {
    if (conditional % 2 == 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
  isMyBlog: function (conditional, options) {
    if (conditional % 2 == 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
  reduceContentLength1: (content) => {
    const reduceLength = (text, index) => {
      if (index < 58) {
        return text;
      }
    };
    return content.split(" ").filter(reduceLength).join(" ");
  },
  reduceContentLength2: (content) => {
    const reduceLength = (text, index) => {
      if (index < 70) {
        return text;
      }
    };
    return content.split(" ").filter(reduceLength).join(" ");
  },
  dateFormatter: (date) => {
    return moment(date).format("DD/MM/YYYY");
  },
};
