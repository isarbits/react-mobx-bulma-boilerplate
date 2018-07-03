// store stuff in local storage

class Storage {
    public get(key: string): string {
        return localStorage.getItem(key);
    }

    public set(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    public remove(key: string) {
        localStorage.removeItem(key);
    }
}

export const storage = new Storage();
export { Storage };
