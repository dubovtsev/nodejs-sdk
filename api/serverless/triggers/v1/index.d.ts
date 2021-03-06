// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';
import { Session } from '../../../../index.js';

import * as protobuf from '../../../../contrib/google/protobuf';
import * as operation from '../../../../api/operation';
import * as Trigger from '../../../../Trigger';

export interface Predicate {
    andPredicate?: AndPredicate;

    fieldValuePredicate?: FieldValuePredicate;
}

export interface AndPredicate {
    predicate?: Predicate[];
}

export interface FieldValuePredicate {
    fieldPath: string;

    /**
     * string representation of the value matches exactly to the given string
     */
    exact?: string;

    /**
     * string representation of the value matches exactly to the given string
     */
    prefix?: string;

    /**
     * value has given prefix
     */
    suffix?: string;
}

export enum TriggerType {
    TRIGGER_TYPE_UNSPECIFIED = 0,

    /**
     * The trigger is activated on a timer.
     */
    TIMER = 2,

    /**
     * The trigger is activated by messages from a message queue.
     *
     * Only Yandex Message Queue is currently supported.
     */
    MESSAGE_QUEUE = 3,

    /**
     * The trigger is activated by messages from Yandex IoT Core.
     */
    IOT_MESSAGE = 4,

    OBJECT_STORAGE = 5,

    CONTAINER_REGISTRY = 6,
}

/**
 * A trigger to invoke a serverless function. For more information, see [Triggers](/docs/functions/concepts/trigger).
 */
export interface Trigger {
    /**
     * ID of the trigger. Generated at creation time.
     */
    id?: string;

    /**
     * ID of the folder that the trigger belongs to.
     */
    folderId: string;

    /**
     * Creation timestamp for the trigger.
     */
    createdAt?: protobuf.Timestamp;

    /**
     * Name of the trigger.
     */
    name?: string;

    /**
     * Description of the trigger.
     */
    description?: string;

    /**
     * Trigger labels as `key:value` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * Rule for trigger activation (always consistent with the trigger type).
     */
    rule: Trigger.Rule;
}

export namespace Trigger {
    /**
     * Description of a rule for trigger activation.
     */
    export interface Rule {
        /**
         * Rule for a timed trigger.
         */
        timer?: Timer;

        /**
         * Rule for a message queue trigger.
         */
        messageQueue?: MessageQueue;

        /**
         * Rule for a Yandex IoT Core trigger.
         */
        iotMessage?: IoTMessage;

        objectStorage?: ObjectStorage;

        containerRegistry?: ContainerRegistry;
    }

    /**
     * Rule for activating a timed trigger.
     */
    export interface Timer {
        /**
         * Description of a schedule as a [cron expression](/docs/functions/concepts/trigger/timer).
         */
        cronExpression: string;

        /**
         * Instructions for invoking a function once.
         */
        invokeFunction?: InvokeFunctionOnce;

        invokeFunctionWithRetry?: InvokeFunctionWithRetry;
    }

    /**
     * Rule for activating a message queue trigger.
     */
    export interface MessageQueue {
        /**
         * ID of the message queue in Yandex Message Queue.
         */
        queueId: string;

        /**
         * ID of the service account which has read access to the message queue.
         */
        serviceAccountId: string;

        /**
         * Batch settings for processing messages in the queue.
         */
        batchSettings: BatchSettings;

        /**
         * Queue visibility timeout override.
         */
        visibilityTimeout?: protobuf.Duration;

        /**
         * Instructions for invoking a function once.
         */
        invokeFunction?: InvokeFunctionOnce;
    }

    /**
     * Rule for activating a Yandex IoT Core trigger.
     */
    export interface IoTMessage {
        /**
         * ID of the Yandex IoT Core registry.
         */
        registryId: string;

        /**
         * ID of the Yandex IoT Core device in the registry.
         */
        deviceId?: string;

        /**
         * MQTT topic whose messages activate the trigger.
         */
        mqttTopic?: string;

        /**
         * Instructions for invoking a function with retries as needed.
         */
        invokeFunction?: InvokeFunctionWithRetry;
    }

    export enum ObjectStorageEventType {
        OBJECT_STORAGE_EVENT_TYPE_UNSPECIFIED = 0,

        OBJECT_STORAGE_EVENT_TYPE_CREATE_OBJECT = 1,

        OBJECT_STORAGE_EVENT_TYPE_UPDATE_OBJECT = 2,

        OBJECT_STORAGE_EVENT_TYPE_DELETE_OBJECT = 3,
    }

    export interface ObjectStorage {
        /**
         * Type (name) of events, at least one value is required.
         */
        eventType?: ObjectStorageEventType[];

        bucketId?: string;

        /**
         * Filter, optional.
         */
        prefix?: string;

        suffix?: string;

        invokeFunction?: InvokeFunctionWithRetry;
    }

    export enum ContainerRegistryEventType {
        CONTAINER_REGISTRY_EVENT_TYPE_UNSPECIFIED = 0,

        CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE = 1,

        CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE = 2,

        CONTAINER_REGISTRY_EVENT_TYPE_CREATE_IMAGE_TAG = 3,

        CONTAINER_REGISTRY_EVENT_TYPE_DELETE_IMAGE_TAG = 4,
    }

    export interface ContainerRegistry {
        /**
         * Type (name) of events, at least one value is required.
         */
        eventType?: ContainerRegistryEventType[];

        registryId?: string;

        /**
         * Filter, optional.
         */
        imageName?: string;

        tag?: string;

        invokeFunction?: InvokeFunctionWithRetry;
    }
}

/**
 * A single function invocation.
 */
