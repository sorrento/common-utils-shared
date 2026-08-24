/**
 * Tipos e interfaces estándar para procesamiento y parseo de correos electrónicos (.eml / .msg).
 */

export interface EmlAttachment {
  filename: string;
  mimeType: string;
  blob: Blob;
  file: File;
  isInlineImage?: boolean;
  contentId?: string;
}

export interface ParsedEmlResult {
  subject: string;
  from: string;
  to: string;
  date: string;
  textBody: string;
  htmlBody: string;
  markdownBody: string;
  attachments: EmlAttachment[];
  inlineImages: EmlAttachment[];
}

export interface PreparedAiDocument {
  file?: File;
  textContent?: string;
  fileName: string;
  additionalContext?: string;
  sourceType: 'attachment' | 'image' | 'text' | 'table';
}
