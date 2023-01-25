/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link BurnArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link BurnArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type BurnArgsRecord = {
  V1: { authorizationData: beet.COption<AuthorizationData> };
};

/**
 * Union type respresenting the BurnArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isBurnArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type BurnArgs = beet.DataEnumKeyAsKind<BurnArgsRecord>;

export const isBurnArgsV1 = (x: BurnArgs): x is BurnArgs & { __kind: 'V1' } => x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const burnArgsBeet = beet.dataEnum<BurnArgsRecord>([
  [
    'V1',
    new beet.FixableBeetArgsStruct<BurnArgsRecord['V1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'BurnArgsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<BurnArgs, BurnArgs>;