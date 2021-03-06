// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../index.js';

import * as protobuf from '../../../contrib/google/protobuf';
import * as operation from '../../../api/operation';
import * as access from '../../../api/access';

/**
 * A Blob resource.
 */
export interface Blob {
    /**
     * Output only. ID of the blob.
     */
    id?: string;

    /**
     * Content-addressable identifier of the blob.
     */
    digest?: string;

    /**
     * Size of the blob, specified in bytes.
     */
    size?: Long;

    urls?: string[];
}

/**
 * An Image resource. For more information, see [Docker image](/docs/cloud/container-registry/docker-image).
 */
export interface Image {
    /**
     * Output only. ID of the Docker image.
     */
    id?: string;

    /**
     * Name of the Docker image.
     * The name is unique within the registry.
     */
    name?: string;

    /**
     * Content-addressable identifier of the Docker image.
     */
    digest?: string;

    /**
     * Compressed size of the Docker image, specified in bytes.
     */
    compressedSize?: Long;

    /**
     * Configuration of the Docker image.
     */
    config?: Blob;

    /**
     * Layers of the Docker image.
     */
    layers?: Blob[];

    /**
     * Tags of the Docker image.
     *
     * Each tag is unique within the repository.
     */
    tags?: string[];

    /**
     * Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createdAt?: protobuf.Timestamp;
}

/**
 * A set of methods for managing Image resources.
 */
export class ImageService {
    constructor(session?: Session);
    /**
     * Retrieves the list of Image resources in the specified registry or repository.
     */
    list(request: ListImagesRequest): Promise<ListImagesResponse>;

    /**
     * Returns the specified Image resource.
     *
     * To get the list of available Image resources, make a [List] request.
     */
    get(request: GetImageRequest): Promise<Image>;

    /**
     * Deletes the specified Docker image.
     */
    delete(request: DeleteImageRequest): Promise<operation.Operation>;
}

export interface ListImagesRequest {
    /**
     * ID of the registry to list Docker images in.
     *
     * [registry_id] is ignored if a [ListImagesRequest.repository_name] is specified in the request.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId?: string;

    /**
     * Name of the repository to list Docker images in.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName?: string;

    /**
     * ID of the folder to list Docker images in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.repository_name] or a [ListImagesRequest.registry_id] are specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId?: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListImagesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListImagesResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Image.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. The value. Must be a maximum of 256 characters and match the regular expression `[a-z0-9]+(?:[._-][a-z0-9]+)*(/([a-z0-9]+(?:[._-][a-z0-9]+)*))`.
     */
    filter?: string;

