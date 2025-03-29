function replayGif(id) {
    const gif = document.getElementById(id);
    const src = gif.src;
    gif.src = '';       // Reset first
    gif.src = src;      // Re-assign to restart
}
