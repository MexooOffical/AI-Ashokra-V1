import { UserProfileData, ChatSession, PromptMode } from '../types';

export interface SavedPromptItem {
  id: string;
  text: string;
  mode: PromptMode;
  createdAt: number;
}

const STORAGE_KEYS = {
  USER_PROFILE: 'ai_ashokra_user_profile',
  CHAT_SESSIONS: 'ai_ashokra_chat_sessions',
  SAVED_PROMPTS: 'ai_ashokra_saved_prompts',
  ACTIVE_CHAT_ID: 'ai_ashokra_active_chat_id',
  APPEARANCE_SETTINGS: 'ai_ashokra_appearance_settings',
};

const DEFAULT_USER: UserProfileData = {
  name: 'Spectar',
  plan: 'Free',
  avatarLetter: 'S',
  avatarColor: '#10b981',
  messagesUsed: 6,
  messagesLimit: 10,
};

// --- User Profile ---
export function getStoredUserProfile(): UserProfileData {
  if (typeof window === 'undefined') return DEFAULT_USER;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (!raw) return DEFAULT_USER;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_USER, ...parsed };
  } catch (err) {
    console.warn('Failed to parse local user profile:', err);
    return DEFAULT_USER;
  }
}

export function saveStoredUserProfile(profile: Partial<UserProfileData>): UserProfileData {
  if (typeof window === 'undefined') return DEFAULT_USER;
  try {
    const current = getStoredUserProfile();
    const updated: UserProfileData = { ...current, ...profile };
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Failed to save local user profile:', err);
    return DEFAULT_USER;
  }
}

// --- Chat Sessions ---
export function getStoredChatSessions(): ChatSession[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CHAT_SESSIONS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Failed to parse stored chat sessions:', err);
    return [];
  }
}

export function saveStoredChatSessions(sessions: ChatSession[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEYS.CHAT_SESSIONS, JSON.stringify(sessions));
  } catch (err) {
    console.warn('Failed to save chat sessions to local storage:', err);
  }
}

export function getStoredActiveChatId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEYS.ACTIVE_CHAT_ID);
  } catch {
    return null;
  }
}

export function saveStoredActiveChatId(id: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (id) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_CHAT_ID, id);
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_CHAT_ID);
    }
  } catch {}
}

// --- Saved Prompts ---
export function getStoredPrompts(limitCount = 20): SavedPromptItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SAVED_PROMPTS);
    if (!raw) return [];
    const list: SavedPromptItem[] = JSON.parse(raw);
    return Array.isArray(list) ? list.slice(0, limitCount) : [];
  } catch {
    return [];
  }
}

export function saveStoredPrompt(text: string, mode: PromptMode = 'Auto'): SavedPromptItem {
  const newItem: SavedPromptItem = {
    id: `prompt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    text: text.trim(),
    mode,
    createdAt: Date.now(),
  };

  if (typeof window === 'undefined') return newItem;
  try {
    const current = getStoredPrompts(100);
    // Filter out duplicates with the exact same text
    const filtered = current.filter((p) => p.text.toLowerCase() !== newItem.text.toLowerCase());
    const updated = [newItem, ...filtered].slice(0, 50);
    localStorage.setItem(STORAGE_KEYS.SAVED_PROMPTS, JSON.stringify(updated));
  } catch (err) {
    console.warn('Failed to save prompt to local storage:', err);
  }
  return newItem;
}

export function deleteStoredPrompt(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const current = getStoredPrompts(100);
    const updated = current.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.SAVED_PROMPTS, JSON.stringify(updated));
  } catch {}
}

export function clearStoredPrompts(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.SAVED_PROMPTS);
  } catch {}
}
