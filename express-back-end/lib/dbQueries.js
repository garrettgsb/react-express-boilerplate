const getAllWarrantiesQuery = `
  SELECT entries.*, items.name as item_name, items.category as item_category
  FROM entries
  JOIN items ON items.id = entries.item_id
  WHERE type='warranty'
`;

module.exports = {
  getAllWarrantiesQuery,
};
