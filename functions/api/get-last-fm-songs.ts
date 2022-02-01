import LastFMTyped from "lastfm-typed"

// Can also be set through Netlify environment variables
const LASTFM_API_KEY = process.env.LASTFM_API_KEY
const username = "detygon"

export async function onRequest() {
  if (!LASTFM_API_KEY) {
    return new Response(null, {
      status: 201,
    })
  }

  try {
    const lastFm = new LastFMTyped(LASTFM_API_KEY)

    const [info, topTracks, topArtists, recentTracks] = [
      await lastFm.user.getInfo(username),
      await lastFm.user.getTopTracks(username, { limit: 6, period: "7day" }),
      await lastFm.user.getTopArtists(username, { limit: 4, period: "7day" }),
      await lastFm.user.getRecentTracks(username, { limit: 15 }),
    ]

    // Origin for CORS
    const origin =
      process.env.NODE_ENV === "production"
        ? "https://detygon.com"
        : "http://localhost:3000"

    // Map track function
    const mapTrack = (track: any) => {
      const artist =
        typeof track.artist === "string" ? track.artist : track.artist.name

      const object: any = {
        artist,
        name: track.name,
        image: track.image.find((image: any) => image.size === "large")?.url,
        url: track.url,
        date: track.date?.uts,
        nowPlaying: track.nowplaying,
      }

      if (track.playcount) object.plays = track.playcount

      return object
    }

    // Map artist function
    const mapArtist = (artist: any) => {
      const object: any = {
        name: artist.name,
        image: artist.image.find((image: any) => image.size === "large")?.url,
        url: artist.url,
      }

      if (artist.playcount) object.plays = artist.playcount

      return object
    }

    // Formatted user info
    const formattedUserInfo = {
      name: info.name,
      image: info.image.find((image) => image.size === "large")?.url,
      url: info.url,
      totalPlays: info.playcount,
      registered: info.registered,
    }

    // Return
    return new Response(
      JSON.stringify({
        user: formattedUserInfo,
        recentTracks: recentTracks?.tracks?.map(mapTrack) || [],
        topTracks: topTracks?.tracks?.map(mapTrack) || [],
        topArtists: topArtists?.artists?.map(mapArtist) || [],
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET",
        },
      }
    )
  } catch (error: any) {
    console.log(error)

    return new Response(
      JSON.stringify({
        message: error.message,
      }),
      { status: 500 }
    )
  }
}
