# Layered Front-end Architecture

Implementation example of the layered architecture for front-end project.

### Layers

- Entity
- Application
- Presentation
- Infrastructure

### Layers dependency flow

Presentation -> Application -> Entity <- Infrastructure

### Layers description

#### 1. Entity

The entity layer, also known as the domain layer, represents the application's domain-specific entities and business rules. It encapsulates the core data structures and operations that are fundamental to the application's domain. In a React app, this layer could include classes or functions that define entities and their related behaviors, like User, Product, or Order.

#### 2. Application

The application layer houses the business logic and serves as an intermediary between the presentation and entity layer. It contains the application's core functionality and specific use-cases, such as data processing, validation, and business rules. This layer interacts with the presentation layer to receive user inputs and data, processes them using the business logic. Other things that you should put in the application layer:

- Custom hook for specific use-cases.
- Utility functions.
- Global storage setup such as Redux, Mobx.
- Side effects like async thunks, redux-saga etc.

#### 3. Presentation

The presentation layer is the user interface (UI) part. It consists of components, which are responsible for rendering the user interface and handling user interactions. The primary goal of this layer is to present data to the users and collect their inputs. The presentation layer should not contain business logic; instead, it delegates tasks to the application layer for processing.
Other things that you should put in the presentation layer:

- Routing setup.
- Internationalization.

#### 4. Infrastructure

The infrastructure layer deals with external services, data storage, and network communication. This includes APIs, databases, or any external resources that the application needs to interact with. Components in the application layer communicate with the infrastructure layer to fetch data from APIs, save data to databases, or perform other external operations. Other things that you should put in the infrastructure layer:

- API clients or wrappers that encapsulate the logic for making API requests and handling responses.
- Implementations for handling user authentication and authorization, including integration with authentication providers like OAuth, JWT (JSON Web Tokens), etc.
- Code for managing network communication, handling requests, and managing responses, handling network errors and retries.
- Implementations for caching mechanisms to improve performance.
- Code to manage application configuration and environment variables, making it easier to adapt the application to different environments (e.g., development, staging, production).
- Implementations for collecting application usage data, error tracking, and performance monitoring.

## Bootstraping project

1. `pnpm install`
2. `cd server && pnpm start`
3. `pnpm dev`
