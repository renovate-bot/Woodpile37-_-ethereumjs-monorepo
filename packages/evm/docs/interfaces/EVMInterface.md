[@ethereumjs/evm](../README.md) / EVMInterface

# Interface: EVMInterface

## Table of contents

### Properties

- [events](EVMInterface.md#events)
- [journal](EVMInterface.md#journal)
- [precompiles](EVMInterface.md#precompiles)
- [stateManager](EVMInterface.md#statemanager)

### Methods

- [runCall](EVMInterface.md#runcall)
- [runCode](EVMInterface.md#runcode)

## Properties

### events

• `Optional` **events**: `AsyncEventEmitter`<`EVMEvents`\>

#### Defined in

[types.ts:158](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L158)

___

### journal

• **journal**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | `Map`<`string`, `Set`<`string`\>\> |
| `addAlwaysWarmAddress` | (`address`: `string`, `addToAccessList?`: `boolean`) => `void` |
| `addAlwaysWarmSlot` | (`address`: `string`, `slot`: `string`, `addToAccessList?`: `boolean`) => `void` |
| `checkpoint` | () => `Promise`<`void`\> |
| `cleanJournal` | () => `void` |
| `cleanup` | () => `Promise`<`void`\> |
| `commit` | () => `Promise`<`void`\> |
| `deleteAccount` | (`address`: `Address`) => `Promise`<`void`\> |
| `putAccount` | (`address`: `Address`, `account`: `Account`) => `Promise`<`void`\> |
| `revert` | () => `Promise`<`void`\> |
| `startReportingAccessList` | () => `void` |

#### Defined in

[types.ts:141](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L141)

___

### precompiles

• **precompiles**: `Map`<`string`, `PrecompileFunc`\>

#### Defined in

[types.ts:155](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L155)

___

### stateManager

• **stateManager**: `EVMStateManagerInterface`

#### Defined in

[types.ts:154](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L154)

## Methods

### runCall

▸ **runCall**(`opts`): `Promise`<[`EVMResult`](EVMResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `EVMRunCallOpts` |

#### Returns

`Promise`<[`EVMResult`](EVMResult.md)\>

#### Defined in

[types.ts:156](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L156)

___

### runCode

▸ **runCode**(`opts`): `Promise`<[`ExecResult`](ExecResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `EVMRunCodeOpts` |

#### Returns

`Promise`<[`ExecResult`](ExecResult.md)\>

#### Defined in

[types.ts:157](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/evm/src/types.ts#L157)
