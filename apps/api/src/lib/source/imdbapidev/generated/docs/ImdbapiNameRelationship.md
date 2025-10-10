# ImdbapiNameRelationship

The NameRelationship message represents a relationship between two names in the IMDb database, such as family members, spouses, parents, children, etc. Each relationship includes the related name, the type of relationship, and any additional attributes associated with the relationship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ImdbapiName**](ImdbapiName.md) |  | [optional] [default to undefined]
**relationType** | **string** | The type of relationship, such as \&quot;spouse\&quot;, \&quot;parent\&quot;, \&quot;child\&quot;, etc. | [optional] [default to undefined]
**attributes** | **Array&lt;string&gt;** | Additional attributes associated with the relationship. | [optional] [default to undefined]

## Example

```typescript
import { ImdbapiNameRelationship } from './api';

const instance: ImdbapiNameRelationship = {
    name,
    relationType,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
