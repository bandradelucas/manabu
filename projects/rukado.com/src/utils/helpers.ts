'use client';

/**
 * Embaralha o array com Fisher-Yates.
 *
 * @param   array
 * @returns array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const splitIntoChunks = <T>(array: T[], chunkCount: number): T[][] => {
  const chunkSize = Math.ceil(array.length / chunkCount);
  return Array.from({ length: chunkCount }, (_, i) =>
    array.slice(i * chunkSize, (i + 1) * chunkSize)
  );
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .trim();
};
