import type { IPlugin, IPlatformSDK } from 'vbwd-view-component'
import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import ru from './locales/ru.json'
import th from './locales/th.json'
import zh from './locales/zh.json'

/**
 * Analytics Widget Plugin
 * Adds an "Active Sessions" widget to the admin dashboard.
 * Sprint 05 — minimal plugin system validation.
 */
export const analyticsWidgetPlugin: IPlugin = {
  name: 'analytics-widget',
  version: '1.0.0',
  description: 'Displays active sessions count on the dashboard',

  _active: false,

  install(sdk: IPlatformSDK): void {
    // Translations
    sdk.addTranslations('en', { analytics: (en as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('de', { analytics: (de as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('es', { analytics: (es as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('fr', { analytics: (fr as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('ja', { analytics: (ja as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('ru', { analytics: (ru as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('th', { analytics: (th as Record<string, unknown>)['analytics'] })
    sdk.addTranslations('zh', { analytics: (zh as Record<string, unknown>)['analytics'] })

    sdk.addComponent('AnalyticsWidget', () => import('./AnalyticsWidget.vue') as Promise<{ default: unknown }>)
  },

  activate(): void {
    (this as IPlugin & { _active: boolean })._active = true
  },

  deactivate(): void {
    (this as IPlugin & { _active: boolean })._active = false
  }
} as IPlugin & { _active: boolean }
