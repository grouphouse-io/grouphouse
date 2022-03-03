# Design Doc 1: Grouphouse Resources 

## Objectives 

1. Define main Grouphouse resource models. 
2. Define relationships between models. 
3. Draft database tables. 
4. Draft CRUD endpoints. 
5. Draft work sequence. 

## Grouphouse Resources 

- `Grouphouse`: A house with 0 or more users. (`Grouphouse`: N `User`)
- `User`: A user. A `User` can belong to multiple `Grouphouse`. (`User`: N `Grouphouse`)
- `Role`: Defines user permissions in a house. Maps to a `CapabilitySet` (`Role` : `CapabilitySet`). A `User` must have _one or more_ `Role` per `Grouphouse` (`User` : N `Role` : `Grouphouse`). The `User` will have the union of `CapabilitySet`. 
- `CapabilitySet`: Maps to a set (list) of `Capability` (`CapabilitySet` : N `Capability`). 
- `Capability`: Maps to some kind of defined permission: endpoints, feature flags, UI, applications etc. The intention of capabilities is to be widely extensible. A `Role` mapped to a `Capability` (via `CapabilitySet`) will be allowed. (`Capability` : N `CapabilitSet`)
- `Factor`: Maps to some kind of secret that anchors a person to a `User`. Types include `password`, `yubikey`, `mfa`, etc. 

// TODO: Find some kind of modeling language to write out these relationships -- UML?

## Resource Relations

- A `User` can belong to multiple `Grouphouses`. (`User`: N `Grouphouse`, )
- A `Grouphouse` must have zero or more `Users`. (`Grouphouse`: N `User`)
- A `Role` must map to `CapabilitySet`.
- A `CapabilitySet` must map to one or more `Capabilities`.
- A `Factor` maps to a `User`. 

- TODO: Should a `Factor` map to a house? This would allow a housekey to be mapped to an account. 

### Resource Model Diagram 

### Resource Database Tables

``` 
CREATE TABLE grouphouses (
    // Identifiers 
    id varchar(255) UNIQUE, // 
    name, // Does not need to be unique 
    domain_name UNIQUE,
    blurb, 
    
    // Geography
    street,
    city,
    state,
    zip, 
    
    // Existance 
    created_at, //
    renewed_at, // 
    expires_at, //
    expired_at, //
    
    // Indices  
);

CREATE TABLE users (

);

CREATE TABLE roles (

);

// Should this be stored in db? 
CREATE TABLE capabilities (

);

Cr

```

### CRUD Endpoints

### Work Sequence 

1. DB Tables 
2. Controller-Layer 
3. API
4. Frontend components

TODO: Diagram out as a flow chart, sequence should be determined by dependencies 
