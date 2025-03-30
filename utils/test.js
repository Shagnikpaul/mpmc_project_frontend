export function formatCustomDate(dateString) {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC' // Ensures consistent formatting
    });

    // Add ordinal suffix (st, nd, rd, th)
    const day = date.getUTCDate();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10) > 3 || [11, 12, 13].includes(day) ? 0 : day % 10];

    return formattedDate.replace(/(\d+),/, `$1${suffix}`);
}
function formatReadableDate(isoString) {
    const date = new Date(isoString);
    
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",    // Full month name (e.g., March)
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true      // Use 12-hour format (AM/PM)
    });
  }



console.log(formatReadableDate("2025-03-30T14:30:35.358000"));
