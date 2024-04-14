import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react';

import type { OurFileRouter } from '../../app/api/uploadthing/core';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export function splitContentIntoChunks(content: string | null | undefined) {
  if (!content) {
    return [];
  }

  return content
    .split('.')
    .reduce((acc: string[][], sentence: string, i: number) => {
      const chunkIndex = Math.floor(i / (content.split('.').length / 4));
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(sentence.trim());
      return acc;
    }, []);
}