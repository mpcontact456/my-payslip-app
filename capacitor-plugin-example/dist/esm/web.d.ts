import { WebPlugin } from '@capacitor/core';
import type { FileDownloadPlugin } from './definitions';
export declare class FileDownloadWeb extends WebPlugin implements FileDownloadPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
