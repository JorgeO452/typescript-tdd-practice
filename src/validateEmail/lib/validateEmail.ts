export function validateEmail(email: string): any {
  if (!email.includes(".")) return 'email is invalid, missing "."';
  if (!email.includes("@")) return 'email is invalid, missing "@"';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "format email is invalid";
  return "email is valid";
}
