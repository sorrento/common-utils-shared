/**
 * Universal Reader Shared Types and Interfaces
 */

export interface ClassificationDestination {
  id: string;
  name: string;
  description: string;
}

export type ExtractedMetadata = Record<string, any>;

export interface ClassificationResult {
  destinationId: string;
  destinationName: string;
  confidence: number;
  reasoning: string;
  classificationNote?: string;
  caseMetadata?: ExtractedMetadata;
}

export interface MatchEntityProposal<T = any> {
  entityId: string;
  entityData: T;
  caseId?: string;
  caseData?: T;
  matchScore: number;
  matchReasons: string[];
  formattedLabel: string;
}

export type CaseProposal<T = any> = MatchEntityProposal<T>;

export interface GenericExtractionSchema {
  id: string;
  name: string;
  jsonSchema: Record<string, any>;
  promptInstructions?: string;
}

export interface UniversalReaderDebugInfo {
  timestamp: string;
  modeUsed: 'cloud_function' | 'direct_gemini_api' | 'mock_fallback';
  functionUrl?: string;
  hasApiKey: boolean;
  promptSent: string;
  hasFileBase64: boolean;
  fileBase64Length: number;
  mimeType: string;
  fileName: string;
  rawResponseText?: string;
  errorDetails?: string;
}

export interface UniversalReaderConfig {
  functionUrl?: string;
  apiKey?: string;
  modelName?: string;
  systemRole?: string;
  metadataFields?: string[];
  fieldWeights?: Record<string, number>;
  destinations?: ClassificationDestination[];
  schemas?: Record<string, GenericExtractionSchema | Record<string, any>>;
}

export interface UniversalReaderProcessOptions {
  file?: File | string;
  fileBase64?: string;
  mimeType?: string;
  textContent?: string;
  fileName?: string;
  additionalContext?: string;
  destinations?: ClassificationDestination[];
  schemas?: Record<string, GenericExtractionSchema | Record<string, any>>;
  casesList?: any[];
  fieldWeights?: Record<string, number>;
}

export interface UniversalReaderResult<T = Record<string, any>, C = any> {
  classification: ClassificationResult;
  extractedData: T;
  schemaUsed?: GenericExtractionSchema;
  caseProposals?: MatchEntityProposal<C>[];
  suggestedCase?: MatchEntityProposal<C>;
  debugInfo?: UniversalReaderDebugInfo;
}
