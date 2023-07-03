import { getLatestSong, getNowPlaying } from "../../../network/spotify";

const getLatest = async (res) => {
  const lastresponse = await getLatestSong();
  const latest = await lastresponse.json();
  return new Response(
    JSON.stringify({
      isPlaying: false,
      album: latest.items[0].track.album.name,
      albumImageUrl: latest.items[0].track.album.images[0].url,
      artist: latest.items[0].track.artists
        .map((_artist) => _artist.name)
        .join(", "),
      playedAt: latest.items[0].played_at,
      songUrl: latest.items[0].track.external_urls.spotify,
      title: latest.items[0].track.name,
    })
  );
};

export async function GET(req, res) {
  const response = await getNowPlaying();
  if (
    response.status >= 400 ||
    response.status === 204 ||
    response.statusText === "No Content"
  ) {
    const data = await getLatest(res);
    return data;
  } else if (response.statusText === "OK" && response.status === 200) {
    const data = await response.json();

    if (data.item === null) {
      const data = await getLatest(res);
      return data;
    }
    const isPlaying = data.is_playing;
    const title = data.item?.name;
    const artist = data.item?.artists.map((_artist) => _artist.name).join(", ");
    const album = data.item?.album.name;
    const albumImageUrl = data.item?.album.images[0].url;
    const songUrl = data.item?.external_urls.spotify;

    return new Response(
      JSON.stringify({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      })
    );
  } else {
    const data = await getLatest(res);
    return data;
  }
}

export const revalidate = 0;
export const runtime = 'edge';
