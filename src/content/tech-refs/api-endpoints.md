---
title: "AAIE API Endpoints Reference"
description: "Complete reference for all AAIE API endpoints, including authentication, request/response formats, and examples"
category: "api"
tags: ["api", "endpoints", "authentication", "rest"]
version: "1.0.0"
author: "AAIE Development Team"
date: 2024-01-10
lastUpdated: 2024-01-18
---

# AAIE API Endpoints Reference

## Overview

The AAIE API provides programmatic access to the Artificial Assessment Intelligence for Educators platform. This document covers all available endpoints, authentication methods, and usage examples.

## Base URL

```
Production: https://api.aaie.org/v1
Development: https://dev-api.aaie.org/v1
```

## Authentication

All API requests require authentication using JWT tokens.

### Getting an Access Token

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

### Using the Access Token

Include the token in the Authorization header:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Endpoints

### Authentication

#### POST /auth/login
Authenticate a user and receive access tokens.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "access_token": "string",
  "refresh_token": "string",
  "expires_in": "number",
  "token_type": "string"
}
```

#### POST /auth/refresh
Refresh an expired access token.

**Request Body:**
```json
{
  "refresh_token": "string"
}
```

#### POST /auth/logout
Invalidate the current access token.

**Headers:**
```
Authorization: Bearer {access_token}
```

### Assessments

#### GET /assessments
Retrieve a list of assessments.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `category` (optional): Filter by category
- `status` (optional): Filter by status (draft, published, archived)

**Response:**
```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "category": "string",
      "status": "string",
      "created_at": "datetime",
      "updated_at": "datetime"
    }
  ],
  "pagination": {
    "page": "number",
    "limit": "number",
    "total": "number",
    "pages": "number"
  }
}
```

#### POST /assessments
Create a new assessment.

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "category": "string",
  "questions": [
    {
      "type": "multiple_choice",
      "text": "string",
      "options": ["string"],
      "correct_answer": "string",
      "points": "number"
    }
  ]
}
```

#### GET /assessments/{id}
Retrieve a specific assessment by ID.

**Response:**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "category": "string",
  "status": "string",
  "questions": ["array"],
  "created_at": "datetime",
  "updated_at": "datetime"
}
```

### Questions

#### GET /questions
Retrieve a list of questions.

**Query Parameters:**
- `type` (optional): Filter by question type
- `difficulty` (optional): Filter by difficulty level
- `category` (optional): Filter by category

#### POST /questions
Create a new question.

**Request Body:**
```json
{
  "type": "string",
  "text": "string",
  "options": ["string"],
  "correct_answer": "string",
  "points": "number",
  "difficulty": "string",
  "category": "string"
}
```

### Results

#### GET /results
Retrieve assessment results.

**Query Parameters:**
- `assessment_id` (optional): Filter by assessment
- `user_id` (optional): Filter by user
- `date_from` (optional): Filter by start date
- `date_to` (optional): Filter by end date

#### POST /results
Submit assessment results.

**Request Body:**
```json
{
  "assessment_id": "string",
  "answers": [
    {
      "question_id": "string",
      "answer": "string",
      "time_taken": "number"
    }
  ],
  "total_time": "number"
}
```

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": "object"
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| `AUTH_001` | Invalid credentials |
| `AUTH_002` | Token expired |
| `AUTH_003` | Insufficient permissions |
| `VAL_001` | Validation error |
| `NOT_FOUND` | Resource not found |
| `SERVER_ERROR` | Internal server error |

### Example Error Response

```json
{
  "error": {
    "code": "VAL_001",
    "message": "Validation failed",
    "details": {
      "title": "Title is required",
      "category": "Invalid category value"
    }
  }
}
```

## Rate Limiting

API requests are rate-limited to ensure fair usage:

- **Authentication endpoints**: 5 requests per minute
- **Read operations**: 100 requests per minute
- **Write operations**: 20 requests per minute

Rate limit headers are included in responses:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## SDKs and Libraries

### JavaScript/Node.js

```bash
npm install @aaie/api-client
```

```javascript
import { AAIEClient } from '@aaie/api-client';

const client = new AAIEClient({
  baseUrl: 'https://api.aaie.org/v1',
  apiKey: 'your_api_key'
});

const assessments = await client.assessments.list();
```

### Python

```bash
pip install aaie-api-client
```

```python
from aaie_api_client import AAIEClient

client = AAIEClient(
    base_url='https://api.aaie.org/v1',
    api_key='your_api_key'
)

assessments = client.assessments.list()
```

## Support

For API support and questions:

- **Documentation**: [https://docs.aaie.org/api](https://docs.aaie.org/api)
- **Email**: api-support@aaie.org
- **GitHub Issues**: [https://github.com/aaie/api-issues](https://github.com/aaie/api-issues)

---

*Last updated: January 18, 2024*  
*API Version: 1.0.0*
