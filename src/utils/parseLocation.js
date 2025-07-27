export function parseLocation(address = "") {
    const parts = address.split(", ");
    const city = parts[parts.length - 2] || "";
    const country = parts[parts.length - 1] || "";
    return { city, country };
  }