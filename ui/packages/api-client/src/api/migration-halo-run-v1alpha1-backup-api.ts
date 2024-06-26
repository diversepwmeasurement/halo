/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Backup } from '../models';
// @ts-ignore
import { BackupList } from '../models';
// @ts-ignore
import { JsonPatchInner } from '../models';
/**
 * MigrationHaloRunV1alpha1BackupApi - axios parameter creator
 * @export
 */
export const MigrationHaloRunV1alpha1BackupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create migration.halo.run/v1alpha1/Backup
         * @param {Backup} [backup] Fresh backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationHaloRunV1alpha1Backup: async (backup?: Backup, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(backup, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMigrationHaloRunV1alpha1Backup: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteMigrationHaloRunV1alpha1Backup', 'name', name)
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMigrationHaloRunV1alpha1Backup: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getMigrationHaloRunV1alpha1Backup', 'name', name)
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List migration.halo.run/v1alpha1/Backup
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMigrationHaloRunV1alpha1Backup: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMigrationHaloRunV1alpha1Backup: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchMigrationHaloRunV1alpha1Backup', 'name', name)
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {Backup} [backup] Updated backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMigrationHaloRunV1alpha1Backup: async (name: string, backup?: Backup, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateMigrationHaloRunV1alpha1Backup', 'name', name)
            const localVarPath = `/apis/migration.halo.run/v1alpha1/backups/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(backup, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MigrationHaloRunV1alpha1BackupApi - functional programming interface
 * @export
 */
export const MigrationHaloRunV1alpha1BackupApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MigrationHaloRunV1alpha1BackupApiAxiosParamCreator(configuration)
    return {
        /**
         * Create migration.halo.run/v1alpha1/Backup
         * @param {Backup} [backup] Fresh backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMigrationHaloRunV1alpha1Backup(backup?: Backup, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Backup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMigrationHaloRunV1alpha1Backup(backup, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.createMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMigrationHaloRunV1alpha1Backup(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMigrationHaloRunV1alpha1Backup(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.deleteMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMigrationHaloRunV1alpha1Backup(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Backup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMigrationHaloRunV1alpha1Backup(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.getMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List migration.halo.run/v1alpha1/Backup
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMigrationHaloRunV1alpha1Backup(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackupList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMigrationHaloRunV1alpha1Backup(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.listMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMigrationHaloRunV1alpha1Backup(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Backup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMigrationHaloRunV1alpha1Backup(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.patchMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update migration.halo.run/v1alpha1/Backup
         * @param {string} name Name of backup
         * @param {Backup} [backup] Updated backup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMigrationHaloRunV1alpha1Backup(name: string, backup?: Backup, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Backup>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMigrationHaloRunV1alpha1Backup(name, backup, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MigrationHaloRunV1alpha1BackupApi.updateMigrationHaloRunV1alpha1Backup']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MigrationHaloRunV1alpha1BackupApi - factory interface
 * @export
 */
export const MigrationHaloRunV1alpha1BackupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MigrationHaloRunV1alpha1BackupApiFp(configuration)
    return {
        /**
         * Create migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Backup> {
            return localVarFp.createMigrationHaloRunV1alpha1Backup(requestParameters.backup, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteMigrationHaloRunV1alpha1Backup(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig): AxiosPromise<Backup> {
            return localVarFp.getMigrationHaloRunV1alpha1Backup(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BackupList> {
            return localVarFp.listMigrationHaloRunV1alpha1Backup(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig): AxiosPromise<Backup> {
            return localVarFp.patchMigrationHaloRunV1alpha1Backup(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update migration.halo.run/v1alpha1/Backup
         * @param {MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig): AxiosPromise<Backup> {
            return localVarFp.updateMigrationHaloRunV1alpha1Backup(requestParameters.name, requestParameters.backup, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Fresh backup
     * @type {Backup}
     * @memberof MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1Backup
     */
    readonly backup?: Backup
}

/**
 * Request parameters for deleteMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Name of backup
     * @type {string}
     * @memberof MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1Backup
     */
    readonly name: string
}

/**
 * Request parameters for getMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Name of backup
     * @type {string}
     * @memberof MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1Backup
     */
    readonly name: string
}

/**
 * Request parameters for listMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1Backup
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1Backup
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1Backup
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1Backup
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1Backup
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Name of backup
     * @type {string}
     * @memberof MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1Backup
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1Backup
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateMigrationHaloRunV1alpha1Backup operation in MigrationHaloRunV1alpha1BackupApi.
 * @export
 * @interface MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest
 */
export interface MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest {
    /**
     * Name of backup
     * @type {string}
     * @memberof MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1Backup
     */
    readonly name: string

    /**
     * Updated backup
     * @type {Backup}
     * @memberof MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1Backup
     */
    readonly backup?: Backup
}

/**
 * MigrationHaloRunV1alpha1BackupApi - object-oriented interface
 * @export
 * @class MigrationHaloRunV1alpha1BackupApi
 * @extends {BaseAPI}
 */
export class MigrationHaloRunV1alpha1BackupApi extends BaseAPI {
    /**
     * Create migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public createMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiCreateMigrationHaloRunV1alpha1BackupRequest = {}, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).createMigrationHaloRunV1alpha1Backup(requestParameters.backup, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public deleteMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiDeleteMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).deleteMigrationHaloRunV1alpha1Backup(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public getMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiGetMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).getMigrationHaloRunV1alpha1Backup(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public listMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiListMigrationHaloRunV1alpha1BackupRequest = {}, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).listMigrationHaloRunV1alpha1Backup(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public patchMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiPatchMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).patchMigrationHaloRunV1alpha1Backup(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update migration.halo.run/v1alpha1/Backup
     * @param {MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MigrationHaloRunV1alpha1BackupApi
     */
    public updateMigrationHaloRunV1alpha1Backup(requestParameters: MigrationHaloRunV1alpha1BackupApiUpdateMigrationHaloRunV1alpha1BackupRequest, options?: RawAxiosRequestConfig) {
        return MigrationHaloRunV1alpha1BackupApiFp(this.configuration).updateMigrationHaloRunV1alpha1Backup(requestParameters.name, requestParameters.backup, options).then((request) => request(this.axios, this.basePath));
    }
}

