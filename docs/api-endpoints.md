# API Endpoints
## HTML API
### Root
- GET/ - loads React web app

## JSON API
### Users
- POST /api/users
- PATCH /api/users
- GET /api/users/:user_id

### Session
- POST /api/session
- DELETE /api/session

### Batches
- GET /api/batches
  - Batches index/search
  - Accepts zip_code query param to get relevant batches
  - Accepts search term query params (bonus)
- POST /api/batches
- GET /api/batches/:id
- PATCH /api/batches/:id (bonus)
- DELETE /api/batches/:id (bonus)

### Reviews (bonus)
- GET /api/batches/:batch_id/reviews
- POST /api/batches/:batch_id/Reviews
