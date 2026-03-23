import { apiSaveSettings, buildProfileImageUrl, getExternalUserId } from "./smartFarmApi";

const AVATAR_CACHE_KEY = "avatar_cache";

function resolveUserId(userId?: string | number | null): string {
  if (userId !== undefined && userId !== null && String(userId).trim()) {
    return String(userId);
  }
  try {
    const stored = localStorage.getItem("app_user");
    if (stored) {
      const parsed = JSON.parse(stored);
      return String(parsed.id || parsed.email || "default");
    }
  } catch {}
  return "default";
}

function getCacheKey(userId?: string | number | null): string {
  return `${AVATAR_CACHE_KEY}_${resolveUserId(userId)}`;
}

export async function uploadAvatar(userId: string | number, file: File): Promise<string> {
  const numericId = getExternalUserId() || Number(userId);

  try {
    const result = await apiSaveSettings(numericId, { profile_img: file });
    const profilePath = result?.data?.profile_image;
    const url = buildProfileImageUrl(profilePath);
    if (url) {
      const timestampedUrl = `${url}?t=${Date.now()}`;
      try { localStorage.setItem(getCacheKey(userId), timestampedUrl); } catch {}
      return timestampedUrl;
    }
  } catch (err) {
    console.error("Failed to upload avatar to API:", err);
  }

  // Fallback: try reading from cache
  return getSavedAvatarUrl(userId) || "";
}

export function getSavedAvatarUrl(userId?: string | number | null): string | null {
  try {
    const cached = localStorage.getItem(getCacheKey(userId));
    if (cached) return cached;
  } catch {}
  return null;
}

export function saveAvatarUrlFromApi(userId: string | number, profileImagePath?: string): string | null {
  const url = buildProfileImageUrl(profileImagePath);
  if (url) {
    try { localStorage.setItem(getCacheKey(userId), url); } catch {}
  }
  return url;
}

export function removeAvatar(userId?: string | number | null): void {
  try { localStorage.removeItem(getCacheKey(userId)); } catch {}
}
