// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function useSocialShare({ text, url }) {
  function share(service) {
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url);

    if (navigator.share) {
      return navigator.share({
        url,
        text,
        title: '',
      });
    }

    if (service === 'twitter') {
      return window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`, '_newtab');
    }

    if (service === 'facebook') {
      return window.open(`https://www.facebook.com/sharer/sharer.php?quote=${encodedText}&u=${encodedUrl}`, '_newtab');
    }

    if (service === 'messenger') {
      return window.open(
        `https://www.facebook.com/dialog/send?app_id=${
          process.env.GATSBY_FB_APP_ID
        }&link=${encodedUrl}&redirect_uri=${encodedUrl}`,
        '_newtab',
      );
    }

    return null;
  }

  return share;
}
