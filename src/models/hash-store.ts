interface HashEntry {
  [key: string]: string;
}

class HashStore {
  private data: Record<string, HashEntry> = {};

  hset(key: string, field: string, value: string): void {
    if (!this.data[key]) {
      this.data[key] = {};
    }
    this.data[key][field] = value;
  }

  hget(key: string, field: string): string | null {
    return this.data[key]?.[field] || null;
  }

  hdel(key: string, field: string): number {
    if (this.data[key] && field in this.data[key]) {
      delete this.data[key][field];
      return 1; // Field deleted
    }
    return 0; // Field does not exist
  }
}

export const hashStore = new HashStore();