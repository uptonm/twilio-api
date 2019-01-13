// a and b are javascript Date objects
module.exports = (start, end) => {
  // Discard the time and time-zone information.
  return (end.getTime() - start.getTime()) / 1000;
};
