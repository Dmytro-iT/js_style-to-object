'use strict';

function convertToObject(stylesString) {
  if (!stylesString) {
    return {};
  }

  const result = {};
  const rules = stylesString
    .split(';')
    .map((r) => r.trim())
    .filter(Boolean);

  for (const rule of rules) {
    const [property, ...valueParts] = rule.split(':');

    if (!property || valueParts.length === 0) {
      continue;
    }

    const key = property.trim();
    const value = valueParts.join(':').replace(/^\s+|\s+$/g, '');

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
