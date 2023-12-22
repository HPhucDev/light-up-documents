---
title: REST API
description: Interact with your Content-Types using the REST API endpoints Strapi generates for you.
# displayed_sidebar: restApiSidebar
---

# REST API

**Conventions**

The base URL to send all API requests is `https://api.lightup.io.vn`. HTTPS is required for all API requests.

The API follows RESTful conventions when possible, with most operations performed via `GET`, `POST`, `PATCH`, and `DELETE` requests on page and database resources. Request and response bodies are encoded as JSON.

## Endpoints

For each Content-Type, the following endpoints are automatically generated:

<Tabs groupId="collection-single">

<TabItem value="collection-type" label="Collection type">

| Method   | URL                             | Description                           |
| -------- | ------------------------------- | ------------------------------------- |
| `GET`    | `/api/:pluralApiId`             | [Get a list of entries](#get-entries) |
| `POST`   | `/api/:pluralApiId`             | [Create an entry](#create-an-entry)   |
| `GET`    | `/api/:pluralApiId/:documentId` | [Get an entry](#get-an-entry)         |
| `PATCH`  | `/api/:pluralApiId/:documentId` | [Update an entry](#update-an-entry)   |
| `DELETE` | `/api/:pluralApiId/:documentId` | [Delete an entry](#delete-an-entry)   |

</TabItem>
</Tabs>

<details>

<summary>Examples:</summary>

<Tabs groupId="collection-single">

<TabItem value="collection-type" label="Collection type">

`Restaurant`

| Method | URL                    | Description               |
| ------ | ---------------------- | ------------------------- |
| GET    | `/api/restaurants`     | Get a list of restaurants |
| POST   | `/api/restaurants`     | Create a restaurant       |
| GET    | `/api/restaurants/:id` | Get a specific restaurant |
| PATCH  | `/api/restaurants/:id` | Update a restaurant       |
| DELETE | `/api/restaurants/:id` | Delete a restaurant       |

</TabItem>

</Tabs>
</details>

## Requests

Requests return a response as an object which usually includes the following keys:

- Top-level resources are addressable by a UUIDv4 `"id"` property. You may omit dashes from the ID when making requests to the API, e.g. when copying the ID from a Notion URL.
- Property names are in `snake_case` (not `camelCase` or `kebab-case`).
- Temporal values (dates and datetimes) are encoded in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. Datetimes will include the time value (`2020-08-12T02:12:33.231Z`) while dates will include only the date (`2020-08-12`)
- The Notion API does not support empty strings. To unset a string value for properties like a `url`[Property value object](https://developers.notion.com/reference/property-value-object), for example, use an explicit `null` instead of `""`.
- Top-level resources have an `"object"` property. This property can be used to determine the type of the resource (e.g. `"data"`)
- The JSON response format according to your request:

<Tabs groupId="collection-single">
  <TabItem value="collection-type" label="Get Pagination">
  <Response>

```json
{
  "data": {
    "data": [],
    "meta": {
      "total_elements": 10,
      "total_pages": 5,
      "page": 1,
      "page_size": 2,
      "first": true,
      "last": false,
      "next_page": 2,
      "prev_page": null
    }
  },
  "message": "string",
  "status_code": 0
}
```

  </Response>
  </TabItem>

  <TabItem value="get-detail" label="Get detail">
  <Response>

```json
{
  "data": {},
  "message": "string",
  "status_code": 0
}
```

  </Response>
  </TabItem>
</Tabs>

:::note
**`"data"`** is the property containing the result data, which can be a string or another value.

**`"message"`** is the property containing a descriptive message about the result.

**`"meta"`** contains pagination information, including total elements, total pages, current page, page size, first and last status, next page, and previous page.

**`"status_code"`** is the property containing the status code, typically used to indicate success (200 could be a success code, while other codes often represent specific errors).
:::

:::note
Here's a more detailed description of the fields within the **`"meta"`** object:

**`"total_elements"`**: The total number of elements across all pages.

**`"total_pages"`**: The total number of pages available based on the specified page size.

**`"page"`**: The current page number.

**`"page_size"`**: The number of elements displayed per page.

**`"first"`**: A boolean indicating whether the current page is the first page (true if it is the first page).

**`"last"`**: A boolean indicating whether the current page is the last page (true if it is the last page).

**`"next_page"`**: The page number of the next page. If there is no next page, this may be null.

**`"prev_page"`**: The page number of the previous page. If the current page is the first page, this may be null.
:::

<SideBySideContainer>

<SideBySideColumn>

### Get entries

Returns entries matching the query filters .

</SideBySideColumn>

<SideBySideColumn>

<ApiCall>

<Request>

`GET http://localhost:1337/api/restaurants?.....`

</Request>

<Response>

```json
{
  "data": {
    "data": [
      {
        "id": "d4bf5592-9de2-11ee-b4e9-0242c0a8c002",
        "title": "Restaurant A",
        "description": "Restaurant A's description"
      },
      {
        "id": "147b68c6-9e27-11ee-b43d-0242c0a8d002",
        "title": "Restaurant B",
        "description": "Restaurant B's description"
      }
    ],
    "meta": {
      "total_elements": 10,
      "total_pages": 5,
      "page": 1,
      "page_size": 2,
      "first": true,
      "last": false,
      "next_page": 2,
      "prev_page": null
    }
  },
  "message": "Success",
  "status_code": "200"
}
```

</Response>

</ApiCall>

</SideBySideColumn>

</SideBySideContainer>

<SideBySideContainer>

<SideBySideColumn>

### Get an entry

Returns an entry by `id`.

</SideBySideColumn>

<SideBySideColumn>

<ApiCall>

<Request title="Example request">

`GET http://localhost:1337/api/restaurants/d4bf5592-9de2-11ee-b4e9-0242c0a8c002`

</Request>

<Response title="Example response">

```json
{
  "data": {
    "id": "d4bf5592-9de2-11ee-b4e9-0242c0a8c002",
    "title": "Restaurant A",
    "description": "Restaurant A's description"
  },
  "message": "Success",
  "status_code": "200"
}
```

</Response>

</ApiCall>

</SideBySideColumn>

</SideBySideContainer>

<SideBySideContainer>

<SideBySideColumn>

### Create an entry

Creates an entry and returns its value.

</SideBySideColumn>

<SideBySideColumn>

<ApiCall>

<Request title="Example request">

`POST http://localhost:1337/api/restaurants`

```json
{
  "data": {
    "title": "Hello",
    "relation_field_a": 2,
    "relation_field_b": [2, 4],
    "link": {
      "id": 1,
      "type": "abc"
    }
  }
}
```

</Request>

<Response title="Example response">

```json
{
  "data": {
    "id": 1,
    "attributes": {}
  },
  "message": "Success",
  "status_code": "200"
}
```

</Response>

</ApiCall>

</SideBySideColumn>
</SideBySideContainer>

<SideBySideContainer>

<SideBySideColumn>

### Update an entry

Partially updates an entry by `id` and returns its value.

Fields that aren't sent in the query are not changed in the database.

</SideBySideColumn>

<SideBySideColumn>

<ApiCall>

<Request title="Example request">

`PATCH http://localhost:1337/api/restaurants/d4bf5592-9de2-11ee-b4e9-0242c0a8c002`

```json
{
  "data": {
    "title": "Hello",
    "relation_field_a": 2,
    "relation_field_b": [2, 4]
  }
}
```

</Request>

<Response title="Example response">

```json
{
  "data": {
    "id": 1,
    "attributes": {}
  },
  "message": "Success",
  "status_code": "200"
}
```

</Response>

</ApiCall>

</SideBySideColumn>
</SideBySideContainer >

<SideBySideContainer>

<SideBySideColumn>

### Delete an entry

Deletes an entry by `id` and returns its value.
</SideBySideColumn>

<SideBySideColumn>
<ApiCall>

<Request title="Example request">

`DELETE http://localhost:1337/api/restaurants?id=d4bf5592-9de2-11ee-b4e9-0242c0a8c002&id=234sdg92-9de2-11ee-b4e9-0242c0a8c002`

</Request>

<Response title="Example response">

```json
{
  "data": [
    {
      "id": "d4bf5592-9de2-11ee-b4e9-0242c0a8c002"
    },
    {
      "id": "234sdg92-9de2-11ee-b4e9-0242c0a8c002"
    }
  ],
  "message": "Success",
  "status_code": "200"
}
```

</Response>

</ApiCall>

</SideBySideColumn>
</SideBySideContainer>
