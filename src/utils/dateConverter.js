export const dateConverter = (date) => {
  const dateObj = new Date(date);
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  return `${hour < 10 ? "0" + hour : hour}:${
    minute < 10 ? "0" + minute : minute
  } , ${dateObj.toLocaleDateString("fa-IR")}`;
};