    orderBy?: string;
}

export interface ListImagesResponse {
    /**
     * List of Image resources.
     */
    images?: Image[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListImagesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListImagesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface GetImageRequest {
    /**
     * ID of the Docker image resource to return.
     *
     * To get the Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageRequest {
    /**
     * ID of the Docker image to delete.
     *
     * To get Docker image ID use a [ImageService.List] request.
     */
    imageId: string;
}

export interface DeleteImageMetadata {
    /**
     * ID of the Docker image that is being deleted.
     */
    imageId?: string;
}

/**
 * A Registry resource. For more information, see [Registry](/docs/cloud/containerregistry/registry).
 */
export interface Registry {
    /**
     * Output only. ID of the registry.
     */
    id?: string;

    /**
     * ID of the folder that the registry belongs to.
     */
    folderId?: string;

    /**
     * Name of the registry.
     */
    name?: string;

    /**
     * Output only. Status of the registry.
     */
    status?: Registry.Status;

    /**
     * Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Resource labels as `key:value` pairs. Мaximum of 64 per resource.
     */
    labels?: { [s: string]: string };
}

export namespace Registry {
    export enum Status {
        STATUS_UNSPECIFIED = 0,

        /**
         * Registry is being created.
         */
        CREATING = 1,

        /**
         * Registry is ready to use.
         */
        ACTIVE = 2,

        /**
         * Registry is being deleted.
         */
        DELETING = 3,
    }
}

/**
 * A set of methods for managing Registry resources.
 */
export class RegistryService {
    constructor(session?: Session);
    /**
     * Returns the specified Registry resource.
     *
     * To get the list of available Registry resources, make a [List] request.
     */
    get(request: GetRegistryRequest): Promise<Registry>;

    /**
     * Retrieves the list of Registry resources in the specified folder.
     */
    list(request: ListRegistriesRequest): Promise<ListRegistriesResponse>;

    /**
     * Creates a registry in the specified folder.
     */
    create(request: CreateRegistryRequest): Promise<operation.Operation>;

    /**
     * Updates the specified registry.
     */
    update(request: UpdateRegistryRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified registry.
     */
    delete(request: DeleteRegistryRequest): Promise<operation.Operation>;

    /**
     * Lists access bindings for the specified registry.
     */
    listAccessBindings(
        request: access.ListAccessBindingsRequest
    ): Promise<access.ListAccessBindingsResponse>;

    /**
     * Sets access bindings for the specified registry.
     */
    setAccessBindings(
        request: access.SetAccessBindingsRequest
    ): Promise<operation.Operation>;

    /**
     * Updates access bindings for the specified registry.
     */
    updateAccessBindings(
        request: access.UpdateAccessBindingsRequest
    ): Promise<operation.Operation>;
}

export interface GetRegistryRequest {
    /**
     * ID of the Registry resource to return.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;
}

export interface ListRegistriesRequest {
    /**
     * ID of the folder to list registries in.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRegistriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRegistriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Registry.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter?: string;
}

export interface ListRegistriesResponse {
    /**
     * List of Registry resources.
     */
    registries?: Registry[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRegistriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRegistriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateRegistryRequest {
    /**
     * ID of the folder to create a registry in.
     *
     * To get the folder ID, use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name?: string;

    /**
     * Resource labels as `key:value` pairs.
     */
    labels?: { [s: string]: string };
}

export interface CreateRegistryMetadata {
    /**
     * ID of the registry that is being created.
     */
    registryId?: string;
}

export interface UpdateRegistryRequest {
    /**
     * ID of the Registry resource to update.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId: string;

    /**
     * Field mask that specifies which fields of the Registry resource are going to be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * Name of the registry.
     *
     * There may be only one registry per folder.
     */
    name?: string;

    /**
     * Resource labels as `key:value` pairs.
     *
     * Existing set of `labels` is completely replaced by the provided set.
     */
    labels?: { [s: string]: string };
}

export interface UpdateRegistryMetadata {
    /**
     * ID of the Registry resource that is being updated.
     */
    registryId?: string;
}

export interface DeleteRegistryRequest {
    /**
     * ID of the registry to delete.
     */
    registryId: string;
}

export interface DeleteRegistryMetadata {
    /**
     * ID of the registry that is being deleted.
     */
    registryId?: string;
}

/**
 * A Repository resource. For more information, see [Repository](/docs/cloud/container-registry/repository).
 */
export interface Repository {
    /**
     * Name of the repository.
     * The name is unique within the registry.
     */
    name?: string;

    /**
     * Output only. ID of the repository.
     */
    id?: string;
}

/**
 * A set of methods for managing Repository resources.
 */
export class RepositoryService {
    constructor(session?: Session);
    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    get(request: GetRepositoryRequest): Promise<Repository>;

    /**
     * Returns the specified Repository resource.
     *
     * To get the list of available Repository resources, make a [List] request.
     */
    getByName(request: GetRepositoryByNameRequest): Promise<Repository>;

    /**
     * Retrieves the list of Repository resources in the specified registry.
     */
    list(request: ListRepositoriesRequest): Promise<ListRepositoriesResponse>;

    /**
     * Lists access bindings for the specified repository.
     */
    listAccessBindings(
        request: access.ListAccessBindingsRequest
    ): Promise<access.ListAccessBindingsResponse>;

    /**
     * Sets access bindings for the specified repository.
     */
    setAccessBindings(
        request: access.SetAccessBindingsRequest
    ): Promise<operation.Operation>;

    /**
     * Updates access bindings for the specified repository.
     */
    updateAccessBindings(
        request: access.UpdateAccessBindingsRequest
    ): Promise<operation.Operation>;
}

export interface GetRepositoryRequest {
    /**
     * ID of the Repository resource to return.
     *
     * To get the repository ID use a [RepositoryService.List] request.
     */
    repositoryId: string;
}

export interface GetRepositoryByNameRequest {
    /**
     * Name of the Repository resource to return.
     *
     * To get the repository name use a [RepositoryService.List] request.
     */
    repositoryName: string;
}

export interface ListRepositoriesRequest {
    /**
     * ID of the registry to list repositories in.
     *
     * To get the registry ID use a [RegistryService.List] request.
     */
    registryId?: string;

    /**
     * ID of the folder to list registries in.
     *
     * [folder_id] is ignored if a [ListImagesRequest.registry_id] is specified in the request.
     *
     * To get the folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId?: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListRepositoriesResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set [page_token] to the
     * [ListRepositoriesResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     * The expression must specify:
     * 1. The field name. Currently you can use filtering only on [Repository.name] field.
     * 2. An operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN` for lists of values.
     * 3. Value or a list of values to compare against the values of the field.
     */
    filter?: string;

    orderBy?: string;
}

export interface ListRepositoriesResponse {
    /**
     * List of Repository resources.
     */
    repositories?: Repository[];

    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListRepositoriesRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListRepositoriesRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken?: string;
}
