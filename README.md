# 🔤 common-utils-shared

Librería compartida de utilidades puras agnósticas (Frontend y Backend Node.js/Cloud Functions).

---

## 📦 Contenido Principal

| Módulo | Descripción | Exportaciones Clave |
| :--- | :--- | :--- |
| **`formatters/`** | Formateo estándar de fechas, monedas y duraciones en español. | `formatDate`, `fmtDateWithYear`, `formatCurrency`, `formatTimeDuration` |
| **`ai/`** | Tipos y esquemas de extracción estructurada con LLMs (OpenAI / Gemini). | `types.ts`, `emlTypes.ts`, `schemas/`, `UNIVERSAL_READER_POOL.md` |
| **`emailTemplates`** | Generador de plantillas HTML responsive para correos con marca blanca. | `generateAuthEmailHtml` |

---

## 🚀 Uso Rápido

```typescript
import { formatDate, formatCurrency, generateAuthEmailHtml } from './common-utils-shared';

// Formateo
const fecha = formatDate('2026-08-16'); // "16/08"
const monto = formatCurrency(1500);     // "1.500,00 €"

// Email HTML
const { subject, html } = generateAuthEmailHtml({ ... });
```

---

> 📖 Para ver la documentación completa con ejemplos detallados y esquemas, consulta [README.detailed.md](./README.detailed.md).
