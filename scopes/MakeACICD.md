# Make a CI/CD Pipeline [Intermediate]
please set up automated CI/CD pipeline to build and deploy containers

## What Specifically Needs to Be Done (Deliverables)
### [1st Deliverable]
Set up GitHub Actions workflow to automatically build Docker containers for all services.
### [Additional Info]
A CI/CD pipeline is needed to automatically build, test, and deploy containers when code changes are pushed to the repository.

**What to include:**
- Create GitHub Actions workflow file (.github/workflows/build.yml)
- Build Docker images for:
  - Frontend (Next.js)
  - Backend API (Express.js)
  - Documentation site (Docusaurus)
  - Reverse proxy (Caddy/Traefik)
- Push images to container registry (Docker Hub or GitHub Container Registry)
- Run basic tests to ensure containers work
- Set up proper environment variables and secrets
- Create SDL files for each service (service definitions, resources, ports)

### [1st Deliverable]: 1 hours
Summary: set up GitHub Actions workflow for building Docker containers.
Total Estimated Time: 1 hours
