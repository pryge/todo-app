export function getFormattedDate() {
  const date = new Date();

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const full = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return {
    day,
    full,
  };
}
