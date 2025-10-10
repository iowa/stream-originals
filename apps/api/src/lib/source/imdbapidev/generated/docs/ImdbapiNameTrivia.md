# ImdbapiNameTrivia

NameTrivia represents a trivia fact about a person (name).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the trivia. | [optional] [default to undefined]
**text** | **string** | The trivia body text. | [optional] [default to undefined]
**interestCount** | **number** | The number of users who have expressed interest in this trivia. | [optional] [default to undefined]
**voteCount** | **number** | The number of votes this trivia has received. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiNameTrivia } from './api';

const instance: ImdbapiNameTrivia = {
    id,
    text,
    interestCount,
    voteCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
