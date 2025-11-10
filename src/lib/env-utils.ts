import { config } from '../config/env';

/**
 * Utility functions for environment-specific configurations
 */
export const envUtils = {
  /**
   * Check if we're in development mode
   */
  isDevelopment: () => import.meta.env.MODE === 'development',

  /**
   * Check if we're in production mode
   */
  isProduction: () => import.meta.env.MODE === 'production',

  /**
   * Get the current environment mode
   */
  getMode: () => import.meta.env.MODE,

  /**
   * Generate avatar URL with custom parameters
   */
  generateAvatarUrl: (name: string, background = '3B82F6', color = 'fff', size = 200) => {
    const encodedName = encodeURIComponent(name);
    return `${config.services.avatarsApiUrl}/?name=${encodedName}&background=${background}&color=${color}&size=${size}`;
  },

  /**
   * Generate WhatsApp URL with custom message
   */
  generateWhatsAppUrl: (message?: string) => {
    const phone = config.urls.whatsapp.split('/').pop(); // Extract phone from URL
    const encodedMessage = message ? `&text=${encodeURIComponent(message)}` : '';
    return `https://wa.me/${phone}${encodedMessage}`;
  },

  /**
   * Get all configuration values (useful for debugging)
   */
  getConfig: () => config,
};