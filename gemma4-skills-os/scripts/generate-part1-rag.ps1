$base = "C:\Users\Carlos\Documents\New folder\Luxus-O.S\gemma4-skills-os"
$count = 0

function New-Uuid { [guid]::NewGuid().ToString("N") }

function Write-Skill {
    param([string]$Dir, [string]$Name, [string]$Content, [string[]]$Tags)
    $uuid = New-Uuid
    $slug = ($Name -replace '[^\w\s-]','' -replace '\s+','-').ToLower()
    $file = "$Dir\$uuid`__$slug.md"
    $metaDir = "$Dir\..\.metadata"
    if (!(Test-Path $metaDir)) { New-Item -ItemType Directory -Force -Path $metaDir | Out-Null }
    $Content | Out-File -FilePath $file -Encoding utf8
    $meta = @{
        uuid = $uuid; name = $Name; file = $file
        tags = $Tags; version = "1.0.0"; license = "MIT"
        created_at = (Get-Date -Format "o")
        lines = ($Content -split "`n").Count
    } | ConvertTo-Json
    $meta | Out-File -FilePath "$metaDir\$uuid.json" -Encoding utf8
    $script:count++
}

# ============================================================
# CATEGORY 1: RAG / VECTOR DB SKILLS (800+ files)
# ============================================================
Write-Host "=== GENERATING RAG SKILLS ===" -ForegroundColor Cyan

# --- RAG Retrieval Core Skills ---
$ragRetDir = "$base\skills\memory\rag\rag-retrieval\generated"

