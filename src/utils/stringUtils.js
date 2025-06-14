export function getInitials(fullName) {
  if (!fullName || typeof fullName !== "string") return "";

  const nameParts = fullName.trim().split(" ");

  const firstInitial = nameParts[0]?.[0] || "";
  let lastInitial = nameParts.at(-1)?.[0] || "";

  if (nameParts[0] === nameParts.at(-1)) {
    lastInitial = "";
  }

  return `${firstInitial}${lastInitial}`.toUpperCase();
}
