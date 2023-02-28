const getIdFromUrl = (url: string) => {
  const splittedUrl = url.split("/");
  const id = splittedUrl[splittedUrl.length - 2];

  return id;
};

export { getIdFromUrl };