$ragTopics = @(
    @{n="Vector Similarity Search - Cosine Similarity";t=@("rag","retrieval","cosine-similarity");c=@"
# Vector Similarity Search: Cosine Similarity

## Overview
Cosine similarity measures the cosine of the angle between two non-zero vectors in a multi-dimensional space. It is the most widely used metric for semantic similarity in RAG systems.

## Mathematical Foundation
``````
cos(θ) = (A · B) / (||A|| × ||B||)
``````

Where A and B are embedding vectors. The result ranges from -1 (opposite) to 1 (identical).

## Key Concepts
- **Normalization**: Cosine similarity is inherently normalized, making it ideal for comparing embeddings of different magnitudes
- **Angular Distance**: Related metric: angular distance = arccos(cosine_similarity) / π
- **Sparse vs Dense**: Works with both sparse (TF-IDF) and dense (transformer) embeddings

## Implementation Best Practices
1. **Pre-normalize vectors** at indexing time to convert cosine similarity to dot product (faster)
2. **Batch computation** using matrix multiplication for efficiency
3. **Approximate methods** (HNSW, IVF) for large-scale retrieval

## Common Pitfalls
- High-dimensional spaces can suffer from the "curse of dimensionality"
- Cosine similarity doesn't capture magnitude differences
- Zero vectors produce undefined results - always validate inputs

## Code Example (Python)
``````python
import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# With normalized vectors (faster)
def fast_cosine(a_norm, b_norm):
    return np.dot(a_norm, b_norm)
``````

## Tools & Libraries
- **NumPy/SciPy**: Basic implementations
- **FAISS**: Facebook's similarity search library
- **Annoy**: Spotify's approximate nearest neighbors
- **ScaNN**: Google's scalable nearest neighbors

## Further Reading
- "Efficient Estimation of Word Representations in Vector Space" (Mikolov et al.)
- FAISS documentation: github.com/facebookresearch/faiss
"@},
    @{n="Euclidean Distance for Vector Search";t=@("rag","retrieval","euclidean");c=@"
# Euclidean Distance for Vector Search

## Overview
Euclidean distance (L2 distance) measures the straight-line distance between two points in multi-dimensional space. Used as an alternative to cosine similarity in RAG systems.

## Mathematical Foundation
``````
d(A, B) = √(Σ(ai - bi)²)
``````

## When to Use Euclidean vs Cosine
| Scenario | Best Metric |
|----------|-------------|
| Normalized embeddings | Either (equivalent) |
| Variable-length docs | Cosine (magnitude-invariant) |
| Image embeddings | Euclidean (captures magnitude) |
| Clustering | Euclidean |

## Key Concepts
- **L2 Normalization**: When vectors are L2-normalized, Euclidean distance is monotonically related to cosine similarity
- **Squared Euclidean**: Often used instead to avoid square root computation
- **Dimensionality Impact**: Performance degrades in very high dimensions

## Implementation
``````python
import numpy as np
from scipy.spatial.distance import euclidean

def l2_distance(a, b):
    return np.sqrt(np.sum((a - b) ** 2))

# Squared (faster, same ranking)
def l2_squared(a, b):
    return np.sum((a - b) ** 2)
``````

## Best Practices
1. Always normalize embeddings before using Euclidean distance for text
2. Use squared Euclidean for ranking (avoids expensive sqrt)
3. Consider PCA for dimensionality reduction in high-dim spaces
4. Use HNSW index with L2 metric for production systems

## Common Pitfalls
- Not normalizing vectors leads to bias toward longer documents
- Square root computation is unnecessary for ranking
- Memory-intensive for large vector collections
"@},
    @{n="Dense Retrieval Models";t=@("rag","dense-retrieval","transformers");c=@"
# Dense Retrieval Models

## Overview
Dense retrieval uses learned dense vector representations (embeddings) to find semantically relevant documents, replacing traditional sparse methods like BM25.

## Architecture
``````
Query → Encoder → Dense Vector (768d+)
                                    → Similarity Search → Top-K Results
Document → Encoder → Dense Vector (768d+)
``````

## Key Models
### Bi-Encoder Models
- **Sentence-BERT (SBERT)**: Siamese network architecture
- **DPR (Dense Passage Retrieval)**: Facebook's dual-encoder
- **E5**: Microsoft's text embedding model
- **BGE**: BAAI General Embedding
- **GTE**: Alibaba's General Text Embeddings
- **Nomic Embed**: Open-source competitive embeddings

### Cross-Encoder Models (Reranking)
- **ms-marco-MiniLM**: Fast cross-encoder for reranking
- **BGE-Reranker**: High-quality reranking model
- **Cohere Rerank**: Commercial API option

## Training Approaches
1. **Contrastive Learning**: InfoNCE loss with hard negatives
2. **Knowledge Distillation**: Teacher model guides student encoder
3. **In-batch Negatives**: Efficient training with batch samples
4. **Hard Negative Mining**: Mining challenging negative examples

## Best Practices
- Use bi-encoder for initial retrieval (fast), cross-encoder for reranking (accurate)
- Fine-tune on domain-specific data for best results
- Use instruction-tuned embeddings (E5-instruct, GTE-Qwen)
- Implement hybrid search: dense + sparse (BM25)

## Common Pitfalls
- Generic embeddings underperform on specialized domains
- Cross-encoders are too slow for initial retrieval
- Embedding dimension affects storage and speed tradeoffs
"@},
    @{n="Sparse Retrieval BM25";t=@("rag","sparse-retrieval","bm25");c=@"
# Sparse Retrieval: BM25

## Overview
BM25 (Best Matching 25) is a probabilistic ranking function based on term frequency and document length. It remains a strong baseline for information retrieval.

## Algorithm
``````
score(D,Q) = Σ IDF(qi) × (f(qi,D) × (k1 + 1)) / (f(qi,D) + k1 × (1 - b + b × |D|/avgdl))
``````

Parameters:
- k1 (typically 1.2-2.0): Term frequency saturation
- b (typically 0.75): Document length normalization

## Key Advantages Over Dense
- No embedding model needed
- Exact keyword matching
- Fast and memory-efficient
- Strong for technical/specialized queries
- No training data required

## Hybrid Search: BM25 + Dense
``````python
# Reciprocal Rank Fusion
def rrf_score(bm25_rank, dense_rank, k=60):
    return 1/(k + bm25_rank) + 1/(k + dense_rank)

# Linear combination
def hybrid_score(bm25_score, dense_score, alpha=0.5):
    return alpha * bm25_score + (1 - alpha) * dense_score
``````

## Implementations
- **Elasticsearch**: Built-in BM25
- **Lucene/Solr**: Industry standard
- **rank_bm25** (Python): Lightweight library
- **Pyserini**: Python toolkit for IR research

## Best Practices
1. Always include BM25 as a baseline
2. Hybrid search outperforms either alone
3. Tune k1 and b on your corpus
4. Use BM25 for keyword-heavy queries
"@},
    @{n="Hybrid Search Best Practices";t=@("rag","hybrid-search","retrieval");c=@"
# Hybrid Search Best Practices

## Overview
Hybrid search combines sparse (lexical) and dense (semantic) retrieval to leverage the strengths of both approaches.

## Architecture
``````
Query → [BM25 Retriever] → Sparse Results ─┐
                                             ├→ Fusion → Reranker → Final Results
Query → [Dense Retriever] → Dense Results ──┘
``````

## Fusion Strategies

### Reciprocal Rank Fusion (RRF)
``````python
def rrf(rankings, k=60):
    scores = {}
    for ranking in rankings:
        for rank, doc_id in enumerate(ranking):
            scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank + 1)
    return sorted(scores.items(), key=lambda x: -x[1])
``````

### Convex Combination
``````python
def convex_combine(sparse_scores, dense_scores, alpha=0.7):
    all_docs = set(sparse_scores) | set(dense_scores)
    return {d: alpha * dense_scores.get(d, 0) + (1-alpha) * sparse_scores.get(d, 0) for d in all_docs}
``````

## Best Practices
1. **Always start with hybrid** - it almost always beats single-method
2. **Tune alpha** on a validation set (usually 0.6-0.8 for dense weight)
3. **Use RRF** when scores aren't comparable across methods
4. **Add reranking** with a cross-encoder for final stage
5. **Index both** sparse and dense representations at ingestion time

## Common Pitfalls
- Assuming dense always beats sparse (not true for exact matches)
- Not normalizing scores before combination
- Ignoring the computational cost of running two retrievers
"@},
    @{n="Cross-Encoder Reranking";t=@("rag","reranking","cross-encoder");c=@"
# Cross-Encoder Reranking

## Overview
Cross-encoders jointly encode query-document pairs for more accurate relevance scoring, used as a reranking stage after initial retrieval.

## Architecture Difference
``````
Bi-Encoder:   Query → Enc → Vec ┐
                                 ├→ Similarity
              Doc → Enc → Vec ──┘

Cross-Encoder: [Query; Doc] → Enc → Relevance Score
``````

## Key Models
- **ms-marco-MiniLM-L-6-v2**: Fast, good quality
- **ms-marco-MiniLM-L-12-v2**: Better quality, slower
- **BGE-Reranker-v2**: State-of-the-art open source
- **Cohere Rerank v3**: Best commercial option
- **Jina Reranker**: Multilingual support

## Implementation
``````python
from sentence_transformers import CrossEncoder

model = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')

query = 'How to implement RAG?'
docs = ['RAG combines retrieval...', 'Python is a language...']

scores = model.predict([(query, doc) for doc in docs])
ranked = sorted(zip(docs, scores), key=lambda x: -x[1])
``````

## Best Practices
1. Retrieve top-100 with bi-encoder, rerank to top-10
2. Batch predictions for efficiency
3. Fine-tune on domain-specific relevance judgments
4. Set a minimum score threshold to filter irrelevant results

## Performance Considerations
- Cross-encoders are O(N) per query (vs O(1) for bi-encoder)
- Limit reranking candidates to top-50-100
- Use GPU acceleration for batch processing
- Consider distilled models for latency-sensitive applications
"@}
)

foreach ($t in $ragTopics) {
    Write-Skill -Dir $ragRetDir -Name $t.n -Content $t.c -Tags $t.t
}

# Generate RAG retrieval variations
$ragVariationTopics = @(
    "Prompt Engineering for RAG Systems","Context Window Optimization in RAG",
    "Chunk Size Optimization Strategies","Chunk Overlap Best Practices",
    "Document Preprocessing for RAG","PDF Parsing for RAG Pipelines",
    "HTML Content Extraction for RAG","Markdown Document Chunking",
    "Code File Chunking Strategies","Table Data Chunking Methods",
    "Multi-Modal Document Chunking","Recursive Text Splitting",
    "Semantic Chunking with Embeddings","Token-Aware Chunking",
    "Parent-Child Document Relationships","Document Hierarchy in RAG",
    "Metadata Enrichment for Chunks","Source Attribution in RAG",
    "Citation Generation from RAG","Query Decomposition for RAG",
    "Multi-Query RAG Strategies","Step-Back Prompting in RAG",
    "HyDE - Hypothetical Document Embeddings","Query Expansion Techniques",
    "Query Rewriting for Better Retrieval","Contextual Compression in RAG",
    "Lost in the Middle Problem","Context Reordering Strategies",
    "RAG Evaluation Metrics - Faithfulness","RAG Evaluation - Answer Relevancy",
    "RAG Evaluation - Context Precision","RAG Evaluation - Context Recall",
    "RAGAS Framework for RAG Evaluation","DeepEval for RAG Testing",
    "TruLens for RAG Observability","RAG Triad Evaluation",
    "Retrieval Precision Optimization","Retrieval Recall Optimization",
    "End-to-End RAG Pipeline Design","RAG with Structured Data",
    "RAG with SQL Databases","RAG with Knowledge Graphs",
    "GraphRAG Implementation","Multi-Hop RAG Retrieval",
    "Iterative RAG Retrieval","Self-RAG Architecture",
    "Corrective RAG (CRAG)","Adaptive RAG Strategies",
    "RAG Fusion Technique","RAG with Tool Use",
    "Agentic RAG Patterns","RAG for Code Generation",
    "RAG for Documentation Q&A","RAG for Customer Support",
    "RAG for Legal Document Analysis","RAG for Medical Literature",
    "RAG for Financial Reports","RAG for Scientific Papers",
    "RAG Latency Optimization","RAG Caching Strategies",
    "Embedding Cache Design","Result Cache for RAG",
    "Streaming RAG Responses","RAG with Conversation History",
    "Multi-Turn RAG Conversations","RAG Context Window Management",
    "RAG Token Budget Allocation","RAG Error Handling Patterns",
    "RAG Fallback Strategies","RAG Quality Monitoring",
    "RAG A/B Testing","RAG Production Deployment",
    "RAG Scaling Strategies","RAG with Multiple Data Sources",
    "Cross-Collection RAG Search","Federated RAG Architecture",
    "RAG Data Ingestion Pipeline","RAG Index Maintenance",
    "RAG Index Versioning","RAG Index Backup Strategies",
    "RAG Security Considerations","RAG Access Control",
    "RAG Data Privacy GDPR","RAG Audit Logging",
    "RAG Cost Optimization","RAG Infrastructure Planning",
    "Serverless RAG Architecture","RAG on Kubernetes",
    "RAG with LangChain","RAG with LlamaIndex",
    "RAG with Haystack","RAG with Semantic Kernel",
    "RAG with Vercel AI SDK","RAG with Spring AI",
    "Fine-Tuning Embeddings for RAG","Domain-Specific Embedding Training",
    "Matryoshka Embeddings for RAG","Binary Embeddings for Efficiency",
    "Embedding Quantization Techniques","Embedding Dimension Selection",
    "Multi-Vector Retrieval (ColBERT)","Late Interaction Models",
    "Passage vs Document Level Retrieval","Sentence Window Retrieval",
    "Auto-Merging Retrieval","Small-to-Big Retrieval Strategy",
    "Forward-Looking Active RAG (FLARE)","Interleaved RAG Generation",
    "RAG with Reranking Pipeline","Two-Stage Retrieval Architecture",
    "Three-Stage Retrieval Pipeline","Ensemble Retrieval Methods",
    "RAG Debugging Techniques","RAG Prompt Templates Library",
    "System Prompts for RAG","Few-Shot Examples in RAG Prompts",
    "RAG Output Formatting","RAG JSON Output Parsing",
    "RAG with Citations Format","RAG Confidence Scoring",
    "RAG Hallucination Detection","RAG Contradiction Detection",
    "RAG Source Verification","RAG Answer Grounding",
    "RAG Knowledge Conflict Resolution","RAG Temporal Awareness",
    "RAG with Real-Time Data","RAG with Web Search Augmentation",
    "RAG Index Compression","RAG Memory Optimization",
    "RAG GPU Acceleration","RAG Batch Processing",
    "RAG Async Processing Patterns","RAG Queue Architecture",
    "RAG Webhook Integration","RAG API Design Patterns",
    "RAG REST API Best Practices","RAG GraphQL Integration",
    "RAG gRPC Service Design","RAG WebSocket Streaming"
)

foreach ($topic in $ragVariationTopics) {
    $slug = ($topic -replace '[^\w\s-]','' -replace '\s+','-').ToLower()
    $content = @"
# $topic

## Overview
This skill covers the implementation and best practices for $topic within Retrieval-Augmented Generation (RAG) systems designed to enhance Gemma 4's knowledge capabilities.

## Key Concepts

### Core Principles
- Understanding the fundamental mechanics of $topic
- Integration patterns with existing RAG pipelines
- Performance considerations and trade-offs
- Scalability implications for production systems

### Technical Details
$topic is a critical component in modern RAG architectures. It addresses the challenge of providing accurate, contextually relevant information to language models during inference.

**Primary Benefits:**
1. Improved retrieval accuracy and relevance
2. Reduced hallucination through better grounding
3. Enhanced user experience with faster responses
4. Better resource utilization and cost efficiency

### Architecture Patterns
``````
Input Query
    ↓
[Preprocessing] → Query Analysis → Intent Detection
    ↓
[Retrieval Stage] → $topic Pipeline
    ↓
[Post-Processing] → Ranking → Filtering → Dedup
    ↓
[Generation] → Context Assembly → LLM Response
``````

## Implementation Guide

### Step 1: Setup
Configure the base infrastructure for $topic:
``````python
class ${slug}Pipeline:
    def __init__(self, config):
        self.config = config
        self.initialize_components()
    
    def initialize_components(self):
        # Initialize retrieval components
        self.retriever = self.config.get_retriever()
        self.processor = self.config.get_processor()
    
    def execute(self, query: str) -> list:
        # Execute the $topic pipeline
        raw_results = self.retriever.search(query)
        processed = self.processor.refine(raw_results)
        return self.rank_results(processed)
``````

### Step 2: Configuration
Key configuration parameters:
- **top_k**: Number of results to retrieve (default: 10)
- **similarity_threshold**: Minimum relevance score (default: 0.7)
- **chunk_size**: Document chunk size in tokens (default: 512)
- **overlap**: Chunk overlap percentage (default: 10%)

### Step 3: Integration
Integrate with the RAG pipeline and LLM inference.

## Best Practices
1. Always validate retrieval quality with evaluation metrics
2. Implement monitoring and logging for production systems
3. Use A/B testing to compare different configurations
4. Cache frequent queries for performance optimization
5. Handle edge cases: empty results, timeout, rate limits

## Common Pitfalls
- Over-relying on default configurations without tuning
- Ignoring evaluation metrics during development
- Not accounting for data drift in production
- Insufficient error handling and fallback mechanisms

## Tools & Libraries
- LangChain, LlamaIndex, Haystack
- FAISS, ChromaDB, Pinecone, Weaviate
- sentence-transformers, OpenAI Embeddings
- RAGAS, DeepEval for evaluation

## Further Reading
- Research papers on $topic
- Official documentation for related frameworks
- Community best practices and case studies
"@
    Write-Skill -Dir $ragRetDir -Name $topic -Content $content -Tags @("rag","retrieval",$slug)
}

Write-Host "RAG Retrieval skills: $count" -ForegroundColor Green

# --- Embedding Models ---
$embDir = "$base\skills\memory\rag\embedding-models\generated"
$embModels = @(
    "OpenAI text-embedding-3-small","OpenAI text-embedding-3-large","OpenAI text-embedding-ada-002",
    "Cohere Embed v3 English","Cohere Embed v3 Multilingual","Sentence-BERT All-MiniLM-L6-v2",
    "Sentence-BERT All-mpnet-base-v2","BGE-Small-en-v1.5","BGE-Base-en-v1.5","BGE-Large-en-v1.5",
    "BGE-M3 Multilingual","Jina Embeddings v2","Jina Embeddings v3","E5-Small-v2","E5-Base-v2",
    "E5-Large-v2","E5-Mistral-7B-Instruct","GTE-Small","GTE-Base","GTE-Large","GTE-Qwen2-7B",
    "Nomic Embed Text v1.5","Nomic Embed Text v2","Voyage AI voyage-2","Voyage AI voyage-large-2",
    "Instructor Embeddings","UAE-Large-V1","mxbai-embed-large","Snowflake Arctic Embed",
    "Alibaba NLP GTE Multilingual","Google Gecko Embedding","Mistral Embed",
    "BAAI bge-reranker-v2","Cohere Rerank v3","Jina Reranker v2","Mixedbread mxbai-rerank",
    "Flag Embedding Reranker","Cross-Encoder ms-marco-MiniLM-L6","Cross-Encoder ms-marco-MiniLM-L12",
    "ColBERT v2","ColBERTv2 PLAID","SPLADE v2","SPLADE++ Ensemble","BM25 with Pyserini",
    "TF-IDF Vectorization","Word2Vec Embeddings","GloVe Embeddings","FastText Embeddings",
    "Universal Sentence Encoder","InferSent Embeddings","Doc2Vec Paragraph Vectors",
    "Matryoshka Representation Learning","Binary Quantized Embeddings","Product Quantization for Embeddings",
    "Scalar Quantization for Embeddings","Embedding Dimension Reduction PCA","Embedding UMAP Visualization",
    "Embedding t-SNE Analysis","Fine-Tuning Embeddings with Triplet Loss","Fine-Tuning with Contrastive Loss",
    "Hard Negative Mining for Embeddings","In-Batch Negatives Training","Knowledge Distillation for Embeddings",
    "Multi-Task Embedding Training","Instruction-Tuned Embeddings","Asymmetric Embedding Models",
    "Symmetric Embedding Models","Code Embedding Models","Image-Text Joint Embeddings",
    "Embedding Benchmarks MTEB","Embedding Evaluation Strategies","Embedding Similarity Metrics Comparison",
    "Embedding Caching Strategies","Embedding Batch Processing","Embedding API Rate Limiting",
    "Embedding Cost Optimization","Embedding Model Selection Guide","Embedding Versioning Strategy",
    "Embedding Migration Between Models","Multi-Embedding Ensemble Methods","Embedding Normalization Techniques",
    "Embedding Space Alignment","Cross-Lingual Embedding Alignment","Zero-Shot Embedding Transfer"
)

foreach ($model in $embModels) {
    $content = @"
# $model

## Overview
Comprehensive guide to using $model for embedding generation in RAG systems. This covers architecture, performance characteristics, and integration patterns.

## Model Specifications
- **Architecture**: Transformer-based embedding model
- **Use Case**: Semantic search, RAG, clustering, classification
- **Strengths**: Optimized for the specific embedding task

## Integration Guide
``````python
# Example integration
from embedding_provider import EmbeddingModel

model = EmbeddingModel('$model')
embeddings = model.encode(['Hello world', 'Semantic search example'])
similarity = model.similarity(embeddings[0], embeddings[1])
print(f'Similarity: {similarity:.4f}')
``````

## Performance Benchmarks
- MTEB Average Score comparison
- Retrieval quality on MS MARCO
- Semantic textual similarity performance
- Classification and clustering benchmarks

## Best Practices
1. Choose embedding dimension based on quality vs speed tradeoff
2. Pre-normalize vectors for faster cosine similarity
3. Use batch encoding for large document collections
4. Consider quantization for memory-constrained deployments
5. Evaluate on domain-specific data before production

## Integration with Vector Databases
Compatible with: Pinecone, Weaviate, ChromaDB, Qdrant, Milvus, pgvector, Elasticsearch

## Cost Considerations
- API pricing vs self-hosted options
- Batch vs real-time encoding costs
- Storage requirements per dimension
"@
    Write-Skill -Dir $embDir -Name $model -Content $content -Tags @("rag","embeddings",$model.ToLower())
}

Write-Host "Embedding models skills: $count" -ForegroundColor Green

# --- Vector Databases ---
$vdbDir = "$base\skills\memory\rag\vector-databases\generated"
$vdbTopics = @(
    "Pinecone Serverless Architecture","Pinecone Pod-Based Deployment","Pinecone Namespace Management",
    "Pinecone Metadata Filtering","Pinecone Hybrid Search Setup","Pinecone Cost Optimization",
    "Pinecone Python Client Guide","Pinecone Node.js Client Guide","Pinecone Batch Upsert Patterns",
    "Pinecone Index Configuration","Weaviate Schema Design","Weaviate GraphQL Queries",
    "Weaviate Vectorizer Modules","Weaviate Hybrid Search","Weaviate Multi-Tenancy",
    "Weaviate Docker Deployment","Weaviate Kubernetes Deployment","Weaviate Backup Restore",
    "Weaviate Cross-References","Weaviate Generative Search","ChromaDB Local Setup",
    "ChromaDB Persistent Storage","ChromaDB Collection Management","ChromaDB Metadata Filtering",
    "ChromaDB Embedding Functions","ChromaDB Docker Deployment","ChromaDB Python Integration",
    "ChromaDB JavaScript Integration","ChromaDB Distance Metrics","ChromaDB Performance Tuning",
    "Qdrant Collection Configuration","Qdrant Payload Filtering","Qdrant Quantization Setup",
    "Qdrant Distributed Deployment","Qdrant Snapshot Management","Qdrant REST API Guide",
    "Qdrant gRPC Client","Qdrant Sparse Vectors","Qdrant Multi-Vector Search",
    "Qdrant Recommendation API","Milvus Architecture Deep Dive","Milvus Collection Schema",
    "Milvus Partition Management","Milvus Index Types IVF HNSW","Milvus Consistency Levels",
    "Milvus PyMilvus Client","Milvus Attu GUI Management","Milvus Kubernetes Operator",
    "Milvus Performance Tuning","Milvus Backup Recovery","Elasticsearch Vector Search",
    "Elasticsearch kNN Search","Elasticsearch Dense Vector Field","Elasticsearch Hybrid Search",
    "Elasticsearch ELSER Sparse Vectors","Redis Vector Similarity Search","Redis Stack Vector Setup",
    "pgvector PostgreSQL Extension","pgvector Index Types","pgvector Performance Optimization",
    "Supabase pgvector Integration","Neon pgvector Serverless","LanceDB Embedded Vector DB",
    "LanceDB Lance Format","LanceDB Python Integration","Zilliz Cloud Managed Milvus",
    "Zilliz Serverless Clusters","MongoDB Atlas Vector Search","MongoDB Vector Index Creation",
    "OpenSearch Vector Search","OpenSearch Neural Search Plugin","Vespa Vector Search",
    "Vespa Hybrid Search","Marqo Multimodal Search","Deep Lake Vector Store",
    "Vald Distributed Vector Search","Typesense Vector Search","Turbopuffer Serverless Vectors",
    "Vector DB Comparison Matrix","Vector DB Selection Guide","Vector DB Migration Strategies",
    "Vector DB Monitoring Best Practices","Vector DB Scaling Patterns","Vector DB Security Hardening",
    "Vector DB Backup Strategies","Vector DB Cost Analysis","HNSW Index Algorithm Deep Dive",
    "IVF Index Algorithm Explained","Product Quantization for Vector DBs","Scalar Quantization Tradeoffs",
    "Binary Quantization Methods","Flat Index vs Approximate","Index Build vs Query Tradeoffs",
    "Multi-Index Search Strategies","Filtered Vector Search Optimization","Geo-Spatial Vector Search"
)

foreach ($topic in $vdbTopics) {
    $content = @"
# $topic

## Overview
Technical guide covering $topic for building production-grade RAG systems with vector database infrastructure.

## Key Concepts

### Architecture
$topic represents a critical capability in modern vector database deployments. Understanding this topic is essential for building scalable, performant RAG systems.

### Configuration
``````yaml
# Example configuration for $topic
vector_db:
  type: configured
  settings:
    metric: cosine
    dimensions: 1536
    replicas: 2
    shards: 4
``````

### Implementation
``````python
# $topic implementation pattern
class VectorDBManager:
    def __init__(self, config):
        self.client = self._connect(config)
        self.collection = self._get_or_create_collection()
    
    def upsert(self, vectors, metadata):
        return self.collection.upsert(
            vectors=vectors,
            metadata=metadata,
            batch_size=100
        )
    
    def search(self, query_vector, top_k=10, filters=None):
        return self.collection.query(
            vector=query_vector,
            limit=top_k,
            filter=filters
        )
``````

## Performance Optimization
1. Choose appropriate index type for your workload
2. Tune index parameters for quality vs speed tradeoff
3. Use metadata filtering to reduce search space
4. Implement connection pooling for concurrent access
5. Monitor query latency and resource utilization

## Best Practices
- Design schema for your query patterns
- Implement proper error handling and retries
- Use batch operations for bulk ingestion
- Set up monitoring and alerting
- Plan for data growth and scaling

## Common Pitfalls
- Over-provisioning resources without load testing
- Not accounting for index build time
- Ignoring metadata index design
- Missing backup and disaster recovery planning
"@
    Write-Skill -Dir $vdbDir -Name $topic -Content $content -Tags @("rag","vector-db")
}

Write-Host "Vector DB skills: $count" -ForegroundColor Green

# --- RAG Frameworks ---
$fwDir = "$base\skills\memory\rag\rag-frameworks\generated"
$fwTopics = @(
    "LangChain RAG Complete Guide","LangChain Document Loaders","LangChain Text Splitters",
    "LangChain Retrievers Customization","LangChain ConversationalRetrievalChain",
    "LangChain LCEL RAG Pipeline","LangChain Output Parsers for RAG",
    "LangChain Memory with RAG","LangChain Callbacks and Tracing",
    "LangChain Hub Prompt Templates","LlamaIndex Complete RAG Guide",
    "LlamaIndex Data Connectors","LlamaIndex Node Parsers","LlamaIndex Index Types",
    "LlamaIndex Query Engine","LlamaIndex Chat Engine","LlamaIndex Agents with RAG",
    "LlamaIndex Evaluation Module","LlamaIndex Observability","LlamaIndex Managed Index",
    "Haystack RAG Pipeline","Haystack Components","Haystack Document Stores",
    "Haystack Retrievers","Haystack Generators","Haystack Pipeline Builder",
    "Haystack Evaluation Framework","Semantic Kernel RAG","Semantic Kernel Memory",
    "Semantic Kernel Plugins for RAG","Vercel AI SDK RAG","Vercel AI SDK Streaming RAG",
    "Spring AI RAG Integration","Spring AI Vector Store","DSPy RAG Optimization",
    "DSPy Compile for RAG","RAGAS Evaluation Framework","RAGAS Metrics Deep Dive",
    "RAGAS Test Set Generation","DeepEval RAG Metrics","DeepEval Custom Metrics",
    "TruLens Observability","TruLens Feedback Functions","Phoenix Arize Observability",
    "LangSmith Tracing for RAG","Weights & Biases RAG Tracking","MLflow RAG Experiment Tracking",
    "Instructor Structured Output","Guardrails AI for RAG","NeMo Guardrails RAG",
    "Guidance Library for RAG","Outlines Structured Generation","Marvin AI RAG Functions",
    "AutoRAG Framework","RAGAs Synthetic Data Generation","Embedchain RAG Framework",
    "Canopy RAG Framework by Pinecone","txtai RAG Pipeline","FlashRAG Framework",
    "FastRAG by Intel","Ragflow RAG Engine","Kotaemon RAG UI",
    "PrivateGPT Local RAG","LocalAI RAG Stack","Ollama RAG Integration",
    "vLLM RAG Serving","TGI RAG Integration","RAG with Gradio UI",
    "RAG with Streamlit UI","RAG with Chainlit UI","RAG with Next.js Frontend",
    "RAG with FastAPI Backend","RAG with Flask Backend","RAG with Express.js Backend",
    "RAG Microservices Architecture","RAG Event-Driven Architecture","RAG CQRS Pattern"
)

foreach ($topic in $fwTopics) {
    $content = @"
# $topic

## Overview
In-depth guide to $topic for building production-ready RAG applications that enhance Gemma 4's retrieval capabilities.

## Architecture
``````
User Query → Preprocessing → Retrieval → Reranking → Context Assembly → LLM Generation → Response
``````

## Implementation
``````python
# $topic - Core Implementation
class RAGPipeline:
    def __init__(self):
        self.retriever = self.setup_retriever()
        self.generator = self.setup_generator()
    
    async def query(self, user_input: str) -> str:
        # Retrieve relevant documents
        docs = await self.retriever.search(user_input, top_k=5)
        
        # Build context from retrieved documents
        context = self.build_context(docs)
        
        # Generate response with context
        response = await self.generator.generate(
            query=user_input,
            context=context,
            system_prompt=self.system_prompt
        )
        
        return response
``````

## Configuration
- Retrieval parameters: top_k, similarity threshold, chunk size
- Generation parameters: temperature, max tokens, system prompt
- Pipeline parameters: caching, logging, error handling

## Best Practices
1. Start simple, add complexity incrementally
2. Evaluate at each stage of the pipeline
3. Use proper error handling and fallbacks
4. Implement observability from the start
5. Version your prompts and configurations

## Integration Points
- Vector databases for storage
- Embedding models for vectorization
- LLM APIs for generation
- Evaluation frameworks for quality assurance
"@
    Write-Skill -Dir $fwDir -Name $topic -Content $content -Tags @("rag","frameworks")
}

Write-Host "RAG Framework skills: $count" -ForegroundColor Green

# --- Prompt Templates ---
$ptDir = "$base\skills\memory\rag\prompt-templates\generated"
$ptTopics = @(
    "Basic QA RAG Prompt Template","Conversational RAG Prompt Template",
    "Multi-Document RAG Prompt Template","Summarization RAG Prompt Template",
    "Fact-Checking RAG Prompt Template","Comparative Analysis RAG Prompt",
    "Step-by-Step RAG Prompt Template","Code Explanation RAG Prompt",
    "Legal Document RAG Prompt","Medical QA RAG Prompt Template",
    "Financial Analysis RAG Prompt","Scientific Paper RAG Prompt",
    "Customer Support RAG Prompt","Product Documentation RAG Prompt",
    "Technical Troubleshooting RAG Prompt","Multi-Turn Conversation RAG Prompt",
    "Citation-Rich RAG Prompt Template","Confidence-Scored RAG Prompt",
    "Structured Output RAG Prompt","JSON Response RAG Prompt Template",
    "Table Extraction RAG Prompt","Timeline Generation RAG Prompt",
    "Pro-Con Analysis RAG Prompt","Executive Summary RAG Prompt",
    "Action Items Extraction RAG Prompt","Meeting Notes RAG Prompt",
    "Contract Review RAG Prompt","Compliance Check RAG Prompt",
    "Data Analysis RAG Prompt","Report Generation RAG Prompt"
)

foreach ($topic in $ptTopics) {
    $content = @"
# $topic

## Overview
Optimized prompt template for $topic in RAG-augmented language model applications.

## Template
``````
You are a helpful assistant with access to a knowledge base. Use the following retrieved context to answer the user's question accurately.

CONTEXT:
{context}

INSTRUCTIONS:
- Answer based ONLY on the provided context
- If the context doesn't contain enough information, say so clearly
- Cite specific sources when possible
- Be concise but thorough

USER QUESTION: {question}

ANSWER:
``````

## Variables
- ``context``: Retrieved documents from vector database
- ``question``: User's input query
- ``history``: (Optional) Conversation history for multi-turn

## Variations
### Strict Mode (No Hallucination)
``````
Answer STRICTLY from the context provided. If the answer is not in the context, respond with "I don't have enough information to answer this question based on the available documents."
``````

### Creative Mode (Synthesis)
``````
Use the context as a foundation, but you may synthesize information and draw reasonable inferences. Clearly distinguish between stated facts and your inferences.
``````

## Best Practices
1. Always include grounding instructions
2. Specify output format explicitly
3. Include few-shot examples for complex tasks
4. Set clear boundaries for hallucination prevention
5. Test with edge cases: no context, contradictory context, partial context
"@
    Write-Skill -Dir $ptDir -Name $topic -Content $content -Tags @("rag","prompts","templates")
}

Write-Host "Prompt Template skills: $count" -ForegroundColor Green

# --- Hallucination Control ---
$hcDir = "$base\skills\memory\rag\hallucination-control\generated"
$hcTopics = @(
    "Fact Verification Techniques in RAG","Contradiction Detection Methods",
    "Source Attribution and Citation","Uncertainty Quantification in LLM Output",
    "Grounding Strategies for Factual Accuracy","Confidence Calibration Methods",
    "Claim Decomposition for Verification","Multi-Source Fact Checking",
    "Temporal Fact Verification","Numerical Data Verification",
    "Entity Consistency Checking","Logical Consistency Validation",
    "Hallucination Detection Classifiers","Post-Generation Fact Checking",
    "Real-Time Hallucination Monitoring","Hallucination Benchmarks and Metrics",
    "TruthfulQA Evaluation Guide","FActScore Implementation",
    "SAFE Evaluation Framework","SelfCheckGPT Method",
    "Chain-of-Verification (CoVe)","Knowledge-Grounded Generation",
    "Retrieval-Grounded Fact Checking","LLM-as-Judge for Hallucination",
    "Human-in-the-Loop Verification","Automated Fact Extraction",
    "Knowledge Graph Grounding","Wikipedia-Based Verification",
    "Academic Source Verification","News Source Credibility Assessment",
    "Statistical Claim Verification","Quote Verification Techniques",
    "Historical Fact Checking","Scientific Claim Verification",
    "Legal Citation Verification","Medical Claim Safety Check",
    "Cross-Reference Verification","Consensus-Based Verification",
    "Provenance Tracking in RAG","Audit Trail for Generated Content"
)

foreach ($topic in $hcTopics) {
    $content = @"
# $topic

## Overview
$topic is essential for building trustworthy RAG systems that minimize hallucination and maximize factual accuracy in Gemma 4's outputs.

## Problem Statement
Language models can generate plausible-sounding but factually incorrect content. This skill addresses how to detect, prevent, and mitigate hallucinations using $topic.

## Methodology

### Detection Phase
``````python
class HallucinationDetector:
    def __init__(self, sources):
        self.sources = sources
        self.verifier = FactVerifier()
    
    def check(self, generated_text, context):
        claims = self.extract_claims(generated_text)
        results = []
        for claim in claims:
            verification = self.verifier.verify(claim, context)
            results.append({
                'claim': claim,
                'supported': verification.is_supported,
                'confidence': verification.confidence,
                'sources': verification.sources
            })
        return results
``````

### Prevention Phase
1. Constrain generation to retrieved context
2. Use structured output formats
3. Implement confidence thresholds
4. Add explicit uncertainty markers
5. Use chain-of-thought for verifiable reasoning

### Mitigation Phase
- Post-generation validation pipeline
- Automated correction mechanisms
- Human review triggers for low-confidence outputs
- Feedback loops for continuous improvement

## Best Practices
1. Always ground responses in retrieved evidence
2. Express uncertainty when evidence is insufficient
3. Provide source citations for verifiable claims
4. Use multiple verification methods
5. Monitor hallucination rates in production

## Evaluation Metrics
- Factual Consistency Score
- Hallucination Rate
- Source Attribution Accuracy
- Claim Support Ratio
"@
    Write-Skill -Dir $hcDir -Name $topic -Content $content -Tags @("rag","hallucination","fact-checking")
}

Write-Host "Hallucination Control skills: $count" -ForegroundColor Green
Write-Host "`nTOTAL RAG SKILLS GENERATED: $count" -ForegroundColor Yellow
