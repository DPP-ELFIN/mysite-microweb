/** @format */
import type { TinyMCE } from "@/assets/js/tinymce_6.7.0/tinymce/js/tinymce/tinymce";

/// <reference types="vite/client" />
declare global {
  interface Window {
    tinymce: TinyMCE;
  }
}
