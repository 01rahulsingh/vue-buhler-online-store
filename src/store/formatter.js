export function formatCategoryLabel(category) {
  return category
    .replace('machine_', '')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}
