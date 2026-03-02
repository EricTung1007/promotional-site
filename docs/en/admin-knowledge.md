# Knowledge Base Management

> Upload and manage document data to provide an accurate knowledge source.

## Overview
Administrators can upload, view, and delete documents in the knowledge base. This data undergoes vectorization to become the retrieval source for the Knowledge Assistant (RAG).

> Only available to administrators.
> **Note**: Knowledge base management is currently handled primarily via backend API. The frontend interface is still under development.

---

## Document Upload

| Format | Extension |
| --- | --- |
| PDF | .pdf |
| Word | .docx |
| Text | .txt |
| HTML | .html |
| Markdown | .md |

### Automatic Processing
File Upload → Document Parsing → Content Chunking → Vector Embedding → Indexing

---

## Viewing the Knowledge Base
Admins can view uploaded chunks, including File Name, Company, Department, Chunk Type (TEXT/TABLE/IMAGE), Last Updated...

### Multi-tenant Isolation
- Data is strictly isolated by company. Users can only query their own company's knowledge base.

---

## Deleting Documents
Admins can batch-delete document chunks. 
> Deleting is irreversible. Once deleted, the Knowledge Assistant will no longer retrieve this content.
