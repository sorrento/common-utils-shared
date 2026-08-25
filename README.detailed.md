# 🔤 common-utils-shared (Detallado)

Librería compartida de utilidades puras, formateadores agnósticos, esquemas de IA y plantillas de correo transaccionales. Es **100% agnóstica de plataforma** (compatible tanto en Frontend React/Vue/Angular/Svelte como en Backend Node.js/Express/Bun/Deno/Cloud Functions).

---

## 📦 Contenido del Módulo

El submódulo exporta 3 bloques principales de funcionalidades:

```
common-utils-shared/
├── src/
│   ├── formatters/          # Utilidades puras de formateo de fechas, monedas y duraciones
│   │   ├── dateUtils.ts     # formatDate, fmtDateWithYear, formatCurrency, formatTimeDuration...
│   │   └── index.ts
│   ├── ai/                  # Definiciones de esquemas, tipos y prompts universales para LLMs/OCR
│   │   ├── types.ts         # Contratos de extracción estructurada
│   │   ├── emlTypes.ts      # Tipos de procesamiento de correos/mensajería EML
│   │   ├── schemas/         # Esquemas JSON compatibles con OpenAI / Gemini Structured Outputs
│   │   └── UNIVERSAL_READER_POOL.md # Arquitectura de agentes de lectura universal
│   └── emailTemplates.ts    # Generador de plantillas de email HTML responsive con marca blanca
├── index.ts                 # Barrel export principal
└── package.json
```

---

## 🚀 1. Formateadores y Utilidades (`src/formatters`)

Funciones utilitarias con formato en español (`es-ES`) y localización estándar:

```typescript
import {
  formatDate,
  fmtDateWithYear,
  formatCurrency,
  formatTimeDuration
} from './common-utils-shared';

// Formato de fechas
formatDate('2026-08-16');          // "16/08"
fmtDateWithYear('2026-08-16');      // "16/08/2026"

// Formato de moneda
formatCurrency(1500);              // "1.500,00 €" (o parametrizable)

// Duración de tiempo legible
formatTimeDuration(125);           // "2h 5m"
formatTimeDuration(45);            // "45m"
```

---

## 🤖 2. Modelos y Esquemas de IA (`src/ai`)

Tipos y esquemas estandarizados para pipelines de extracción inteligente de documentos, facturas, comprobantes y archivos EML con Large Language Models:

- **`types.ts`**: Contratos de datos para procesamiento de documentos estructurados.
- **`emlTypes.ts`**: Interfaces para ingesta y parsing de correos electrónicos.
- **`schemas/`**: Esquemas de respuesta JSON (*Structured Outputs*) compatibles con Gemini y OpenAI.
- **`UNIVERSAL_READER_POOL.md`**: Guía y especificación de arquitecturas de agentes de extracción documental.

---

## ✉️ 3. Plantillas de Correo Electrónico (`src/emailTemplates.ts`)

Generador de plantillas HTML transaccionales *responsive* con soporte para marca blanca (logotipo, colores corporativos y nombre de empresa):

```typescript
import { generateAuthEmailHtml } from './common-utils-shared';

const email = generateAuthEmailHtml({
  type: 'verification', // o 'password_reset'
  recipientEmail: 'usuario@empresa.cl',
  recipientName: 'Carlos Ruiz',
  actionLink: 'https://app.empresa.cl/verify?token=xyz123',
  projectConfig: {
    appName: 'Boletator General',
    companyName: 'Mi Empresa',
    logoUrl: 'https://app.empresa.cl/logo.png',
    primaryColor: '#0284c7',
    supportEmail: 'soporte@empresa.cl',
  },
});

console.log(email.subject); // "Confirma tu correo electrónico para Boletator General"
console.log(email.html);    // HTML listo para enviar vía SendGrid / Resend / Nodemailer
```

---

## 🛠️ Instalación & Uso como Submódulo Git

```bash
git submodule add https://github.com/sorrento/common-utils-shared.git lib/common-utils-shared
```
