export const API_KEY = "AIzaSyCXc9Ach0CshDnjftx3SHl6r2c_NSR01EM";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
