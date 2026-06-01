# Automated Order Confirmation AI Agent

## Overview

Automated Order Confirmation AI Agent is a SaaS platform designed to reduce fake orders, return-to-origin (RTO) costs, and manual verification efforts by automatically calling customers after an order is placed.

The platform receives an order, initiates an automated voice call, and updates the order status based on the customer's response.

### Example Call Flow

> Hello, this is an automated order confirmation call.

> To confirm your order, press 1.

> To cancel your order, press 2.

Based on the customer's selection:

- Press 1 → Order Confirmed
- Press 2 → Order Cancelled
- No Response → Retry Logic

---

## Goals

### MVP Goals

- Create orders manually
- View order list
- Store orders in PostgreSQL
- Trigger automated calls
- Capture customer confirmation
- Automatically update order status

### Future Goals

- Conversational AI Voice Agent
- Shopify Integration
- WooCommerce Integration
- WhatsApp Confirmation
- SMS Fallback
- Multi-tenant SaaS
- Analytics Dashboard
- Fraud Detection

---

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM

### Backend

- Python
- FastAPI
- Twilio Voice API
- OpenAI (Future)

### Database

- PostgreSQL

---

## Project Structure

text ai-order-confirmation/ ├── frontend/ │ ├── app/ │ ├── components/ │ ├── lib/ │ ├── prisma/ │ └── package.json │ ├── backend/ │ ├── app/ │ │ ├── api/ │ │ ├── services/ │ │ ├── workers/ │ │ └── main.py │ │ │ ├── requirements.txt │ └── .env │ ├── docker-compose.yml ├── README.md └── .gitignore

---

## Architecture

text Customer │ ▼ Order Created │ ▼ Next.js Application │ ▼ PostgreSQL │ ▼ Call Trigger │ ▼ FastAPI Service │ ▼ Twilio Voice API │ ▼ Customer Receives Call │ ├── Press 1 │ ▼ │ Confirm Order │ └── Press 2 ▼ Cancel Order

---

## Order Status Flow

text PENDING │ ▼ CALLING │ ├── CONFIRMED │ ├── CANCELLED │ └── FAILED

---

## Database Schema (Initial)

### Order

| Field        | Type     |
| ------------ | -------- |
| id           | Integer  |
| customerName | String   |
| phone        | String   |
| product      | String   |
| amount       | Float    |
| status       | String   |
| createdAt    | DateTime |
| updatedAt    | DateTime |

---

## Development Roadmap

### Phase 1

Project Foundation

- [ ] Next.js Setup
- [ ] Prisma Setup
- [ ] PostgreSQL Setup
- [ ] Order Model

### Phase 2

Order Management

- [ ] Create Order Page
- [ ] Order List Page
- [ ] API Endpoints

### Phase 3

Voice Confirmation

- [ ] Twilio Integration
- [ ] Outbound Calls
- [ ] DTMF Input Handling
- [ ] Confirmation Workflow

### Phase 4

Automation

- [ ] Retry Logic
- [ ] Call Logs
- [ ] Status Updates

### Phase 5

AI Agent

- [ ] Conversational Confirmation
- [ ] Intent Detection
- [ ] Multi-language Support

---

## Current Progress

### Completed

- [x] FastAPI Backend Initialized
- [x] Python Virtual Environment Created
- [x] Basic Health Check Endpoint Running

### In Progress

- [ ] PostgreSQL Installation
- [ ] Prisma Initialization
- [ ] Order Database Schema

---

## Vision

Build a scalable AI-powered order verification platform for e-commerce businesses that automates customer confirmation, reduces operational costs, and improves order quality through voice-based verification workflows.
