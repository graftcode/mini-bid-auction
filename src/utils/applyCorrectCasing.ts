export const applyCorrectCasing = (fullname: string) =>
  fullname
    .split(" ")
    .map(
      (name: string) =>
        name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
    )
    .join(" ");
