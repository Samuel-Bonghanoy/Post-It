const parseDate = (dateString: string) => {
  // Create a Date object from the provided string
  const date = new Date(dateString);

  // Get the year, month (0-indexed), and day components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero for single-digit days

  // Format the date in the desired format (MM/DD/YYYY)
  return `${month}/${day}/${year}`;
};

export default parseDate;
