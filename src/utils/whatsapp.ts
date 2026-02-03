const WHATSAPP_PHONE = '50489494639';
const FALLBACK_MS = 2000;

function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

/**
 * Opens WhatsApp: native app on mobile (whatsapp://), WhatsApp Web on desktop.
 * Optional fallback to wa.me if native protocol doesn't open (e.g. app not installed).
 */
export function openWhatsApp(phone: string = WHATSAPP_PHONE): void {
  if (typeof window === 'undefined') return;

  const cleanPhone = phone.replace(/\D/g, '');

  if (isMobile()) {
    window.location.href = `whatsapp://send?phone=${cleanPhone}`;
    // Fallback: if still on page after FALLBACK_MS, open wa.me (e.g. app not installed)
    setTimeout(() => {
      window.location.href = `https://wa.me/${cleanPhone}`;
    }, FALLBACK_MS);
  } else {
    window.open(`https://web.whatsapp.com/send?phone=${cleanPhone}`, '_blank', 'noopener,noreferrer');
  }
}
