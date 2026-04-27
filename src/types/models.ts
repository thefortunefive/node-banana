/**
 * Model Types
 *
 * Types for image generation model configuration including
 * aspect ratios, resolutions, and model identifiers.
 */

// Aspect Ratios (all models support the base 10; Studio Flash adds 1:4, 1:8, 4:1, 8:1)
export type AspectRatio =
  | "1:1"
  | "1:4"
  | "1:8"
  | "2:3"
  | "3:2"
  | "3:4"
  | "4:1"
  | "4:3"
  | "4:5"
  | "5:4"
  | "8:1"
  | "9:16"
  | "16:9"
  | "21:9";

// Resolution Options (supported by Studio Pro and Studio Flash)
export type Resolution = "512" | "1K" | "2K" | "4K";

// Image Generation Model Options
export type ModelType = "nano-banana" | "nano-banana-pro" | "nano-banana-2";

// Display names for image generation models
export const MODEL_DISPLAY_NAMES: Record<ModelType, string> = {
  "nano-banana": "Studio Standard",
  "nano-banana-pro": "Studio Pro",
  "nano-banana-2": "Studio Flash",
};
