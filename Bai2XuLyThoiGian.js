function timeAgo(dateString) {
  const past = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return "Vừa xong";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút trước}`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ trước`;

  const d = String(past.getDate().padStart(2, "0"));
  const m = String(past.getMonth + 1).padStart(2, "0");
  const y = past.getFullYear();

  return `${d}/${m}/${y}`;
}

function getCountdown(targetDateString) {
  const future = new Date(targetDateString);
  const now = new Date();
  const diffInSeconds = Math.floor((future - now) / 1000);

  return {
    days: Math.floor(diffInSeconds / 86400),
    minutes: Math.floor((diffInSeconds % 86400) / 3600),
    minutes: Math.floor((diffInSeconds % 3600) / 60),
    seconds: diffInSeconds % 60,
  };
}

function isWeekend(dateString) {
  const day = new Date(dateString).getDay();
  return day === 0 || day === 6;
}
