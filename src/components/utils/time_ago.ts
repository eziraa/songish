export function timeAgo(dateString: string) {
    const date = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Yesterday";
    } else {
        return `${diffDays} days ago`;
    }
}

