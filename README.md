# Layered Front-End Architecture

Implementation example of the layered architecture for front-end project.

### Layers

- Entity
- Application
- Presentation
- Infrastructure

### Layers dependency flow

Presentation -> Application -> Entity <- Infrastructure

### 1. Entity

Represents the application's domain-specific entities. It encapsulates the core data structures and operations that are fundamental to the application's domain. In a React app, this layer could include classes or functions that define entities and their related behaviors, like User, Product, or Order.

### 2. Application

The application layer houses the business logic and serves as an intermediary between the presentation and entity layer. It contains the application's core functionality and specific use-cases, such as data processing, validation, and business rules. This layer interacts with the presentation layer to receive user inputs and data, processes them using the business logic. Other things that you should put in the application layer:

- Custom hook for specific use-cases.
- Global storage setup such as Redux, Mobx.
- Side effects like async thunks, redux-saga etc.

### 3. Presentation

The presentation layer is the user interface (UI) part. It consists of components, which are responsible for rendering the user interface and handling user interactions. The primary goal of this layer is to present data to the users and collect their inputs. The presentation layer should not contain business logic; instead, it delegates tasks to the application layer for processing.
Other things that you should put in the presentation layer.

##### ./src/presentation/components

Basic building blocks for UI. Separated into 5 types by Atomic Design principle. Dependency flow:

pages -> templates -> organisms -> molecules -> atoms

1. `atoms` - 1-st type of reusable UI components

- Depend only on props;
- Controlled (in most cases. Try to always make them controlled);
- Cannot depend on other reusable atom components from the same level;

2. `molecules` - 2-nd type of reusable UI components

- Can have internal state;
- Can be composed from `atoms` only;
- Cannot depend on other reusable molecule components from the same level;

3. `organisms` - 3-d type of reusable UI components

- Can be independent from incoming props and do specific scope of work;
- Can be composed from `atoms` and `molecules`;
- Cannot depend on other reusable organism components from the same level;

4. `templates` - 4-th type of reusable UI components

- Can be composed from `atoms`, `molecules` or `organisms`;
- Cannot depend on other reusable template components from the same level;

5. `pages` - 5-th type of reusable UI components

- Can be composed from any entities from above;
- Main entry point for route views;
- Cannot depend on other reusable page components from the same level;

Each component from these layers can replicate the same layers logic if needed. For example, you can have page that will include its own `atoms` that will be used only in context of this page. In this case those atoms can import from `src/presentation/components/atoms` since the page itself is a higher abstraction over global reusable atoms. For example, check `presentation/components/pages/Books`. You can see the same layers implementation as inside `presentation/components`.

Give local feature components priority over global ones. It means that you need to develop a feature from perspective of isolation first and put each component in context of this feature. And only if feature components are needed globally - move them inside an appropriate folder of global components.

### 4. Infrastructure

The infrastructure layer deals with external services, data storage, and network communication. This includes APIs, databases, or any external resources that the application needs to interact with. Components in the application layer communicate with the infrastructure layer to fetch data from APIs, save data to databases, or perform other external operations. Other things that you should put in the infrastructure layer:

- API clients or wrappers that encapsulate the logic for making API requests and handling responses.
- Implementations for handling user authentication and authorization, including integration with authentication providers like OAuth, JWT (JSON Web Tokens), etc.
- Implementations for caching mechanisms to improve performance.
- Code to manage application configuration and environment variables, making it easier to adapt the application to different environments (e.g., development, staging, production).
- Implementations for collecting application usage data, error tracking, and performance monitoring.

## Bootstraping project

1. `pnpm install`
2. `cd server && pnpm start`
3. `pnpm dev`
