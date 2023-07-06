export const hinatafetch = async () => {
  const res = await fetch(process.env.HINATA_URL);
  return await res.json();
};

export const kavachfetch = async () => {
  const res = await fetch(process.env.KAVACH_URL);
  return await res.json();
};
