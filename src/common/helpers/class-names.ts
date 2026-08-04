type ClassNameConditions = Record<string, boolean | string>;

const parseValue = (value: string | ClassNameConditions) => {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value !== "object") {
    return "";
  }

  return Object.entries(value)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key)
    .join(" ");
};

export const classNames = (...classNames: (string | ClassNameConditions)[]) => {
  return classNames.map(parseValue).filter(Boolean).join(" ");
};
