/* eslint-disable */
/**
 * Generated by orval 🍺
 * Do not edit manually. Run "pnpm run generate-client" instead.
 * Airbyte Public API
 * OpenAPI spec version: 1.0.0
 */
import type { RedirectUrlResponse } from "./AirbyteApi.schemas";
import { cloudAirbyteApiCall } from "../apis";

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;

/**
 * Return a JSON data structure that contains the URL that should be redirected to in the redirectUrl field.
 * @summary Get the Speakeasy Callback URL
 */
export const getSpeakeasyCallbackUrl = (options: SecondParameter<typeof cloudAirbyteApiCall>) => {
  return cloudAirbyteApiCall<RedirectUrlResponse>({ url: `/speakeasy_callback_url`, method: "get" }, options);
};

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

export type GetSpeakeasyCallbackUrlResult = NonNullable<Awaited<ReturnType<typeof getSpeakeasyCallbackUrl>>>;
