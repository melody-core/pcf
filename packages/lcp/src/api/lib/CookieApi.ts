export function CreateCookie(id: string) {
  const outTime = "" + (Date.now() + 1000 * 60 * 60 * 24 * 15);

  return (
    outTime.substr(0, 7) +
    id.substr(7, id.length - 7) +
    outTime.substr(7, 6) +
    id.substr(0, 7)
  );
}

export function Authentication(cookie: string) {
  const outTime = cookie.substr(0, 7) + cookie.substr(cookie.length - 13, 6);
  const id =
    cookie.substr(cookie.length - 7, 7) + cookie.substr(7, cookie.length - 20);
  return {
    outTime: +outTime,
    id,
  };
}
