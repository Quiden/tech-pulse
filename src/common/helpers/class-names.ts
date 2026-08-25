type ClassNameConditions = Record<string, boolean | string>;

const parseValue = (value: string | ClassNameConditions | undefined) => {
  if (!value) {
    return "";
  }

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

export const classNames = (...classNames: (string | ClassNameConditions | undefined)[]) => {
  return classNames.map(parseValue).filter(Boolean).join(" ");
};
