export const dateConverter = (date) => {
  const dateObj = new Date(date);
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  return `${hour}:${minute} , ${dateObj.toLocaleDateString("fa-IR")}`;
};


