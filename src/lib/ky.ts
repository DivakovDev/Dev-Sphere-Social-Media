import ky from "ky";

const kyInstanse = ky.create({
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) return new Date(value);
      return value;
    }),
});

export default kyInstanse;
