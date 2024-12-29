
type LyricType = {
  time: number,
  text: string
}

function parseLyric(lyric: string): LyricType[] {
  const lyrics:LyricType[] = []
  lyrics.push({
    time: 111,
    text:"天空"
  })
  return lyrics
}
export{}

