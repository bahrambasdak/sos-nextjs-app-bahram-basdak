export const toPersianDigits = (num: number | string) => {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    return num?.toString().replace(/\d/g, (d) => persianNumbers[+d]);
  };