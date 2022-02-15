const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

const checkBlogExists = (data, id, res) => {
  return data
    ? res.json({ success: true, data })
    : res.json({
        success: false,
        error: `Blog with id of ${id} doest exist`,
      });
};

const checkValidFields = (validFields, res, num) => {
  if ((Object.keys(validFields).length = !num)) {
    return res.status(400).json({
      success: false,
      error: "Please provide the correct fields to sign up",
    });
  }
};

module.exports = {
  getPayloadWithValidFieldsOnly,
};
