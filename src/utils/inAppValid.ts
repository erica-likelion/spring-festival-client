export const isInAppBrowser = (userAgent: string) => {
  const ua = userAgent.toLowerCase();
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
