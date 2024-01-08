export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xCWPZ3sMK3W9ERJDMRK0H3jdQ1OleZMI&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title.trim() ? img.title : category,
    url: img.images.fixed_height.url,
  }));
  return gifs;
};
