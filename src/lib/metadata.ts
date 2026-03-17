/*-----------------------------------------------
  Property of Freedom_EXE  (c) 2026
-----------------------------------------------*/
/**
 * File: src/lib/metadata.ts
 *
 * Description:
 * Helper for generating consistent page metadata for static routes.
 */
/*-----------------------------------------------
  Manifested by Freedom_EXE
-----------------------------------------------*/
import type { Metadata } from 'next'

export function createMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} - Kukua Orphanage`,
    description,
  }
}
