#systematic-design
When creating or receiving a design brief, it will contain various requirements imposed by the stakeholders on the product to be made. These come in two types - functional and non-functional.
### Functional Requirements
A functional requirement specifies what, exactly, the system should do. These are generally the most straightforward from a project management perspective as they are either done or they are not done and need to be.
A good functional requirement should be observable and testable and will define the way the system should interact with the world around it. But to be more specific, it determines what the interactions are, but not the specifics of how those interactions happen.
##### Examples
- The vehicle shall lock its doors automatically when speed exceeds 20 mph.
- The user management module shall allow the creation, update, and deletion of user accounts.
- The recommendation engine shall suggest three relevant videos after a student completes a module.
### Non-Functional Requirements
A non-functional requirement will describe not what a system should do, but how it performs its functions. These can often be in the form of constraints or quality attributes
Though non-functional requirements are often more difficult to enunciate and test, they are still important and can often be the main differentiator between several solutions on the market.
##### Examples
- The system shall respond to user actions within 250 milliseconds. (Performance) 
- The system shall be usable by users with visual impairments. (Accessibility)
- The data shall be encrypted using AES-256. (Security)
- The system uptime shall be 99.99% over a rolling 30-day window. (Availability)
##### Common Categories
According to ISO/IEC 25010:2011, non-functional requirements generally fit into the following categories:
- Performance
- Reliability
- Portability
- Compatibility
- Usability
- Maintainability
- Security
### Best Practices
When laying out a set of requitements, it is important to use them properly and avoid the common pitfalls.
- Overly vague requirements - "the system shall be fast" (how fast, when should it be that fast?)
- Unmeasurable - "the system should be easy to use"
- Conflicts - Speed vs Energy use
- Ignoring non-functional requirements in testing
- Ignoring non-functional requirements to achieve deadlines (sprints?)
On the other hand, there are some qualities that make up a good requirement:
- Correct
- Unambiguous
- Complete
- Consistent
- Verifiable
- Traceable
- Feasible
