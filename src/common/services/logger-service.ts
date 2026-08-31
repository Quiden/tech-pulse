class LoggerService {
  private isDev: boolean;

  constructor() {
    this.isDev = __IS_DEV__;
  }

  log(...args: unknown[]) {
    if (!this.isDev) return;

    console.log('[LOG]:', ...args);
  }

  error(...args: unknown[]) {
    if (!this.isDev) return;

    console.error('[ERROR]:', ...args);
  }

  warn(...args: unknown[]) {
    if (!this.isDev) return;

    console.warn('[WARN]:', ...args);
  }

  debug(...args: unknown[]) {
    if (!this.isDev) return;

    console.debug('[DEBUG]:', ...args);
  }
}

export const logger = new LoggerService();
