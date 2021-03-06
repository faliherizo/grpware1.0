import { StaticReflector } from '../aot/static_reflector';
import { StaticSymbolResolver, StaticSymbolResolverHost } from '../aot/static_symbol_resolver';
import { AotSummaryResolverHost } from '../aot/summary_resolver';
import { CompileMetadataResolver } from '../metadata_resolver';
import { MessageBundle } from './message_bundle';
/**
 * The host of the Extractor disconnects the implementation from TypeScript / other language
 * services and from underlying file systems.
 */
export interface ExtractorHost extends StaticSymbolResolverHost, AotSummaryResolverHost {
    /**
     * Loads a resource (e.g. html / css)
     */
    loadResource(path: string): Promise<string>;
}
export declare class Extractor {
    host: ExtractorHost;
    private staticSymbolResolver;
    private messageBundle;
    private metadataResolver;
    constructor(host: ExtractorHost, staticSymbolResolver: StaticSymbolResolver, messageBundle: MessageBundle, metadataResolver: CompileMetadataResolver);
    extract(rootFiles: string[]): Promise<MessageBundle>;
    static create(host: ExtractorHost): {
        extractor: Extractor;
        staticReflector: StaticReflector;
    };
}
