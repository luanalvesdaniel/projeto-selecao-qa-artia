export function generateRandomEmail(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let prefix = '';

  for (let i = 0; i < 20; i++) {
    prefix += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `${prefix}@company.com`;
}

export function generateRandomUserName(): string {
  const firstNames = ['Ana', 'Bruno', 'Carlos'];
  const lastNames = ['Silva', 'Souza', 'Oliveira'];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${first} ${last}`;
}

export function generateRandomPhone(): string {
  let phone = '119';

  for (let i = 0; i < 8; i++) {
    phone += Math.floor(Math.random() * 10);
  }

  return phone;
}

export function generateRandomPassword(): string {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specials = '!@#$%^&*()_+-=';

  let password = '';
  password += lower.charAt(Math.floor(Math.random() * lower.length));
  password += upper.charAt(Math.floor(Math.random() * upper.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specials.charAt(Math.floor(Math.random() * specials.length));

  const all = lower + upper + numbers + specials;
  for (let i = 0; i < 2; i++) {
    password += all.charAt(Math.floor(Math.random() * all.length));
  }

  return password.split('').sort(() => 0.5 - Math.random()).join('');
}