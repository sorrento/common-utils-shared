# 🔤 common-utils-shared

Librería compartida de utilidades puras y formateadores agnósticos (compatibles con Frontend React/Vue/Angular y Backend Node.js/Bun/Deno).

## 📦 Instalación & Uso como Submódulo Git

```bash
git submodule add https://github.com/sorrento/common-utils-shared.git src/common-utils-shared
```

### Ejemplo de uso:

```typescript
import { formatDate, formatCurrency, fmtDateWithYear, formatTimeDuration } from './common-utils-shared';

console.log(formatDate('2026-08-16')); // "16/08/2026"
console.log(formatCurrency(1500)); // "1.500,00 €"
console.log(formatTimeDuration(125)); // "2h 5m"
```
