export const isInAppBrowser = (userAgent: string) => {
  const ua = userAgent.toLowerCase();
  if (ua.match(/kakaotalk/i)) {
    const target_url = location.href;
    location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(target_url);
  }
  return (
    ua.includes('instagram') ||
    ua.includes('twitter') ||
    ua.includes('line') ||
    ua.includes('kakaotalk') ||
    ua.includes('naver') ||
    ua.includes('band') ||
    ua.includes('facebook') ||
    ua.includes('whatsapp') ||
    ua.includes('tiktok')
  );
};
