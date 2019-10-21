export const conditionalCaseTransform = (text, idx) =>
    idx % 2 === 0 ? text.toUpperCase() : text.toLowerCase();
