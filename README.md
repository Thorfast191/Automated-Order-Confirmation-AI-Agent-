Automated Order Confirmation AI Agent

Overview

Automated Order Confirmation AI Agent is a SaaS platform designed to reduce fake orders, return-to-origin (RTO) costs, and manual verification efforts by automatically verifying customer orders after checkout.

The platform receives an order, stores it in a centralized database, triggers an AI-powered confirmation workflow, and updates order status based on customer actions.

The long-term vision is to provide e-commerce businesses with a fully automated order verification platform powered by voice AI.

⸻

Milestone 1 Complete

Milestone 1 focuses on building the core platform foundation and automation workflow before integrating real voice calling providers.

Completed Workflow

Create Order
↓
Store in Database
↓
Trigger AI Agent
↓
Process Order Action
↓
Update Database
↓
Live Dashboard Update

Current system supports:

- Order Creation
- Order Dashboard
- PostgreSQL Database
- Prisma ORM
- FastAPI Agent Layer
- Automated Agent Triggering
- Order Confirmation Workflow
- Order Cancellation Workflow
- Live Status Updates

⸻

Example Confirmation Flow

Order Created
↓
AI Agent Starts
↓
CALLING
↓
CONFIRMED

or

Order Created
↓
AI Agent Starts
↓
CALLING
↓
CANCELLED

⸻

Tech Stack

Frontend

- Next.js 16
- TypeScript
- Tailwind CSS
- Prisma ORM

Backend

- Python
- FastAPI
- Requests
- Agent Architecture

Database

- PostgreSQL
- Neon Database

⸻

Project Structure

ai-order-confirmation/
├── frontend/
│
│ ├── app/
│ │ ├── api/
│ │ ├── orders/
│ │ └── page.tsx
│ │
│ ├── lib/
│ │ └── prisma.ts
│ │
│ ├── prisma/
│ │ ├── schema.prisma
│ │ └── migrations/
│ │
│ └── package.json
│
├── backend/
│
│ ├── app/
│ │
│ ├── agents/
│ │ └── order_confirmation.py
│ │
│ ├── api/
│ │ └── call.py
│ │
│ ├── services/
│ │ └── voice_provider.py
│ │
│ └── main.py
│
│ ├── requirements.txt
│ └── .env
│
├── README.md
├── docker-compose.yml
└── .gitignore

⸻

Architecture

Customer
↓
Next.js Frontend
↓
Order API
↓
PostgreSQL (Neon)
↓
FastAPI Agent
↓
OrderConfirmationAgent
↓
VoiceProvider
↓
Order Status Update
↓
Dashboard Refresh

⸻

Database Schema

Order

Field Type
id Integer
customerName String
phone String
product String
amount Float
status String
callStatus String
createdAt DateTime
updatedAt DateTime

⸻

Order Status Lifecycle

Order Status

PENDING
CONFIRMED
CANCELLED

Call Status

NOT_CALLED
CALLING
COMPLETED
FAILED

⸻

Agent Architecture

OrderConfirmationAgent

Responsibilities:

- Start confirmation workflow
- Trigger voice provider
- Confirm order
- Cancel order
- Update order state

Methods

start(order)
confirm(order_id)
cancel(order_id)

⸻

API Endpoints

Frontend

Orders

GET /api/orders

Get all orders.

POST /api/orders

Create a new order.

PATCH /api/orders/{id}/status

Update order status.

⸻

Backend

Agent

POST /call

Start confirmation workflow.

POST /confirm/{order_id}

Confirm order.

POST /cancel/{order_id}

Cancel order.

⸻

Completed Features

Platform Foundation

- Next.js Application
- FastAPI Backend
- PostgreSQL Database
- Neon Database Integration
- Prisma ORM
- Database Migrations

Order Management

- Create Order Form
- Orders Dashboard
- Orders API
- Database Persistence

Agent System

- Agent Layer
- Voice Provider Abstraction
- Automatic Agent Triggering
- Confirm Workflow
- Cancel Workflow

Dashboard

- Live Status Updates
- Polling-based Refresh
- Call Status Tracking

⸻

Milestone 2

Real Voice Calling

Planned features:

- Twilio Integration
- Outbound Calls
- DTMF Input Detection
- Press 1 Confirmation
- Press 2 Cancellation
- Call Logs
- Retry Logic
- Failed Call Handling

⸻

Milestone 3

AI Voice Agent

Planned features:

- Conversational AI Calls
- OpenAI Integration
- Multi-language Support
- Intent Detection
- Smart Confirmation Flows

⸻

Future Roadmap

- Shopify Integration
- WooCommerce Integration
- WhatsApp Confirmation
- SMS Fallback
- Customer Analytics
- Fraud Detection
- Multi-Tenant SaaS
- Billing & Subscription System
- Admin Portal

⸻

Current Status

Project State

Milestone 1 Complete ✅

Working End-to-End Flow

Order Created
↓
Stored in Neon
↓
FastAPI Agent Triggered
↓
Agent Action Executed
↓
Order Updated
↓
Dashboard Updated

Next Objective

Implement real outbound calling using a telephony provider and complete the voice confirmation workflow.
