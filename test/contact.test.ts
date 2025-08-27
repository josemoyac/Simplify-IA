import { describe, it, expect } from 'vitest';
import fs from 'fs';

const content = fs.readFileSync('./app/contacto/page.tsx', 'utf8');

describe('contact form', () => {
  it('contains labels for fields', () => {
    ['Nombre', 'Email', 'Empresa', 'Sector', 'Mensaje'].forEach((label) => {
      expect(content).toMatch(new RegExp(`<label[^>]*>${label}</label>`));
    });
  });
});
