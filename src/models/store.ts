interface KeyValue {
  value: string;
  expiry?: number; // Timestamp for expiry
}

class Store {
  private data: Record<string, KeyValue> = {};

  set(key: string, value: string, expiry?: number): void {
    this.data[key] = { value, expiry: expiry ? Date.now() + expiry : undefined };
  }

  get(key: string): string | null {
    const entry = this.data[key];
    if (!entry) return null;

    if (entry.expiry && Date.now() > entry.expiry) {
      delete this.data[key]; // Remove expired key
      return null;
    }

    return entry.value;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }
}

export const store = new Store();