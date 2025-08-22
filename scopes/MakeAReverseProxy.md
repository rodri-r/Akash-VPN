# Make a Reverse Proxy [Intermediate]
please set up a reverse proxy for routing and TLS termination

## What Specifically Needs to Be Done (Deliverables)
### [1st Deliverable]
Set up Caddy or Traefik as a reverse proxy and configure routing rules for all services.
### [Additional Info]
A reverse proxy is needed to route traffic between frontend, documentation, API, and VPN services with proper TLS termination.

**What to include:**
- Set up Caddy or Traefik as reverse proxy
- Configure routing rules:
  - `/` → Frontend
  - `/docs` → Documentation site
  - `/api/*` → Express.js server
  - VPN ports → SoftEther server
- Set up TLS termination with Let's Encrypt
- Test routing between all services
- Create SDL file for Akash deployment (service definition, resources, ports)

### [2nd Deliverable]
Test the reverse proxy setup and ensure all services are accessible via HTTPS
### [Additional Info]
The reverse proxy needs to work properly within the overall containerized architecture.

**What to verify:**
- All routing rules work correctly
- TLS certificates are properly configured
- HTTPS access works for all services
- Integration with containerized services

### [1st Deliverable]: 1 hours
Summary: set up reverse proxy with routing and TLS termination.
Total Estimated Time: 1 hours

