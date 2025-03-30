// dateFormatter.js
export function formatCustomDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",    // Full month name (e.g., March)
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true      // Use 12-hour format (AM/PM)
    });
}


