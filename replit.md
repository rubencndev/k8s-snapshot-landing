# K8s Snapshot Landing Page

## Overview

This is a React-based landing page for "K8s Snapshot," a Kubernetes diagnostic and optimization service targeting SMEs running 50-500 node clusters on AWS, GCP, or Azure. The application is built as a full-stack TypeScript project with a React frontend, Express backend, and PostgreSQL database integration using Drizzle ORM. The landing page follows direct-response marketing principles with multiple CTAs, clear value propositions, and strong risk reversal messaging focused on cost reduction, security improvements, and performance optimization for Kubernetes deployments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a Vite-powered SPA
- **UI Framework**: Shadcn/UI components built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with custom CSS variables for theming, professional CloudNative blue (#0B5D94) primary color scheme
- **Build System**: Vite with hot module replacement and development error overlay

### Backend Architecture
- **Runtime**: Node.js with Express.js REST API server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under `/api` prefix with JSON request/response format
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **Request Logging**: Custom middleware for API request/response logging and timing

### Data Storage
- **Primary Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL via @neondatabase/serverless
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Fallback**: MemStorage class for development/testing without database

### Authentication & Session Management
- **Session Store**: PostgreSQL-backed sessions for persistent user state
- **Database Schema**: User table with id, username, and password fields
- **Type Safety**: Zod schemas for runtime validation of user inputs

### External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **UI Components**: Radix UI for accessible, unstyled component primitives
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for professional typography
- **Date Handling**: date-fns for date manipulation and formatting
- **Form Management**: React Hook Form with Hookform resolvers for validation
- **Development Tools**: Replit-specific tooling for cloud development environment

The application structure separates concerns with a `client/` directory for React frontend code, `server/` directory for Express backend, and `shared/` directory for common TypeScript types and schemas. The landing page is designed to convert visitors into leads through strategic placement of booking CTAs and sample report downloads, with placeholder implementations ready for integration with actual booking and lead generation systems.