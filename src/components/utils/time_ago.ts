export function timeAgo(dateString: string) {
    const date = new Date(dateString).getTime();
    const now = new Date().getTime();
     const diffTime = Math.abs(now- date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30.44); // Average number of days in a month
  const diffYears = Math.floor(diffDays / 365.25); // Average number of days in a year, accounting for leap years

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffWeeks === 1) {
    return "A week ago";
  } else if (diffDays < 30) {
    return `${diffWeeks} weeks ago`;
  } else if (diffMonths === 1) {
    return "A month ago";
  } else if (diffDays < 365) {
    return `${diffMonths} months ago`;
  } else if (diffYears === 1) {
    return "A year ago";
  } else {
    return `${diffYears} years ago`;
  }
}