export interface InvokeFunctionOnce {
    /**
     * ID of the function to invoke.
     */
    functionId: string;

    /**
     * Tag of the function version to execute.
     */
    functionTag?: string;

    /**
     * ID of the service account that should be used to invoke the function.
     */
    serviceAccountId?: string;
}

/**
 * A function invocation with retries.
 */
export interface InvokeFunctionWithRetry {
    /**
     * ID of the function to invoke.
     */
    functionId: string;

    /**
     * Tag of the function version to execute.
     */
    functionTag?: string;

    /**
     * ID of the service account which has permission to invoke the function.
     */
    serviceAccountId?: string;

    /**
     * Retry policy. If the field is not specified, or the value is empty, no retries will be attempted.
     */
    retrySettings?: RetrySettings;

    /**
     * DLQ policy (no value means discarding a message)
     */
    deadLetterQueue?: PutQueueMessage;
}

export interface PutQueueMessage {
    /**
     * ID of the queue.
     */
    queueId?: string;

    /**
     * SA which has write permission on the queue.
     */
    serviceAccountId: string;
}

/**
 * Settings for batch processing of messages in a queue.
 */
export interface BatchSettings {
    /**
     * Batch size. Trigger will send the batch of messages to the associated function
     * when the number of messages in the queue reaches this value, or the [cutoff] time has passed.
     */
    size?: Long;

    /**
     * Maximum wait time. Trigger will send the batch of messages the time since the last batch
     * exceeds the `cutoff` value, regardless of the amount of messages in the queue.
     */
    cutoff: protobuf.Duration;
}

/**
 * Settings for retrying to invoke a function.
 */
export interface RetrySettings {
    /**
     * Maximum number of retries (extra invokes) before the action is considered failed.
     */
    retryAttempts?: Long;

    /**
     * Time in seconds to wait between individual retries.
     */
    interval: protobuf.Duration;
}

/**
 * A set of methods for managing triggers for serverless functions.
 */
export class TriggerService {
    constructor(session?: Session);
    /**
     * Returns the specified trigger.
     *
     * To get the list of all available triggers, make a [List] request.
     */
    get(request: GetTriggerRequest): Promise<Trigger>;

    /**
     * Retrieves the list of triggers in the specified folder.
     */
    list(request: ListTriggersRequest): Promise<ListTriggersResponse>;

    /**
     * Creates a trigger in the specified folder.
     */
    create(request: CreateTriggerRequest): Promise<operation.Operation>;

    /**
     * Updates the specified trigger.
     */
    update(request: UpdateTriggerRequest): Promise<operation.Operation>;

    /**
     * Deletes the specified trigger.
     */
    delete(request: DeleteTriggerRequest): Promise<operation.Operation>;

    /**
     * Lists operations for the specified trigger.
     */
    listOperations(
        request: ListTriggerOperationsRequest
    ): Promise<ListTriggerOperationsResponse>;
}

export interface GetTriggerRequest {
    /**
     * ID of the trigger to return.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}

export interface ListTriggersRequest {
    /**
     * ID of the folder to list triggers in.
     *
     * To get a folder ID use a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggersResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggersResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters triggers listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-trigger`.
     */
    filter?: string;
}

export interface ListTriggersResponse {
    /**
     * List of triggers in the specified folder.
     */
    triggers?: Trigger[];

    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggersRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggersRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken?: string;
}

export interface CreateTriggerRequest {
    /**
     * ID of the folder to create a trigger in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;

    /**
     * Name of the trigger.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * Description of the trigger.
     */
    description?: string;

    /**
     * Resource labels as `key:value` pairs.
     */
    labels?: { [s: string]: string };

    /**
     * Trigger type.
     */
    rule: Trigger.Rule;
}

export interface CreateTriggerMetadata {
    /**
     * ID of the trigger that is being created.
     */
    triggerId?: string;
}

export interface UpdateTriggerRequest {
    /**
     * ID of the trigger to update.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;

    /**
     * Field mask that specifies which attributes of the trigger should be updated.
     */
    updateMask?: protobuf.FieldMask;

    /**
     * New name for the trigger.
     * The name must be unique within the folder.
     */
    name?: string;

    /**
     * New description of the trigger.
     */
    description?: string;

    /**
     * Trigger labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [TriggerService.Get] request.
     */
    labels?: { [s: string]: string };
}

export interface UpdateTriggerMetadata {
    /**
     * ID of the trigger that is being updated.
     */
    triggerId: string;
}

export interface DeleteTriggerRequest {
    /**
     * ID of the trigger to delete.
     *
     * To get a trigger ID make a [TriggerService.List] request.
     */
    triggerId: string;
}

export interface DeleteTriggerMetadata {
    /**
     * ID of the trigger that is being deleted.
     */
    triggerId: string;
}

export interface ListTriggerOperationsRequest {
    /**
     * ID of the trigger to list operations for.
     */
    triggerId: string;

    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListTriggerOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize?: Long;

    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListTriggerOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken?: string;

    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [Trigger.name] field.
     * 2. A conditional operator. Can be either `=` or `!=` for single values, `IN` or `NOT IN`
     * for lists of values.
     * 3. The value. Must be 3-63 characters long and match the regular expression `^[a-z][-a-z0-9]{1,61}[a-z0-9]$`.
     * Example of a filter: `name=my-function`.
     */
    filter?: string;
}

export interface ListTriggerOperationsResponse {
    /**
     * List of operations for the specified trigger.
     */
    operations?: operation.Operation[];

    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListTriggerOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListTriggerOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken?: string;
}
