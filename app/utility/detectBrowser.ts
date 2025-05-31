export async function detectBrowser(): Promise<string> {
  const userAgent = navigator.userAgent;
  let browser = "Unknown";

  const nav = navigator as Navigator & {
    brave?: { isBrave: () => Promise<boolean> };
  };

  if (nav.brave && await nav.brave.isBrave?.()) {
    browser = "Brave";
  } else if (userAgent.includes("Edg")) {
    browser = "Edge";
  } else if (userAgent.includes("Chrome")) {
    browser = "Chrome";
  } else if (userAgent.includes("Firefox")) {
    browser = "Firefox";
  } else if (userAgent.includes("Safari")) {
    browser = "Safari";
  }

  return browser;
}
