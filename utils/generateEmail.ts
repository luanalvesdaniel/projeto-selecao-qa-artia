export function generateRandomEmail(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let prefix = '';
    for (let i = 0; i < 20; i++) {
      prefix += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}@company.com`;
  }
  